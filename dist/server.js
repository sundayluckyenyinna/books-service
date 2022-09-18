"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = __importDefault(require("./routers/book-route"));
// Create the express application
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
// Create a book
// Read all books from datastore
// Read a book
// Update a book
// Delete a book.
app.use('/books', book_route_1.default);
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT} `);
});
