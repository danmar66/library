const Book = require('../models/book.model')
const { validateBook } = require('../validators/book.validator')

class bookController {
  async create(req, res) {
    try {
      const { error, value } = validateBook(req.body)
      if (error) {
        return res.send(error.details)
      }
      const book = await Book.create({
        ...value,
      })
      return res.json({ book })
    } catch (error) {
      console.error(error)
      res.status(424).json({ error: 'Unknown error' })
    }
  }

  async getAll(req, res) {
    try {
      let { ...options } = req.query
      const books = await Book.paginate({}, options ? options : null)
      return res.json({ books })
    } catch (error) {
      console.error(error.message)
      res.status(424).json({ error: 'Unknown error' })
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params
      const book = await Book.findById({ _id: id })
      return res.json(book)
    } catch (error) {
      console.error(error.message)
      res.status(424).json({ error: 'Unknown error' })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { error, value } = validateBook(req.body)
      if (error) {
        return res.send(error.details)
      }
      const newBook = await Book.findByIdAndUpdate(
        { _id: id },
        { ...value },
        { new: true }
      )
      return res.json(newBook)
    } catch (error) {
      console.error(error.message)
      res.status(424).json({ error: 'Unknown error' })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      const deleted = await Book.findByIdAndDelete({ _id: id })
      if (!deleted) {
        return res.json({ message: 'Already deleted' })
      }
      return res.json({ message: 'Book deleted', deleted })
    } catch (error) {
      console.error(error.message)
      res.status(424).json({ error: 'Unknown error' })
    }
  }
}

module.exports = new bookController()
