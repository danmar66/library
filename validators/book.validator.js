const Joi = require('joi')

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const bookSchema = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).lowercase().required(),
  author: Joi.string().alphanum().min(3).max(30).lowercase().required(),
})

exports.validateBook = validator(bookSchema)
