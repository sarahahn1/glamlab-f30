const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {Makeup, Photo, User, Inquiry} = require('./util/models')
const seed = require('./util/seed')
const { getAllMakeup } = require('./controllers/makeup')
const {register, login} = require('./controllers/user')
const {createEmail} =require ('./controllers/inquiry')

const server = express()
server.use(express.json())
server.use(cors())



Makeup.hasMany(Photo)
Photo.belongsTo(Makeup)

User.hasMany(Inquiry)
Inquiry.belongsTo(User)

Makeup.hasMany(Inquiry)
Inquiry.belongsTo(Makeup)

//! endpoints

server.get('/api/allMakeup', getAllMakeup)
server.post('/api/login',login)
server.post('/api/register', register)
server.post('/api/createEmail', createEmail)


db
    .sync({force: true})
     .then(() => seed())

     
server.listen(4000, () => console.log('up on 4000'))