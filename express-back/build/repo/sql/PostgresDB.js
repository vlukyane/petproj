"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class PostgresDB {
    init() {
        const psql = new sequelize_1.Sequelize('TodosDatabase', 'vlukyane', '', {
            host: 'localhost',
            dialect: 'postgres',
            define: {
                timestamps: false
            }
        });
        psql.authenticate()
            .then(() => {
            console.log('Connection to postgres has been established successfully.');
        })
            .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
        this.Todo = psql.define('Todo', {
            content: {
                type: sequelize_1.DataTypes.STRING
            },
            isCompleted: {
                type: sequelize_1.DataTypes.BOOLEAN
            },
            isEditing: {
                type: sequelize_1.DataTypes.BOOLEAN
            },
        });
        return this;
    }
}
exports.PostgresDB = PostgresDB;
