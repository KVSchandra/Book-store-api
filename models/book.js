const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Book Title is required'],
        maxLength : [100, 'Book Title cannot be more than 100 characters'],
    },
    author : {
        type : String,
        required : [true, 'Author name is required'],
        trim : true
    },
    year : {
        type : Number,
        required : [true, 'Year of publish is required'],
        min : [1000, 'Year must be atleast 1000'],
        max : [new Date().getFullYear(), 'Year cannot be in future']
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Book', bookSchema)