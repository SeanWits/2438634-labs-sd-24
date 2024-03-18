
export function getBookTitlesByYear(books){
  let output = {};
    for(var i = 0; i < books.length; i++){
        output[books[i].year] = [books[i].title, books[i].author];
  }
  return output;
}
