"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../datastore/database"));
class Book extends sequelize_1.Model {
    constructor() {
        super();
    }
    createBookModel() {
        Book.init({
            bookId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            year: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            isbn: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize: new database_1.default().getSequelizeConnection(),
            modelName: 'book'
        });
    }
}
exports.default = Book;
