/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // find message thread via conversation ID in database
  router.get("/conversation/:id", (req, res) => {
  });

  // create new post within conversation thread
  router.post("/:id", (req, res) => {
  });

  return router;
};
