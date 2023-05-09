function BookFilter({ propFilteredBook}) {
  //console.log(propFilteredBook);
  return <ul className="nav nav-pills text-center">
    {propFilteredBook}
    </ul>;
}

export default BookFilter;
