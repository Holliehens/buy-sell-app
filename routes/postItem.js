/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  //create
  router.get("/postitem", (req, res) => {
    res.render();
  });

  // create new post within conversation thread
  router.post("/postitem", (req, res) => {
  });

  return router;
};
