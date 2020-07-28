import axios from "axios";
const booksApi = "https://www.googleapis.com/books/v1/volumes?q="

export default {
  // Gets all books
  searchBooks: function (value) {
    return axios.get(booksApi + value);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Get a saved book from the database
  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  }

};
