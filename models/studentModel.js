const mongoose = require('mongoose')




// Students Schcema
const stdenntSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is requires']
    },
    email : {
        type : String,
        unique : true
    },
    cell : {
        type : String,
        unique : true
    },
    photo : {
        type : String,
        default : 'avatar.png'
    }
},{
    timestamps : true
})




// export stdent model

module.exports = mongoose.model('Student', stdenntSchema)