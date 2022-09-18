import express from 'express';
import { Request, Response, Application } from "express";
import bookRouter from './routers/book-route';

// Create the express application
const app : Application = express();

const PORT : number | undefined = Number(process.env.PORT) || 3000 ;

// Create a book
// Read all books from datastore
// Read a book
// Update a book
// Delete a book.
app.use('/books', bookRouter);

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT} `);
});