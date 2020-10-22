const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const {routes} = require('./src/routes')
const cors = require('cors')
// подключение к бд

async function start(){
    try{
        await mongoose.connect(
            'mongodb+srv://root:root@cluster0.ddt5e.mongodb.net/newshop',{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
    } catch(e){
        console.log(e)
    }
}

start();

// инициализируем приложение
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes.forEach((item) => {
    app.use(`/api/v1/${item}`,require(`./src/routes/${item}`))
})

//объявим роуты
const PORT = 8000;
http.createServer({}, app).listen(PORT)
console.log(`Server running at ${PORT}`)