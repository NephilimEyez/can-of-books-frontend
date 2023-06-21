import React from 'react';
import { Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        <Button onClick={this.props.handleShowModal} variant='primary'>Add a Book</Button>
      </Navbar>
    )
  }
}

export default Header;
