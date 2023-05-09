import BookList from './BookList';
import BookFilter from './BookFilter';

function Books({ propBooks, propFiltered, selectedFilter }) {
  //console.table('filter' + propFiltered);
  // console.log(propBooks);
  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <BookFilter propFilteredBook={propFiltered} />
          </div>
        </div>
        <BookList propBook={propBooks} selectedFilter={selectedFilter} />
      </div>
    </section>
  );
}

export default Books;
