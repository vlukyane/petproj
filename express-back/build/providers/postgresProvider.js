"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Provider_1 = require("./Provider");
const sequelizeDb_1 = tslib_1.__importDefault(require("../repository/sequelizeDb"));
const postgres_1 = tslib_1.__importDefault(require("../connections/postgres"));
class PostgresProvider extends Provider_1.Provider {
    constructor() {
        super();
        this.dataBaseObj = this.connect();
    }
    getDb() {
        return this.dataBaseObj;
    }
    connect() {
        return postgres_1.default;
    }
    isConnected() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dataBaseObj
                .authenticate()
                .then(() => {
                console.log('Connection to postgres has been established successfully.');
            })
                .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        });
    }
    close(force) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    getAllTodos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sequelizeDb_1.default.getAllTodos();
        });
    }
    addNewTodo(todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sequelizeDb_1.default.addNewTodo(todo);
        });
    }
    deleteTodoById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sequelizeDb_1.default.deleteTodoById(id);
        });
    }
    updateTodoById(id, todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sequelizeDb_1.default.updateTodoById(id, todo);
        });
    }
}
exports.PostgresProvider = PostgresProvider;
