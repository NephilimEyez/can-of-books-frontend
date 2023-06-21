import React from "react";
import { Form, Button, Modal } from 'react-bootstrap';

class UpdateBookModal extends React.Component {

  handleBookUpdate = (event) => {
    event.preventDefault();

    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      isbn: event.target.isbn.value,
      status: event.target.status.checked,
      _id: this.props.bookToUpdate._id,
      __v: this.props.bookToUpdate.__v
    }

    this.props.putBook(bookObj);
    this.props.handleCloseUpdateModal();
  }

    render(){
        return (
            <Modal show={this.props.showUpdateModal} >
            <Modal.Header closeButton onClick={this.props.handleCloseUpdateModal}>
              <Modal.Title>Add a new book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.handleBookUpdate}>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={this.props.bookToUpdate.title} />
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" defaultValue={this.props.bookToUpdate.description} />
                  </Form.Group>
                  <Form.Group controlId="isbn">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="text" defaultValue={this.props.bookToUpdate.isbn} />
                  </Form.Group>
                  <Form.Group controlId="status">
                    <Form.Label>Controversial</Form.Label>
                    <Form.Check type="checkbox" label="Controversial?" defaultChecked={this.props.bookToUpdate.status} />
                  </Form.Group>
                <Button variant="secondary" onClick={this.props.handleCloseUpdateModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit" >
                  Save Changes
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        
        )
    }
}

export default UpdateBookModal;