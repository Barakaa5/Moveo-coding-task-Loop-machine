let express = require("express");
let app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Initialize a list of all tracks and their names for reference.
let songs = [
  "_tambourine_shake_higher.mp3",
  "B_VOC.mp3",
  "DRUMS.mp3",
  "HE_HE_VOC.mp3",
  "HIGH_VOC.mp3",
  "JIBRISH.mp3",
  "LEAD_1.mp3",
  "UUHO_VOC.mp3",
];

app.get("/", function (req, res) {
  res.render("index", { songs: songs });
});

//Syntax Suitable for Heroku:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
