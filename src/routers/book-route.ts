import express from 'express';
import { Router, Request, Response } from "express";
import BookController from '../controllers/book-controller';

const bookRouter : Router = express.Router();

bookRouter.get('/all', async (request : Request, response : Response) => {
    const bookList = await BookController.getAllBooksFromService();
    console.log(bookList);
    response.send('Books');
});

export default bookRouter;
// app -> router -> controller -> service -> <repository> -> Database.