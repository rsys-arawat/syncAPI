const axios = require("axios");

let Rsp_count = 0;
let i = 0;
let start_time, end_time;
const MAX_COUNT = 1; 

const newPost = {
    "business_id": 1717,
    "body": "please transfer to Agent",
    "auth_id": "abcdefdcffdgre1234567",
    "message_type": 0,
    "sync_call": true
};

const config = {
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "client_id": "498e5e0a5e1e0fbcfb369dccc675810ab815cfb9",
                "Authorization": "Bearer facebook-coke:35c7fc51fcf183ec1299125f1e6608549567a46d"
        },
};


function myFunction () {

        
        start_time =  Date.now();
        console.log("Start time is:", Date(), start_time);

        axios.post(
                "https://jio-api.hellohaptik.com/v6/log_message_sent_from_user/",
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

       //myFunction();
		
		//console.log("Iteration:", i, (end_time-start_time));
}

// export it
module.exports = { myFunction };