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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
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
      let newBookFromDB = await axios.post(url, bookObj);
      this.getAllBooks();
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    this.getAllBooks();
  }

  handleShowModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header handleShowModal={this.handleShowModal}/>
          <Routes>
            <Route exact path="/" element={<><BestBooks books={this.state.books}/> <NewBook handleShowModal={this.handleShowModal} handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} postBook={this.postBook} /></>}>
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
