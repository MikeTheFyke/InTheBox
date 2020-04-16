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

var zone00 = {

    "doors" : [
  
      { "x":192, "y":64, "width":16, "height":16,
        "destination_zone":"01", "destination_x":0, "destination_y":-1 }
  
    ],
  
    "columns":12,
    "rows"   :9,
  
    "graphical_map":[42,24,17,17,17,17,26,24,17,35,5,44,24,18,31,39,39,31,29,18,39,31,39,11,10,39,39,39,39,31,11,31,39,39,0,41,10,39,31,47,39,4,21,31,39,39,16,17,43,6,39,31,31,39,31,39,47,39,39,31,38,31,31,31,7,39,31,39,31,39,39,12,32,6,31,3,7,7,39,39,39,47,39,37,10,7,12,23,13,7,3,31,31,31,39,8,40,1,41,1,41,1,41,1,1,1,1,48],
  
    "collision_map":[0,0,4,4,4,4,0,0,4,4,4,0,0,6,0,0,0,0,8,6,0,0,0,8,2,0,0,0,0,0,10,0,0,0,9,0,2,0,0,1,0,13,6,0,0,0,12,4,0,7,0,0,0,0,0,0,1,0,0,0,2,0,0,0,11,0,0,0,0,0,0,9,0,3,0,9,0,3,0,0,0,1,0,8,0,0,1,0,0,0,3,0,0,0,0,8,0,0,0,0,0,0,0,1,1,1,1,0],
  
    "id":"00"
  
};

var zone01 = {

"doors" : [

    { "x":-16, "y":64, "width":16, "height":16,
    "destination_zone":"00", "destination_x":192, "destination_y":-1 },

    { "x":192, "y":16, "width":16, "height":16,
    "destination_zone":"02", "destination_x":0, "destination_y":-1 }

],

"columns":12,
"rows"   :9,

"graphical_map":[30,16,49,2,7,7,22,36,30,19,16,17,11,39,16,49,2,4,21,31,19,39,31,31,38,31,31,16,18,31,31,39,31,39,39,4,18,31,31,31,31,39,39,31,31,47,31,0,31,39,39,31,31,39,39,39,31,31,31,8,5,5,14,6,31,39,39,47,39,31,31,8,1,27,21,39,39,31,31,39,39,12,28,42,9,10,31,39,39,3,39,39,7,37,42,24,26,40,1,1,2,11,0,27,14,34,9,10],

"collision_map":[0,4,0,0,0,0,0,4,0,4,4,4,2,0,12,0,0,4,6,0,14,0,0,0,2,0,0,12,6,0,0,0,0,0,0,9,6,0,0,0,0,0,0,0,0,1,0,8,0,0,0,0,0,0,0,0,0,0,0,8,1,1,1,7,0,0,0,1,0,0,0,8,0,0,6,0,0,0,0,0,0,9,1,0,0,2,0,0,0,11,0,0,9,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0],

"id":"01"

};

var zone02 = {

"doors" : [

    { "x":-16, "y":16, "width":16, "height":16,
    "destination_zone":"01", "destination_x":192, "destination_y":-1 },

    { "x":32, "y":144, "width":80, "height":40,
    "destination_zone":"03", "destination_x":-1, "destination_y":0 }

],

"columns":12,
"rows"   :9,

"graphical_map":[17,17,18,7,16,43,21,16,17,17,17,17,31,31,39,4,5,21,39,39,31,31,31,7,6,31,31,31,31,31,39,39,31,31,7,7,27,6,39,31,39,39,31,31,4,5,5,14,10,31,31,47,39,39,31,31,39,39,39,37,40,2,39,39,39,39,3,31,31,39,39,8,24,30,31,31,47,31,20,13,39,31,31,8,49,38,31,39,39,39,31,22,13,39,39,8,8,10,31,47,31,47,31,11,37,1,1,42],

"collision_map":[4,4,4,0,0,0,4,4,4,4,4,0,0,0,0,12,4,6,0,0,0,0,0,8,3,0,0,0,0,0,0,0,0,0,9,0,0,7,0,0,0,0,0,0,13,5,4,0,2,0,0,1,0,0,0,0,0,0,0,8,0,3,0,0,0,0,11,0,0,0,0,8,0,2,0,0,1,0,12,3,0,0,0,8,0,2,0,0,0,0,0,8,3,0,0,8,0,2,0,1,0,1,0,8,0,1,1,0],

"id":"02"

};

var zone03 = {

    "doors" : [
    
        { "x":32, "y":-16, "width":80, "height":16,
        "destination_zone":"02", "destination_x":-1, "destination_y":143 },
    
        { "x":192, "y":80, "width":16, "height":64,
        "destination_zone":"04", "destination_x":0, "destination_y":-1 }
    
    ],
    
    "columns":12,
    "rows"   :9,
    
    "graphical_map":[16,18,31,31,31,31,31,11,16,17,25,17,7,39,39,47,39,47,39,19,39,31,19,0,7,7,39,39,39,39,39,39,39,31,39,8,1,1,2,39,47,31,31,3,31,31,39,29,24,17,30,31,39,39,12,23,5,5,5,21,18,31,19,39,47,31,19,39,39,39,31,31,7,31,39,31,39,39,39,31,39,39,31,31,7,7,39,39,3,31,31,31,39,31,0,2,28,1,1,27,46,1,2,7,7,0,42,32],
    
    "collision_map":[0,6,0,0,0,0,0,8,4,4,0,0,2,0,0,1,0,1,0,14,0,0,12,0,0,3,0,0,0,0,0,0,0,0,0,8,0,0,3,0,1,0,0,11,0,0,0,8,0,4,2,0,0,0,9,4,5,5,5,4,2,0,14,0,1,0,14,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,11,0,0,0,0,0,9,1,0,0,1,1,0,1,1,1,1,1,0,0],
    
    "id":"03"
    
};

var zone04 = {

    "doors" : [
    
        { "x":-16, "y":80, "width":16, "height":64,
        "destination_zone":"03", "destination_x":192, "destination_y":-1 }
    
    ],
    
    "columns":12,
    "rows"   :9,
    
    "graphical_map":[26,40,41,42,10,16,17,25,35,36,25,26,42,9,24,17,18,31,39,11,39,39,20,34,9,24,18,31,39,39,4,23,6,31,39,29,25,18,31,39,39,39,31,31,31,39,39,11,19,39,31,39,31,47,31,31,31,47,31,37,31,39,39,31,31,39,31,47,31,39,4,34,31,31,39,4,14,6,31,39,39,7,7,8,0,2,31,39,11,31,31,31,7,7,7,8,44,18,4,14,33,28,2,0,1,1,1,48],
    
    "collision_map":[0,0,0,0,0,4,4,0,4,4,0,0,0,0,0,4,6,0,0,10,0,0,12,0,0,0,6,0,0,0,13,4,7,0,0,8,0,6,0,0,0,0,0,0,0,0,0,8,6,0,0,0,0,1,0,0,0,1,0,8,0,0,0,0,0,0,0,1,0,0,9,0,0,0,0,13,1,7,0,0,0,9,0,0,1,3,0,0,10,0,0,0,9,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0],
    
    "id":"04"
    
};
  


/// Index (Home) Route
app.get("/index", (req, res) => {
    let templateVars = { urls : urlDatabase };
    res.render("index", templateVars);
});

/// JSON Zone 00 01 02 03 & 04

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

/// Side Scroll Canvas Route
app.get("/sidescroll", (req, res) => {
    res.render("sidescroll");
});

/// T & P Canvas Route
app.get("/tandp", (req, res) => {
    res.render("tandp");
});

app.get("/zone00.json", (req, res) => {
    res.json(zone00);
});

app.get("/zone01.json", (req, res) => {
    res.json(zone01);
});

app.get("/zone02.json", (req, res) => {
    res.json(zone02);
});

app.get("/zone03.json", (req, res) => {
    res.json(zone03);
  });

app.get("/zone04.json", (req, res) => {
    res.json(zone04);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});