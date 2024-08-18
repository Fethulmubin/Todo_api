const express = require('express')
const {addTask, updateTask, completeTask, deleteTask, editTask} = require('../controller/todo')
const {getTask} = require('../controller/todo')
// import { addTask } from ''
// import { getTask } from '../controller/todo'
const router = express.Router()

router.get('/', getTask)
router.post('/', addTask)
router.put('/update/:id', updateTask)
router.delete('/:id', deleteTask)
router.put('/complete/:id', completeTask)
router.put('/edit/:id', editTask)
// export default 
module.exports = router