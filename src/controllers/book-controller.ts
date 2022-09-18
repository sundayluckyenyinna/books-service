import BookService from "../service/book-service";

export default class BookController
{
    constructor(){

    }

    static async getAllBooksFromService(){
        return await BookService.getAllBooks();
    }
}