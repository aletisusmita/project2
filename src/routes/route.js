const express = require('express');
const { property } = require('lodash');
const router = express.Router();
const app = express()
app.use(express.json())

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {

    
    const newPlayer = req.body;
    let temp = 0;
    for (let i = 0; i < players.length; i++) {
        if (newPlayer.name == players[i].name) {
            temp++;
            break;

        }

    }
    if (temp == 0) {
       
       res.send({ "new player joined": newPlayer })
       console.log("new player joined", newPlayer,players)
       players.push(newPlayer);
    }

    else {
        res.send({ error: "the player already exists" })
    }
})

module.exports = router;
