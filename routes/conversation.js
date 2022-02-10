/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // rendering single messaging thread between current user and other user about specific item
  router.get("/conversation", (req, res) => {

    const userID = req.params.user_id;

    // find conversation in database
    const queryConvo = `SELECT conversation.*
    build query to find: participants, messages, etc.
    Order by date posted`;

    db.query(queryConvo)

      .then(/* if no error, render the conversation requested from database */ data => {
        res.render("conversation")
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  // rendering the full inbox
  router.get("/inbox", (req, res) => {
    res.render("inbox");
  });

  // initializes new conversation between users about item
  router.post("/conversation", (req, res) => {
    /* Get current user id of user initiating contact
    - Get item id of item being inquired about
    - Get seller id of item -> inquire database to find seller
    - Make INSERT query into conversations table to create new conversation id
    - Redirect to new conversation*/
  });

  return router;
};
