import { ADD_BOOK, MOVE_BOOK } from "./types";

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book: book,
  };
};

export const moveBook = (book) => {
  console.log(book);
  return {
    type: MOVE_BOOK,
    book: book,
  };
};
