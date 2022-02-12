/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // rendering single messaging thread between current user and other user about specific item
  router.get("/conversation", (req, res) => {
    // find conversation in database
    const query = `SELECT * FROM conversations;`;
    db.query(query)
      .then(/* if no error, render the conversation requested from database */ data => {
        res.render("conversations")
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

    // render message according to conversation id
    router.get("/conversation/:id", (req, res) => {
      /* Get conversation id
      - Get message id
      - Create SELECT query for specific message */
      const {id} = req.params;
      let query = `SELECT id FROM conversations WHERE id = $1;`;
      db.query(query, [id])
        .then(data => {
          const convo = data.rows;
          res.json({ convo });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.convo });
        });
    });

  // initializes new conversation between users about item
  router.post("/conversation", (req, res) => {
    /* Get current user id of user initiating contact
    - Get item id of item being inquired about
    - Get seller id of item -> inquire database to find seller
    - Make INSERT query into conversations table to create new conversation id
    - Redirect to new conversation*/
    let query =`
    INSERT INTO conversations(seller, user, item_id)
    VALUES (${req.body})
    RETURNING *;`;
    db.query(query)
      .then(data => {
        const convo = data.rows;
        res.json({ convo });
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

  return router;
};
