const errorHandler = (error, req, res, next) => {
  console.log(error)

  if (error.name === 'ValidationError') {
    return res.status(400).send({
      type: 'ValidationError',
      details: error.details,
    })
  }

  return res.status(400).send(error.message)
}

module.exports = errorHandler
