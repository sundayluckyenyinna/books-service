"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Database {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            username: 'root',
            password: '12345678@@@',
            database: 'books'
        });
    }
    getSequelizeConnection() {
        return this.sequelize;
    }
}
exports.default = Database;
