const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 //mongodb+srv://PankajKumar:ByiTM70OjwbN3c2l@cluster0.smhvx.mongodb.net/PankajKumar-DB
 const mongoose=require("mongoose")
   mongoose.connect("mongodb+srv://PankajKumar:ByiTM70OjwbN3c2l@cluster0.smhvx.mongodb.net/PankajKumar-DB?retryWrites=true&w=majority",
{
    useNewUrlParser : true 
})
.then(  () => console.log("MongoDB is Connected"))
.catch(err => console.log(err))



app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
