const {Schema, model} =require('mongoose')
const mongoose = require( 'mongoose');

// const Date = new Date().getTime
const TodoSchema = new Schema({
        task :{type : String, required: true},
        date :{type : String, required: true, default : new Date().getTime()},
        isEdit :{type: Boolean, default: false},
        isComplete :{type : Boolean, default : false}
    } 
)

 const TodoModel = model('todo' , TodoSchema);
 module.exports = TodoModel;