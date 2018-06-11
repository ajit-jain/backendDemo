const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(bodyParser({extended:true}));
app.use(cors());
require('./config/routes')(app);

// var twitter = new Twitter({
//     consumerKey: '3iuYxjH7fgNowbIKLQ8tiL2PR',
//     consumerSecret: 'vULlzG9N9Ppj0guv3Pm16CxcK43ACH2zAEc2ZLbjRb2yPJXNOI',
//     callback: 'http://127.0.0.1:4200/'
// });
// twitter= promise.promisifyAll(twitter);
// app.get('/getLoginLink',async(req,res)=>{
//     let result = await twitter.getRequestTokenAsync();
//     console.log(result);
//     res.send(result);
// })

app.listen(3000,()=>{
    console.log("connected to server");
});
