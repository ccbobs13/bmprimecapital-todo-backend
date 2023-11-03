const controller = require('../controllers/todo.controller');
const router = require('express').Router();

router.get('/', controller.findAll);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;


