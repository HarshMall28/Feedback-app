const express = require("express");
const app = express();
const store = require("./callAws.js");
const bodyParser = require("body-parser");
const uuidv1 = require("uuid");
const session = require("express-session");
const path = require("path");
app.use(express.static("public"));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Content-Type", "application/json");
  console.log("some data");
  res.send("success");
  let data = req.body.data;
  let input = {
    flag: "put",
    phone: data[0],
    data1: data[1],
    data2: data[2],
    data3: data[3],
    data4: data[4],
    data5: data[5],
  };
  let newData = store.callLambda(input);
  console.log(newData);
});

app.listen(process.env.PORT || 8080, (_) => console.log("Server started"));
