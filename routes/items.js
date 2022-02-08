/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // Renders entire items table
  router.get("/item", (req, res) => {
    let query = `SELECT * FROM items`;
    console.log(query);
    db.query(query)
      .then(data => {
        const items = data.rows;
        res.json({ items });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Renders single item page
  router.get("/item/:id", (req, res) => {
    /* Get item id
    - SELECT item from items database
    - Renders item.ejs file according to data selected */
  })

  // Delete item from items table
  router.post("/item/:id/delete", (req, res) => {
    /* Check if current user has permissions in users table
    - Get item id
    - Create DELETE query that will drop item id from database */
  });

  // Edit item as being sold
  router.post("/item/:id/sold", (req, res) => {
    /* Check if current user has permissions in users table
  - Get item id
  - UPDATE query that checks item as sold and the user id of who purchased it*/
  });

  // Check if item is to be featured or not
  router.post("/item/:id", (req, res) => {
    /* Check if current user has permissions in users table
  - Get item id
  - UPDATE query requesting item be featured or not */
  });

  return router;
};
