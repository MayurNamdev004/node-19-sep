const express = require("express");
const studentcontroller = require('../controllers/studentcontroller')
const router = express.Router();
router.use(express.json())

router.post('/add/student', (req, res) => {
    studentcontroller.addStudent(req, res)

})
router.get('/students',(req,res)=>{
    studentcontroller.getStudent(req,res)

})
module.exports = router