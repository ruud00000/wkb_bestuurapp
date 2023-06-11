const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-lid', function(req, res) {
    const response = {
        lidsinds: "11/12/2001",
        achternaam: "Memelink",
        voornaam: "Wim",
        adres: "Straat 34",
        postcode: "7134 AB",
        woonplaats: "Eibergen",
        geboortedatum: "20/10/2950",
        email: "voorbeeld@adres.com",
        club: "Jannao",
        licentie: "B"        
    }
    res.send(response)
})

app.post('/update-lid', function(req, res) {
    const payload = req.body
    // console.log(payload)    
    if (Object.keys(payload).length === 0) {
        res.send({error: "Geen informatie ontvangen. Gegevens van lid zijn niet gewijzigd"})
    } else {
        // updating user profile
        res.send({info: "Gegevens van lid zijn gewijzgd"})
    }
})

app.listen(3000, function () {
    console.log("app listening on port 3000")
})