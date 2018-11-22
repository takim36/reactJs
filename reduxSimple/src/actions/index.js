export const activeBook = (book) => {
  return {
    type : 'SELECTED_BOOK',
    payload: book,
  }
};