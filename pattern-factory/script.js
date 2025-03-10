const createBook = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

const book1 = createBook('Harry Portter', 'JK Rowling', 'AB123');

const book2 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 'CD456');

console.log(book1);
console.log(book2);
