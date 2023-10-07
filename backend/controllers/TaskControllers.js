const taskModel= require("../models/TaskModels.js")

module.exports.getTask= async (req,res)=>{
    const tasks = await taskModel.find()
    res.send(tasks)
}