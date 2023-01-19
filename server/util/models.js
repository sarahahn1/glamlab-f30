const {DataTypes} = require('sequelize')
const db = require('./database')


const Makeup = db.define('makeup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true,
    },
    brand: DataTypes.STRING, 
    product: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING({length:500}),

})

const Photo = db.define('photo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true,
    },
    url: DataTypes.STRING({length:500}),
    primaryPhoto:DataTypes.BOOLEAN,

})

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true,
    },
    username: DataTypes.STRING({length:20}),
    password: DataTypes.STRING({length:30}),
    admin: DataTypes.BOOLEAN
})

const Inquiry = db.define('inquiry', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true,
    },
    email: DataTypes.STRING({length:50}),

})


module.exports = {Makeup, Photo, User, Inquiry}