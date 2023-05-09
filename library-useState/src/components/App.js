import { useState } from 'react'

import Menu from './Navigations/Menu'
import NavBar from './NavBar';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Books from './Books'

import booksMockData from '../mocks/books';


function App() {
  const [books, setBooks] = useState(booksMockData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  // console.log(booksMockData);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const selectFilter = (filter) => {
    setSelectedFilter(filter)
    setBooks(
      filter === 'All'
        ? booksMockData
        : booksMockData.filter((book) => book.category === filter)
    )
  }

  const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

  const tabItems = filters.map((filter) => (
    <li
      className={filter === selectedFilter ? 'active' : ''}
      key={filter}
      onClick={() => selectFilter(filter)}
    >
      <a href="#0">{filter}</a>
    </li>
  ))

  return (
    <div id="page-wrap">
      <Menu pageWrapId="page-wrap" isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <NavBar toggleMenu={toggleMenu}/>

      <Header title="By React" />

      <Books propBooks={booksMockData} propFiltered={tabItems} selectedFilter={selectedFilter}/>
      <About />

      <Footer />
    </div>
  );
}

export default App
