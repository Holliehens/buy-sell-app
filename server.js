// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const session = require("cookie-session");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'session',
  keys: ['keys']

}));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const adsRoutes = require("./routes/admins");
const convsRoutes = require("./routes/conversation");
const listingsRoutes = require("./routes/createlisting");
const favsRoutes = require("./routes/favourites");
const itemsRoutes = require("./routes/items");
const login = require("./routes/login");
const mesRoutes = require("./routes/messages");
const usersRoutes = require("./routes/users");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", adsRoutes(db));
app.use("/", convsRoutes(db));
app.use("/createlisting", listingsRoutes(db));
app.use("/", favsRoutes(db));
app.use("/", itemsRoutes(db));
app.use("/", login(db));
app.use("/", mesRoutes(db));
app.use("/api/users", usersRoutes(db));
// Note: mount other resources here, using the same pattern above
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  let query = `SELECT * FROM items`;
  db.query(query)
  .then(data => {
    const templateVars = { items: data.rows, featured: data.rows.filter(x => x.featured) };
    res.render("index", templateVars);
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

app.get("/hacklogin/:user_id", (req, res) => {
  req.session.user_id = req.params.user_id;
  res.send('You Are Now Logged In!');
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


