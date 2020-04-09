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
app.get("/", (req, res) => {
    let templateVars = { urls : urlDatabase };
    res.render("index", templateVars);
});

/// Truck Canavs Route
app.get("/truck", (req, res) => {
    res.render("truck");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});