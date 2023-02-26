const express = require('express')
const bookRouter = new express.Router()
const bookContoller = require('../controllers/bookList.controller')

bookRouter.post('/create', bookContoller.create)
bookRouter.get('/all', bookContoller.getAll)
bookRouter.get('/:id', bookContoller.getOne)
bookRouter.put('/update/:id', bookContoller.update)
bookRouter.delete('/delete/:id', bookContoller.delete)

module.exports = bookRouter
