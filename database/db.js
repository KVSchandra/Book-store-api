const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI;

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Database has been connected successfully!')
    } catch (err) {
        console.error('Failed to connect DB : ', err);
        process.exit(1);
    }
}

module.exports = connectToDB