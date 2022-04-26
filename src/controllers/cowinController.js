const axios = require("axios")


//WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

let getDistrictVaccination = async function(req,res){
    try {
        
        let district = req.query.district_id
        let date = req.query.date
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let output = await axios(options)
        console.log(output.data);
        res.status(200).send({"the vaccinated cities/ districts are :": output.data})
    } catch (error) {
        console.log(error)
        res.status(500).send({smg:error.message})
    }
}
module.exports.getDistrictVaccination =getDistrictVaccination


let getWeatherbyLocation = async function(req,res){
  
      try{  
        let cities= ["London","Delhi","Lucknow","Mumbai","Surat","Bengaluru"]
        let cityArr = []
        for (let i = 0; i < cities.length; i++) {
           let cityObj = { city: cities[i]}
       
        let output = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0441cb021f902804d256a19b67b6eb82`)
      
        console.log(output.data.main.temp);
        cityObj.temp = output.data.main.temp;
        cityArr.push(cityObj)
        }
        let sortByCity = cityArr.sort(function(a,b){return a.temp-b.temp}) 
        
        console.log(sortByCity)
        res.status(200).send({data : sortByCity})
     } catch (error) {
        console.log(error);
        res.status(500).send({smg:error.message})
       }
       
    }

module.exports.getWeatherbyLocation =getWeatherbyLocation


//3-Axios POST request assignment

// 1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
// 2. Pick a memeId you want (Eg 129242436) for the POST request
// 3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
// template_id <meme_id>


 let allMemes = async function(req,res){
     try {

         var options = {
             method : "get",
             url:`https://api.imgflip.com/get_memes`
         }
         let output = await axios(options)
         console.log(output.data)
         res.status(400).send({smg: output.data})
     } catch (error) {
         console.log(error);
         res.status(500).send({smg:error.message})
     }
 }
 module.exports.allMemes=allMemes

 let pickMemeIdPostReq = async function(req,res){
    try {
        let template_id = req.query._id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        var options = {
            method : "post",
            url:`https://api.imgflip.com/caption_image?_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let output = await axios(options)
        
        console.log(output.data)
        res.status(200).send({smg: output.data})
    } catch (error) {
        console.log(error);
        res.status(500).send({smg:error.message})
    }
}
module.exports.pickMemeIdPostReq = pickMemeIdPostReq