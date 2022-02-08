/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  //create item form
  router.get("/postitem", (req, res) => {
    res.render();
  });

  //create item
  router.post("/postitem", (req, res) => {
  });

  //delete item
  router.post("/postitem/delete", (req, res) => {
  });

  //feature item
  router.post("/postitem/featuring", (req, res) => {
  });
  return router;
};
