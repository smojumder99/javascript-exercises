const getTheTitles = function(arr) {

return arr.reduce((bookTitles,book)=>{
    bookTitles.push(book.title)
return bookTitles},[]);
};

// Do not edit below this line
module.exports = getTheTitles;


