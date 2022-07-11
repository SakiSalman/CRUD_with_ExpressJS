const mongoose = require('mongoose')


const mongoDBConnect = async () => {
        try {
           await mongoose.connect(process.env.MONGO_STRING);
            console.log(`MongoDB is connected with your project`.bgCyan.black);
        } catch (error) {
            console.log(`${error}`.bgMagenta.black);
        }
}



module.exports = mongoDBConnect;