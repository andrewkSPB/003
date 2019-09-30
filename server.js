const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const api = require('./server/api/index')
const mongoose = require('mongoose')
const keys = require('./server/config/keys')
const passport = require('passport')
const configJWTStrategy = require('./server/config/passport-jwt')()
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}, console.log('db connecter'))

// const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'dist', 'board')))

app.use(passport.initialize())


app.use('/api', api)

app.use('**', (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/board/index.html'))
})


app.listen(keys.port, console.log('server running', keys.port))