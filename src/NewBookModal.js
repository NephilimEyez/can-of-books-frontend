import React from "react";
import { Container, Form, Button, Modal } from 'react-bootstrap';

class NewBookModal extends React.Component {

  handleBookSubmit = (event) => {
    event.preventDefault();

    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      isbn: event.target.isbn.value,
      status: event.target.status.checked
    }

    this.props.postBook(bookObj);
    this.props.handleCloseAddModal();

  }

    render() {
        return (
            <Modal show={this.props.showAddModal} >
            <Modal.Header closeButton onClick={this.props.handleCloseAddModal}>
              <Modal.Title>Add a new book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container className="mt-5">
                <Form onSubmit={this.handleBookSubmit}>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="isbn">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="status">
                    <Form.Label>Controversial</Form.Label>
                    <Form.Check type="checkbox" label="Controversial?" />
                  </Form.Group>
                <Button variant="secondary" onClick={this.props.handleCloseAddModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit" >
                  Add Book
                </Button>
                </Form>
              </Container>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default NewBookModal;