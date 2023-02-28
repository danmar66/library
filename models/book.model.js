const { Schema, model } = require('mongoose')
const pagination = require('mongoose-paginate-v2')

const schema = new Schema(
  {
    title: { type: String, require: true },
    author: { type: String, require: true },
  },
  { timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
)

schema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

schema.plugin(pagination)

module.exports = model('Book', schema)
