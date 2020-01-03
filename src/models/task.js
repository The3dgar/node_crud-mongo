// estructura del documento en una base de datos nosql

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
})
// coleccion, esquema
module.exports = mongoose.model('tasks', taskSchema)