
//requiring count.js file
const mycount = require("./count.js")  

const express = require("express");

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

var qs = require("qs");

const port =  3000;

app.listen(port, () => {
  console.log(`Node server is running at http://localhost:${port}`);
});





function fetchUserInputEML() {
    return ("<Response>Hi There !</Response>");
}

app.get("/count", function (req, res) {
  console.log("Printing parameters received for / (GET) ", req.query);

  // set response header

  mycount.myFunction();

  res.status = 200;

  res.header("Content-Type", "text/xml");

  // set response content

  res.send("<response>Hi there !</response>");
});

// This is GET path

app.get("/eml", function (req, res) {
  console.log("Printing parameters received for /eml (GET) ", req.query);

  // set response header

  res.status = 200;

  res.header("Content-Type", "text/xml");

  // set response content

  res.send(fetchUserInputEML());
});

// This is POST method handler

app.post("/eml", function (req, res) {
  console.log("Printing parameters received for /eml (POST) ", req.body);

  // set response header

  res.status = 200;

  res.header("Content-Type", "text/xml");

  // set response content

  res.send(fetchUserInputEML());
});

//*************************************** */

// Gather action handler

//************************************* */

// This is GET path

app.get("/gatherAction", function (req, res) {
  console.log(
    "Printing parameters received for /gatherAction (GET) ",
    req.query
  );

  // set response header

  res.status = 200;

  res.header("Content-Type", "text/xml");

  // set response content

  res.send(
    '<?xml version="1.0" encoding="UTF-8"?> <Response><Say> Thank you I received input </Say></Response>'
  );
});

// This is POST method handler

app.post("/gatherAction", function (req, res) {
  console.log(
    "Printing parameters received for /gatherAction (POST) ",
    req.body
  );

  // set response header

  res.status = 200;

  res.header("Content-Type", "text/xml");

  // set response content

  res.send(
    '<?xml version="1.0" encoding="UTF-8"?> <Response><Say> Thank you I received input </Say></Response>'
  );
});

//***************************************** */

// CALL API botCallback webhook handler

// ***************************************

app.get("/botCallback", function (req, res) {

  console.log("Bot API callback received at:", Date(), Date.now());

  //console.log(
   // "Printing parameters received for /botCallback (GET) ",
  //  req.query
 // );
  console.log(
    "Response Body (GET): ",
    req.body
  );

  res.status = 200;

  // send 200 OK response
  res.header("Content-Type", "text/plain");
  res.send("Bot API callback response received !!!");
});

app.post("/botCallback", function (req, res) {

  console.log("Bot API callback received at:", Date(), Date.now());

  console.log(
    "Response Body (POST): ",
    req.body
  );

  // send 200 OK response
  res.header("Content-Type", "text/plain");
  res.send("Bot API callback response received !!!");
});