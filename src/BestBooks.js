import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';

class BestBooks extends React.Component {

  render() {


    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.books.length ? (
          <div className='carousel_container'>
            <Carousel>
              {this.props.books.map((book, index) => {
                return <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
                alt={book.title}
                />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
    })}
            </Carousel>
          </div>
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
