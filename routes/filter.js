/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // find all items by ascending price
  router.get("/items/asc", (req, res) => {
    let query = `SELECT * FROM items`;
  });

  // find all items by ascending price
  router.get("/items/desc", (req, res) => {
    let query = `SELECT * FROM items`;
  });

  return router;
};
