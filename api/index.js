// import mongoose from 'mongoose';
// import express from 'express'
// import cors from 'cors'
const router = require('./router/todo')
// import router from './router/todo';
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/todo', router)

const PORT = 5400 || process.env.PORT
const URI = "mongodb+srv://fetihul:cmHDecGXs2nlscfd@cluster0.g8hy3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI).
then(()=> app.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`)
}))