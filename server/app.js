const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const app = express();
const port = 3001;

// set server to no-cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(express.static("./dist"));

const db = new sqlite3.Database(path.join(__dirname, "db", "mindium.db"));
//date current_timestamp
// create a new table for saving articles in db
db.run(
  "CREATE TABLE IF NOT EXISTS Articles (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, contents TEXT NOT NULL)",
  (err) => {
    // this if check is necessary, or err.message might be null.message
    if (err) {
      return console.error(err.message);
    }
  }
);

app.post("/write", (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res.send("Title and contents are required!!!");
  }
  db.run(
    "INSERT INTO Articles(title, contents) VALUES (?, ?)",
    [req.body.title, req.body.content],
    (err) => {
      if (err) {
        return console.error(err.message);
      }
    }
  );
  /* If error happens in the above SQL code, error be caught in the callback, and log error, the below codes res.json would still executes
  res.json({
    title: req.body.title,
    content: req.body.content,
  });*/

  res.redirect("http://localhost:3000");
});

app.get("/posts", (req, res) => {
  db.all("SELECT * FROM Articles", [], (err, rows) => {
    if (err) {
      res.send("Ohh...Something wrong happened... Sorry for that ><");
      return console.error(err.message);
    }
    res.json(rows);
  });
});

app.post("/delete", (req, res) => {
  db.run("DELETE FROM Articles WHERE id = ?", req.body.id, (err) => {
    if (err) {
      return console.error(err.message);
    }
  });
  res.json("Success");
});

/* one route with several handlers example - use next()
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})
=> request to /example/d => log CB0 -> CB1 -> The page shows: Hello from D!
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
