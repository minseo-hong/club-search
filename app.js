const express = require("express");

const clubRoutes = require("./routes/club");

const PORT = 3000;

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(clubRoutes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`Link: http://localhost:${PORT}`);
});
