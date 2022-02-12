//WE WILL WORK OFF OF THIS
const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // display items that are in the current user's favourites
  router.get("/favourites", (req, res) => {
    /* Get current user's id
    - Create SELECT query getting all entries in favourites table associated with user
    - Get all item ids from favourites found and render */
    const user_id = req.session.user_id;

    let query = `SELECT *
    FROM favourites
    JOIN users ON user_id = users.id
    WHERE user_id = $1;
    `;

    db.query(query, [user_id])
      .then(data => {
        const templateVars = { fav: data.rows };
        console.log(templateVars);
        res.render("favourites", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // add item to user's favourites
  router.post("/favourites/:id", (req, res) => {
    /* Get current user's id
    - Get item id
    - Create INSERT query to add into favourites table */
    const user_id = req.session.user_id;
    if (!user_id) {
      return res
        .status(401)
        .json({ error: 'Please login' });
    };

    const item_id = req.params.id;

    let query = `SELECT *
    FROM items
    WHERE id = $1
    `;

    db.query(query, [item_id])
      .then(data => {
        const item = data.rows[0];
        let query = 'INSERT INTO favourites (user_id, item_id) VALUES($1, $2) RETURNING *';
        db.query(query, [user_id, item.id])
          .then(data => {
            const favourite = data.rows[0];
            console.log(favourite);
            res.json({ favourite });
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
