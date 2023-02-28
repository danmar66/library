const Book = require('../models/book.model')
const { validateBook } = require('../validators/book.validator')

const create = async (req, res) => {
  const { error, value } = validateBook(req.body)
  if (error) throw error
  const book = await Book.create({
    ...value,
  })
  return res.status(200).json({ book })
}

const getAll = async (req, res) => {
  let { ...options } = req.query
  const books = await Book.paginate({}, options ? options : null)
  return res.status(200).json({ books })
}

const getOne = async (req, res) => {
  const { id } = req.params
  const book = await Book.findById({ _id: id })
  if (!book) throw new Error("Book doesn't exist")
  return res.status(200).json(book)
}

const update = async (req, res) => {
  const { id } = req.params
  const { error, value } = validateBook(req.body)
  if (error) throw error
  const newBook = await Book.findByIdAndUpdate(
    { _id: id },
    { ...value },
    { new: true }
  )
  return res.status(200).json(newBook)
}

const remove = async (req, res) => {
  const { id } = req.params
  const deleted = await Book.findByIdAndDelete({ _id: id })
  if (!deleted) throw new Error("Book doesn't exist")
  return res.status(200).json({ message: 'Book deleted', deleted })
}

module.exports = { create, getAll, getOne, update, remove }
