const express = require('express')
const book = require('../models/book')

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await book.find({});
        if(allBooks.length > 0) {
            res.status(200).json({
                success : true,
                message : "All books has been fetched seuccessfully!",
                data : allBooks
            })
        }
        else {
            res.status(404).json({
                success : false,
                message : "Books were not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Something went wrong, try again");
    }

} 

const getBookId = async (req, res) => {
    const currentBookId = req.params.id
    const bookDetails = await book.findById(currentBookId)

    try {
        if(bookDetails) {
            res.status(200).json({
                success: true,
                message: "Book with requested ID is found!",
                data: bookDetails
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "Book not found!"
            })
        }
    } catch (err) {
        res.status(500).json("Some error occurred, please try again! ", err)
    }   
} 

const AddNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body
        const newlyCreatedBook = await book.create(newBookFormData)
        if(newBookFormData) {
            res.status(201).json({
                success : true,
                message : 'Book has been added',
                data : newBookFormData
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Failed to add book : ', err)
    }
} 

const updateBook = async (req, res) => {
    try {
        const getUpdateBookID = req.params.id
        const updateBookByForm = req.body
        const updatedBook = await book.findByIdAndUpdate(getUpdateBookID, updateBookByForm, {
            new : true
        })

        if(!getUpdateBookID || !updatedBook) {
            return res.status(404).json({
                success : false,
                message : "Book NOT found"
            })
        }

        res.status(200).json({
            success : true,
            message : "Book has been updated",
            data : updatedBook
        })
    } catch (err) {
        res.status(500).json("Something went wrong, try again!", err)
    }
} 

const deleteBook = async (req, res) => {
    try {
        const currBookID = req.params.id
        const bookDeletedByID = await book.findByIdAndDelete(currBookID)

        if(bookDeletedByID) {
            res.status(200).json({
                success : true,
                message : "Book with given ID has been deleted successfully",
                data : bookDeletedByID
            })
        }
        else {
            res.status(404).json({
                success : false,
                message : "Book with given ID was not found!"
            })
        }
    } catch (err) {
        res.status(500).json("Some error has occurred, please try again! ", err)
    }
} 

module.exports = {
    getAllBooks,
    getBookId,
    AddNewBook,
    updateBook,
    deleteBook
}