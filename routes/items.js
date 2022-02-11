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
    const item_id = req.params.id.items_id;
    - SELECT item from items database
    - Renders item.ejs file according to data selected */

    const item_id = req.params.id;

    let query = `SELECT id, description, price, photo_url
    FROM items
    WHERE id = $1
    `;
    console.log(query);
    db.query(query, [item_id])
      .then(data => {
        const item = data.rows[0];
        res.json({ item });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  // Delete item from items table
  router.delete("/item/:id/delete", (req, res) => {
    /* Check if current user has permissions in users table
    - Get item id
    - Create DELETE query that will drop item id from database */
    const item_id = req.params.id;
    let query = `DELETE FROM items
    WHERE id = $1`;
    console.log(query);
    db.query(query, [item_id])
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


  // Edit item as being sold
  router.put("/item/:id/sold", (req, res) => {
    /* Check if current user has permissions in users table
  - Get item id ||
  - UPDATE query that checks item as sold and the user id of who purchased it*/
  const item_id = req.params.id;
  let query = `UPDATE items
  SET is_sold = TRUE
  WHERE id = $1`;
  console.log(query);
  db.query(query, [item_id])
    .then(data => {
      const itemSold = data.rows[0];
      res.json({ itemSold });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


  // Check if item is to be featured or not
  router.get("/item/:id/featured", (req, res) => {
    /* Check if current user has permissions in users table
  - Get item id
  - UPDATE query requesting item be featured or not */
  const item_id = req.params.id;
  let query = `SELECT id, featured
  FROM items
  WHERE id = $1`;
  console.log(query);
  db.query(query, [item_id])
    .then(data => {
      const itemFeatured = data.rows[0];
      res.json({ itemFeatured });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


  return router;
};
