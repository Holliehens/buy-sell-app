/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // render message according to conversation id
  router.get("/conversation/:id", (req, res) => {
    /* Get conversation id
    - Get message id
    - Create SELECT query for specific message */
  });

  // creates new message
  router.post("/message/:id", (req, res) => {
    /* Get current user id
    - Get text of message
    - Get date_posted
    - Get conversation id
    - Create INSERT query into messages table */
  });

  return router;
};
