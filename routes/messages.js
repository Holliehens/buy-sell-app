/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  //Create new conversation
  router.get("/messages", (req, res) => {
    let query = `SELECT * FROM messages;`;
    db.query(query)
      .then(data => {
        const messages = data.rows;
        res.json({ messages });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/messages/:id", (req, res) => {
    const {id} = req.params;
    let query = `SELECT id, conversation_id FROM messages WHERE id = $1;`, [id];
    db.query(query)
      .then(data => {
        const messages = data.rows;
        res.json({ messages });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // creates new message
  router.post("/messages", (req, res) => {
    /* Get current user id
    - Get text of message
    - Get date_posted
    - Get conversation id
    - Create INSERT query into messages table */
    let query =`
    INSERT INTO messages(sender_id, message, date_posted, conversation_id)
    VALUES (${req.body})
    RETURNING *;`;
    db.query(query)
      .then(data => {
        const messages = data.rows;
        res.json({ messages });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};


