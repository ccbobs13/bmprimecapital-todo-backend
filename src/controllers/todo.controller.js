const Todo = require('../models/todo.model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Body can not be empty!",
        });
    }
    const todo = new Todo(req.body);
    todo.save().then((err, newTodo) => {
        if (err) return res.send(err);
        return res.status(201).send(newTodo);
    })
}

exports.findAll = (req, res) => {
    Todo.find()
        .then((todos) => {
            return res.status(200).send(todos);
        })
        .catch((err) => {
            return res.send(err);
        })
}


exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Body can not be empty'
        });
    }
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedTodo) => {
            res.status(200).send(updatedTodo)
        })
        .catch((err) => {
            return res.send(err);
        });
}

exports.delete = (req, res) => {
    console.log(req.params.id)
    if (!req.params.id) {
        return res.status(400).send({
            message: 'Id can not be empty'
        });
    }
    Todo.findByIdAndDelete(req.params.id)
        .then(() => {
            return res.send({
                message: "Todo has been deleted",
                todo: todo

            })
        })
        .catch((err) => {
            return res.send(err);
        })
}

