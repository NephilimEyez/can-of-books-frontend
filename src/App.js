import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import NewBook from './NewBookModal';
import UpdateBook from './UpdateBookModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookToUpdate: {},
      showAddModal: false,
      showUpdateModal: false
    }
  }

  getAllBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      
      let booksFromDB = await axios.get(url);
      this.setState({
        books: booksFromDB.data
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  postBook = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, bookObj);

      this.setState({
        books:[...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  deleteBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;

      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== id);

      this.setState({
        books: updatedBooks
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  putBook = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookObj._id}`;
      let updatedBookFromAxios = await axios.put(url, bookObj);

      let updatedBookArr = this.state.books.map(book => {
        return book._id === bookObj._id ? updatedBookFromAxios.data : book
      });

      this.setState({
        books: updatedBookArr
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    this.getAllBooks();
  }

  handleShowAddModal = () => {
    this.setState({
      showAddModal: true
    })
  }

  handleCloseAddModal = () => {
    this.setState({
      showAddModal: false
    })
  }

  handleShowUpdateModal = (bookToUpdate) => {
    this.setState({
      bookToUpdate: bookToUpdate,
      showUpdateModal: true
    })
  }

  handleCloseUpdateModal = () => {
    this.setState({
      showUpdateModal: false
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header handleShowAddModal={this.handleShowAddModal}/>
          <Routes>
            <Route exact path="/" 
              element={
              <>
              <BestBooks 
              books={this.state.books} 
              deleteBook={this.deleteBook} 
              putBook={this.putBook}
              handleShowUpdateModal={this.handleShowUpdateModal}
              />
              <NewBook 
              handleShowAddModal={this.handleShowAddModal} 
              handleCloseAddModal={this.handleCloseAddModal} 
              showAddModal={this.state.showAddModal} 
              postBook={this.postBook} 
              />
              <UpdateBook 
              bookToUpdate={this.state.bookToUpdate} 
              putBook={this.putBook}
              showUpdateModal={this.state.showUpdateModal}
              handleShowUpdateModal={this.handleShowUpdateModal}
              handleCloseUpdateModal={this.handleCloseUpdateModal}
              />
              </>
            }>
            </Route>
            <Route exact path="/about" element={<About />} >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
