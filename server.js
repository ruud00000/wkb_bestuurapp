const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')

const { DB_USER, DB_PASS, DEV, DB_CONNECT } = process.env
// console.log("user: ",DB_USER," pass: ",DB_PASS," dev: ",DEV," connect: ",DB_CONNECT)
// const dbAddress = '127.0.0.1:27017'
const dbName = 'wkb_db'
const collName = 'leden'

// const url = DEV ? `mongodb://${dbAddress}` : `mongodb://${DB_USER}:${DB_PASS}@${dbAddress}?authSource=${dbName}`
const url = `${DB_CONNECT}`
// console.log("url: ",url)
const client = new MongoClient(url)
// console.log("client: ",client)


app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-clubs', async function(req, res) {
    /*try {
        await client.connect()
    } catch (error) {
        console.error('Error connect to database for get-clubs', error)
    }*/
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection(collName)
    const result = await collection.distinct( "club")
    console.log(result)
    jsonArray = []
    result.forEach(function(value) {
        var jsonObject = {"naam": value}
        jsonArray.push(jsonObject)
    }) 
    console.log(jsonArray)
    // client.close()

    res.send(jsonArray)
})
app.get('/get-lid', async function(req, res) {
    
    // connect to mongodb database
    await client.connect()
    console.log('Connected successfully to server')

    // initiate or get the db & collection
    const db = client.db(dbName)
    const collection = db.collection(collName)
    
    // get data from database
    const result = await collection.findOne({id: 1})
    console.log(result)
    client.close()
    
    response = {}
    if (result !== null) {
        response = {
            lidsinds: result.lidsinds,
            achternaam: result.achternaam,
            voornaam: result.voornaam,
            adres: result.adres,
            postcode: result.postcode,
            woonplaats: result.woonplaats,
            geboortdedatum: result.geboortedatum,
            email: result.email,
            club: result.club,
            licentie: result.licantie
        }
    }
    res.send(response)
    
})

app.post('/update-lid', async function(req, res) {
    
    const payload = req.body
    console.log(payload)    
    if (Object.keys(payload).length === 0) {
        res.send({error: "Geen informatie ontvangen. Gegevens van lid zijn niet gewijzigd"})
    } else {
        // connect to mongodb database
        await client.connect()
        console.log('Connected successfully to database server')

        // initiate or get the db & collection
        const db = client.db(dbName)
        const collection = db.collection(collName)

        // save payload data to the database
        payload['id'] = 1;
        const updatedValues = { $set: payload }
        await collection.updateOne({id: 1}, updatedValues, {upsert: true});
        client.close()
        
        res.send({info: "Gegevens van lid zijn gewijzgd"})
    }
})

app.listen(4001, function () {
    console.log("app listening on port 4001")
})