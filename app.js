var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function (req, res) {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
