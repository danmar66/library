const Joi = require('joi')

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const bookSchema = Joi.object({
  title: Joi.string().min(3).max(30).lowercase().required(),
  author: Joi.string().min(3).max(30).lowercase().required(),
})

exports.validateBook = validator(bookSchema)
