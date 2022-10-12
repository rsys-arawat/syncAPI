
const axios = require("axios");
const express = require("express");

const app = express();

app.use(express.json());

let counter =0;
let i = 0;
let start_time, end_time, callback_time;
const MAX_COUNT = 5;

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

app.get("/count", function (req, res) {
  console.log("Printing parameters received for / (GET) ", req.query);
  counter =1;
  // set response header
  myFunction();

  res.status = 200;

  res.header("Content-Type", "text/xml");

  // set response content

  res.send("<response>Hi there !</response>");
});



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
  
    callback_time =  Date.now();
    console.log("Bot API callback received count:", counter++, Date(), Date.now());
    console.log("Callback time:", callback_time-end_time);
  
  /*  console.log(
      "Response Body (POST): ",
      req.body
    );
  */
    // send 200 OK response
    res.header("Content-Type", "text/plain");
    res.send("Bot API callback response received !!!");
  });
  

  


const newPost = {
    "business_id": 1717,
    "user": {
        "auth_id": "1"
    },
    "message_type": 0,
    "message_body": "Hi there"
};

const config = {
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "client_id": "498e5e0a5e1e0fbcfb369dccc675810ab815cfb9",
                "Authorization": "Bearer 8b912ea33fde38d624ae65e25494826d"
        },
};


function myFunction () {


        start_time =  Date.now();
        console.log("            ");
        console.log("Start time is:", Date(), start_time);

        axios.post(
                "https://jio-messenger.hellohaptik.com/v1.0/log_message_from_user/",
                newPost,
                config
        )
        //.then((response) => console.log(response.data))
    .then((response) => countRsp(start_time))
        .catch((error) => console.log(error.response));
}


function countRsp(start_time){
    if ( typeof countRsp.counter == 'undefined' ) {
        countRsp.counter = 0;
    }
    countRsp.counter++

    //console.log("Rsp count:", countRsp.counter++);

    //if (countRsp.counter == MAX_COUNT)
    {
        end_time =  Date.now();
        //console.log("MAX_COUNT reached", countRsp.counter);
        //console.log("Start time:", start_time);
        //console.log("End time is:", Date(), end_time);
        console.log("Endtime is: " + Date(), end_time + " Time taken (ms):", end_time-start_time);

//console.log("Timer:", i);
sleep(1000).then(() => {
    myFunction();
})


    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
