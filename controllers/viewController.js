// Show ALl Students


const showalldata = (req, res) => {
    
 res.render('student')
}


/**
 * @desc Show form Data of ADd
 * @access public
 */

const showForm = (req, res) => {
        res.render('create')
    }
/**
 * @desc Show form Data of ADd
 * @access public
 */



// exports Modules
module.exports = {
    showForm,
    showalldata}