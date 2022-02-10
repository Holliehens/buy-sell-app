/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // sort items by ascending price
  router.get("/items/asc", (req, res) => {
    /* SELECT query getting all items ascending */
    res.render("filter");
  });

  // sort items by descending price
  router.get("/items/desc", (req, res) => {
    /* SELECT query getting all items descending */
  });

  return router;
};
