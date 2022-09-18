import {Model, DataTypes} from 'sequelize'
import Database from '../datastore/database';

export default class Book extends Model
{
    constructor(){
        super();
    }

    createBookModel() {
        Book.init({
            bookId : {
                type: DataTypes.INTEGER,
                allowNull : false,
                primaryKey: true,
                unique : true
            },
            name : {
                type:DataTypes.STRING,
                allowNull: false,
            },
            author : {
                type: DataTypes.STRING,
                allowNull : false
            },
            year : {
                type: DataTypes.INTEGER,
                allowNull : false
            },
            isbn : {
                type: DataTypes.STRING,
                allowNull : false
            }
        }, {
            sequelize: new Database().getSequelizeConnection(),
            modelName : 'book'
        });
    }
}

