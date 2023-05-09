

function BookList({propBook, selectedFilter}) {
    // console.log(selectedFilter);
  return (
    <div className="row book-list">
      {selectedFilter === 'All'
        ? propBook
            .map((book) => (
              <div className="col-xs-6 col-sm-3" key={book.id}>
                <div className="thumbnail">
                  <img alt="" className="img-responsive" src={book.cover} />
                  <br />
                  {book.title}
                </div>
              </div>
            ))
        : propBook
            .filter((book) => book.category === selectedFilter)
            .map((book) => (
              <div className="col-xs-6 col-sm-3" key={book.id}>
                <div className="thumbnail">
                  <img alt="" className="img-responsive" src={book.cover} />
                  <br />
                  {book.title}
                </div>
              </div>
            ))}
    </div>
  );
}

export default BookList