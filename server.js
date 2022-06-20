const express =require("express");
const webpush=require("web-push");
const bodyParser=require("body-parser");
const path=require("path");

require('dotenv').config();

const app=express();

//set static path
app.use(express.static(path.join(__dirname,"client")));

const PORT=process.env.PORT || 3000;

app.use(bodyParser.json());

webpush.setVapidDetails('mailto:pgarg11022001@gmail.com',process.env.PUBLIC_VAPID_KEY,process.env.PRIVATE_VAPID_KEY);

//Subscribe Route
app.post("/subscribe",(req,res)=>{

    //Get push subscription object
    const subscription=req.body;
    
        //Send 201 - resource created
    res.status(201).json({});
    
        //Create payload
    const payload=JSON.stringify({
        title:"ASSIGNED NEW TASK"
    });

    //pass object into push notification
    webpush.sendNotification(subscription,payload).catch(err=>console.error(err));

});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});