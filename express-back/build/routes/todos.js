"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
module.exports = class router {
    constructor(props) {
    }
};
const TodoController = require('../controllers/TodoController');
const router = new express_1.Router();
console.log('FROM HERE I CAN GEt CONrt');
const todoController = new TodoController();
router.get('/', todoController.getAllTodos);
router.post('/add', todoController.addNewTodo);
router.delete('/delete/:id', todoController.deleteTodoById);
router.put('/update/:id', todoController.updateTodoById);
exports.default = router;
