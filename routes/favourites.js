/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // display items that are in user's favourites
  router.get("/favourites", (req, res) => {
    res.render();
  });

  // add item to user's favourites
  router.get("/favourites", (req, res) => {
    let query = ``;
  });

  return router;
};
