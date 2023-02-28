const express = require('express')
const bookRouter = new express.Router()
const { tryCatch } = require('../utils/tryCath.utility')
const { ...book } = require('../controllers/bookList.controller')

bookRouter.post('/create', tryCatch(book.create))
bookRouter.get('/all', tryCatch(book.getAll))
bookRouter.get('/:id', tryCatch(book.getOne))
bookRouter.put('/update/:id', tryCatch(book.update))
bookRouter.delete('/delete/:id', tryCatch(book.remove))

module.exports = bookRouter
