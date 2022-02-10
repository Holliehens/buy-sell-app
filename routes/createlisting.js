/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // Renders create-listing page for admin to post new item listing
  router.get("/createlisting", (req, res) => {
    /* Check if current user has permissions
    - Render form that used to create INSERT query to initialize item into database*/
    res.render("createlisting");
  });

  // Initializes item into database
  router.post("/createlisting", (req, res) => {
    /* Get user id
  - Require: name, description, price, photo_url
  - Optional: is item featured
  - Create INSERT query with all above information into item table */
  });

  return router;
};
