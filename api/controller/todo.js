const TodoModel = require("../model/todo");
const addTask = async (req, res) => {
  try {
    const task = req.body;
    const Task = await TodoModel.create(task);
    res.json(Task);
  } catch (error) {
    console.log(error);
  }
};
const getTask = async (req, res) => {
  try {
    const Tasks = await TodoModel.find();
    res.json(Tasks);
  } catch (error) {
    console.log(error);
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the task ID is passed as a URL parameter
    const updatedData = req.body; // The updated task data

    // Find the task by ID and update it with the new data
    const updatedTask = await TodoModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};
const completeTask = async (req, res) => {
    try{
    const { id } = req.params; // Extract the task ID from the request parameters
    // const task = await TodoModel.findById(id);
    
    //     const updatedTask = await TodoModel.findByIdAndUpdate(
    //         id,
    //         { isComplete: !task.isComplete}, // Udate the isComplete field to the reverse of its initial value
    //         { new: true } // Return the updated document
    //       );
    
    //   if (!updatedTask) {
    //     return res.status(404).json({ message: "Task not found" });
    //   }
  
    //   res.json(updatedTask); 
    const task = await TodoModel.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    // Update the isComplete field to the reverse of its initial value
    task.isComplete = !task.isComplete;
    const updatedTask = await task.save();
    res.json(updatedTask);
   

   
  } catch (error) {
    console.log(error);
  }
};
const editTask = async (req, res) => {
    try{
    const { id } = req.params; // Extract the task ID from the request parameters
   
    const task = await TodoModel.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    // Update the isComplete field to the reverse of its initial value
    task.isEdit = !task.isEdit;
    const updatedTask = await task.save();
    res.json(updatedTask);
   
  } catch (error) {
    console.log(error);
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const Task = await TodoModel.findByIdAndDelete(id);
    res.json(Task);
  } catch (error) {
    console.log(error);
  }
};

// module.exports = getTask
// module.exports =addTask
// the correct one is below
module.exports = {
  addTask,
  getTask,
  updateTask,
  completeTask,
  deleteTask,
  editTask
};
