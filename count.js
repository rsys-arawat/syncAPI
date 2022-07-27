const axios = require("axios");

let Rsp_count = 0;
let i = 0;
let start_time, end_time;
const MAX_COUNT = 1; 

const newPost = {
    "business_id": 4939,
    "body": "I want to know about Fibre Connection",
    "auth_id": "__-43-00b79fb0c71246aaf0a688128583cd94329436ab",
    "message_type": 0
    //"sync_call": true
};

const config = {
        headers: {
                "Content-type": "application/json; charset=UTF-8",
        "client_id": "00b79fb0c71246aaf0a688128583cd94329436ab",
        "Authorization": "Bearer facebook-coke:71b6f675c3fa941b54cce0f13b73e92fb3e11280"
        },
};


function myFunction () {

        
        start_time =  Date.now();
        console.log("Start time is:", Date(), start_time);

        axios.post(
                "https://staging.hellohaptik.com/v6/log_message_sent_from_user/",
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
        console.log("End time is:", Date(), end_time);
        console.log("Iteration: " + countRsp.counter + "    Total time taken (ms):", end_time-start_time);
        

    }


    
}



//console.log("Before Start time:", start_time);
//console.log("current time is:", Date());

for (i=0; i < MAX_COUNT ; i++) {

       // myFunction();
		
		//console.log("Iteration:", i, (end_time-start_time));
}

// export it
module.exports = { myFunction };