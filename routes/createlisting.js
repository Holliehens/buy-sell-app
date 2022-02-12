/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // Renders create-listing page for admin to post new item listing
  router.get("/", (req, res) => {
    /* Check if current user has permissions
    - Render form that used to create INSERT query to initialize item into database*/
    // render ejs template

    res.render('createlisting', { userID: req.session.user_id });
  });

  // Initializes item into database
  router.post("/", (req, res) => {
    /* Get user id
  - Require: name, description, price, photo_url
  - Optional: is item featured
  - Create INSERT query with all above information into item table */
    const user_id = req.session.user_id;
    if (!user_id) {
      return res
      .status(401)
      .json({ error: 'Cannot Create Listing. Not Logged In.' });
    };
  const { name, description, price, photo_url } = req.body;


  let query = 'INSERT INTO items (seller_id, name, description, price, photo_url) VALUES($1, $2, $3, $4, $5) RETURNING *';
  console.log(query);
  db.query(query, [user_id, name, description, price, photo_url])
    .then(data => {
      const item = data.rows[0];
      console.log(data.rows[0]);
      res.redirect("/createlisting");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


return router;
};
