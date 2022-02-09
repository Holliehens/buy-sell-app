//TEMPLATE FOR ROUTES FROM USERS.JS
//WE WILL WORK OFF OF THIS
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // display items that are in the current user's favourites
  router.get("/favourites", (req, res) => {
    /* Get current user's id
    - Create SELECT query getting all entries in favourites table associated with user
    - Get all item ids from favourites found and render */
  });

  // add item to user's favourites
  router.get("/favourites", (req, res) => {
    /* Get current user's id
    - Get item id
    - Create INSERT query to add into favourites table */
  });

  return router;
};
