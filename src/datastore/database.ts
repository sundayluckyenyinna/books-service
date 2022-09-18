import { Sequelize } from "sequelize";

export default class Database
{
    private sequelize : Sequelize;
    
    constructor(){
        this.sequelize = new Sequelize({
            dialect: 'mysql',
            host:'localhost',
            username: 'root',
            password: '12345678@@@',
            database: 'books'
        });
    }

    getSequelizeConnection() : Sequelize {
        return this.sequelize;
    } 

    // Arrow function using typescript
    // getInstance = () : Sequelize => {
    //     return this.sequelize;
    // }
}