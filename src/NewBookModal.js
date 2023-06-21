import React from "react";
import { Form, Button, Modal } from 'react-bootstrap';

class NewBookModal extends React.Component{
    render() {
        return (
            <Modal show={this.props.showModal} >
            <Modal.Header closeButton onClick={this.props.handleCloseModal}>
              <Modal.Title>Add a new book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form >
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>Book Cover</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="banned">
                  <Form.Label>Controversial</Form.Label>
                  <Form.Check type="checkbox" label="Controversial?" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default NewBookModal;