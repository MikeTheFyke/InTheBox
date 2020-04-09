const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

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

app.get("/", (req, res) => {
  res.send("Hello!");
});

/// Added Second Route - /urls.json
app.get("/urls.json", (req, res) => {
    res.json(urlDatabase);
  });

/// Added Third Route - /hello
app.get("/hello", (req, res) => {
res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});