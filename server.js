const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const uuidv1 = require('uuid')
const session = require('express-session')
const path = require('path')
app.use(express.static('public'))
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({extended : true}))
// app.use(session({
//   cookie: {
//     maxAge: 900000,
//     sameSite: true
//   },
// //   genid: function () {
// //     return uuidv1()
// //   },
//   name: 'dialogflow.connection',
//   resave: true,
//   rolling: true,
//   saveUninitialized: true,
//   secret: 'turboblaze'
// }))


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.post('/data', (req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');
    console.log("some data");
    res.send("success");
    let data = req.body.data
    console.log(data[0]);
});

// app.get('/bot', (req, res) => {
//   const { language, query } = req.query
//   const sessionId = req.session.id
//   console.log(`Session: ${sessionId} | Query: ${query}`)
//   detectIntent({ sessionId, language, query }).then((response) => res.json(response))
// })

// app.post('/audio', (req, res) => {
//   const base64String = req.body
//   const sessionId = req.session.id
//   console.log(`Session: ${sessionId} | Audio input`)
//   detectIntent({ sessionId, language: 'en-IN', audio: base64String }).then((response) => res.json(response))
// })


app.listen((process.env.PORT || 8080), _ => console.log('Server started'))