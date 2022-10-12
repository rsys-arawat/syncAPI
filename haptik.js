
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
        console.log("T1:: API request send time is:", Date(), start_time);

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
        console.log("T2:: First API response received: " + Date(), end_time + " Time taken from API request (ms):", end_time-start_time);

//console.log("Timer:", i);
sleep(1000).then(() => {
    myFunction();
})
