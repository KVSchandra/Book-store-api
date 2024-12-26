const express = require('express')
const {getAllBooks, getBookId, AddNewBook, updateBook, deleteBook} = require('../controllers/bookControllers')
const router = express.Router();

router.get('/get', getAllBooks)
router.get('/get/:id', getBookId)
router.post('/add', AddNewBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router