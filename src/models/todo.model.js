const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    name: {type: String},
    status: {type: Boolean},
    addedDate: {type: Date}
})

const Todo = mongoose.model("Todo", TodoSchema)
module.exports = Todo;