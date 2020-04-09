const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs")
app.use('/public', express.static('public'));

const urlDatabase = {
  "Truck Canvas": "./views/truck.html",
  "Storage Canvas": "./views/store.html",
  "House Canvas": "./views/house.html",
  "Kitty Canvas": "./views/kitty.html",
  "FPS Hud Canvas": "./views/hud.html",
  "Antfarm Canvas": "./views/antfarm.html",

  "Cubes Canvas": "./views/cubes.html",
  "Spikes Canvas": "./views/spikes.html",
  "Eyes Canvas": "./views/eyes.html",
  "Spin Canvas": "./views/spin.html",
  "multi Canvas": "./views/multi.html",
  "Pong Canvas": "./views/pong.html",
};

/// Index (Home) Route
app.get("/index", (req, res) => {
    let templateVars = { urls : urlDatabase };
    res.render("index", templateVars);
});

/// Truck Canvas Route
app.get("/truck", (req, res) => {
    res.render("truck");
});

/// Storage Canvas Route
app.get("/store", (req, res) => {
    res.render("store");
});

/// House Canvas Route
app.get("/house", (req, res) => {
    res.render("house");
});

/// Kitty Canvas Route
app.get("/kitty", (req, res) => {
    res.render("kitty");
});

/// FPD Hud Canvas Route
app.get("/hud", (req, res) => {
    res.render("hud");
});

/// Antfarm Canvas Route
app.get("/antfarm", (req, res) => {
    res.render("antfarm");
});

/// Cubes Canvas Route
app.get("/cubes", (req, res) => {
    res.render("cubes");
});

/// Spikes Canvas Route
app.get("/spikes", (req, res) => {
    res.render("spikes");
});

/// Eyes Canvas Route
app.get("/eyes", (req, res) => {
    res.render("eyes");
});

/// Spin Canvas Route
app.get("/spin", (req, res) => {
    res.render("spin");
});

/// Multi Canvas Route
app.get("/multi", (req, res) => {
    res.render("multi");
});

/// Pong Canvas Route
app.get("/pong", (req, res) => {
    res.render("pong");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});