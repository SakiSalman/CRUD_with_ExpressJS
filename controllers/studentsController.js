const Students = require("../models/studentModel")

/**
 * 
 * @des get all studnets data
 * @name Get /student/
 * @access public
 */
const addstudent = async (req, res) => {
  await  Students.create({
        ...req.body, photo : req.file.filename
    }) 
    
    res.redirect('/')
}
/**
 * 
 * @des Create a student data
 * @name Post /student/
 * @access public
 */
const getallStudents = async (req, res) => {

    let students = await Students.find()

    res.render('student', {
        students : students
    })

}
/**
 * 
 * @des Show Singel data
 * @name Post /student/
 * @access public
 */
const getsingeldata = async (req, res) => {
    let id = req.params.id


    let studentsdata = await Students.findById(id)

    res.render('singel', {
        singel : studentsdata
    })

    console.log(studentsdata);

}
/**
 * 
 * @des Update Singel data
 * @name Post /student/
 * @access public
 */
const updateDatashow = async (req, res) => {
    let id = req.params.id

    let studentsdata = await Students.findById(id)

    res.render('update', {
        studentsdata : studentsdata
    })


}
/**
 * 
 * @des Update Singel data
 * @name Post /student/
 * @access public
 */
const updateData = async (req, res) => {
    let id = req.params.id

     await Students.findByIdAndUpdate(id, {
        ...req.body, photo : req.file.filename
    }, {
        new: true
    })


    res.redirect('/')

}
/**
 * 
 * @des Delete Singel data
 * @name Post /student/
 * @access public
 */
const deleteData = async (req, res) => {
    let id = req.params.id

     await Students.findByIdAndDelete(id)


    res.redirect('/')

}





// exports Controllers
module.exports = {
    getallStudents,
    addstudent,
    getsingeldata,
    updateData,
    updateDatashow,
    deleteData
}