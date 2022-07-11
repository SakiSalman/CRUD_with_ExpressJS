const express = require('express');
const { addstudent, getallStudents, getsingeldata, updateData, updateDatashow, deleteData } = require('../controllers/studentsController');
const { showForm,  } = require('../controllers/viewController');
const multer = require('multer')
const path = require('path')

const router = express.Router()

// multer configaratioon
 const storage = multer.diskStorage({
    destination : ( req, file, cb) => {
        cb(null, path.join(__dirname, '../assets/upload/'))
    },
    filename : ( req, file, cb)=> {
        cb(null, Date.now() + "_" + file.originalname)
    }
 })

//  multer load 
const studentMulterMange = multer({
    storage : storage
}).single('photo')

// create new student
router.get('/create', showForm)
router.post('/create', studentMulterMange, addstudent)
// // Show Singel Data
router.get('/:id', getsingeldata)
// get all students
router.get('/', getallStudents)
// Update studnets data
router.get('/update/:id', updateDatashow)
router.post('/update/:id', studentMulterMange,  updateData)
// Delete studnets data
router.get('/delete/:id', deleteData)







// export Router
module.exports = router;