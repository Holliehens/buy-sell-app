/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // display items that are in the current user's favourites
  router.get("/:id", (req, res) => {
    // res.send("hello")
    const {id} = req.params;
    let query = `SELECT * FROM favourites WHERE user_id = $1;`, [id];
    db.query(query)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    /* Get current user's id
    - Create SELECT query getting all entries in favourites table associated with user
    - Get all item ids from favourites found and render */
  });

  // add item to user's favourites
  router.post("/favourites", (req, res) => {
    /* Get current user's id
    - Get item id
    - Create INSERT query to add into favourites table */
  });

  return router;
};
