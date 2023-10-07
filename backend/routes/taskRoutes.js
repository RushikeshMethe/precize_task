const {Router} = require("express")
const {getTask}= require("../controllers/TaskControllers.js")
const router = Router()

router.get("/get",getTask);

module.export= router