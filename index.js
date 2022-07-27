const axios = require("axios");

let count = 0; 

const newPost = {
    "business_id": 4939,
    "body": "I want to know about fibre connection",
    "auth_id": "__-43-00b79fb0c71246aaf0a688128583cd94329436ab",
    "message_type": 0,
    "sync_call": true
};

const config = {
	headers: {
		"Content-type": "application/json; charset=UTF-8",
        "client_id": "00b79fb0c71246aaf0a688128583cd94329436ab",
        "Authorization": "Bearer facebook-coke:71b6f675c3fa941b54cce0f13b73e92fb3e11280"
	},
};


function myFunction () {
	axios.post(
		"https://staging.hellohaptik.com/v6/log_message_sent_from_user/",
		newPost,
		config
	)
	//.then((response) => console.log(response.data))
    .then((response) => console.log("success:"))
	.catch((error) => console.log(error.response));
}


let i = 0;
let start_time, end_time;

for (i=0; i<1; i++) {

        start_time =  Date.now();
        myFunction();
		end_time =  Date.now();

		
		console.log("Iteration:", i, (end_time-start_time));

}
