import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import cartImage from './cartImage.png'
import { Badge } from 'react-bootstrap';


const Navi = () => {
   const cartProducts = useSelector(state => state.cart);

    return (
    
<Navbar  collapseOnSelect expand="lg" bg='primary' data-bs-theme='dark' fixed='top' >
      <Container >
        <Navbar.Brand to ='/' as={Link}>BigDeal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            {/* <Nav.Link to='/' as={Link}>Product</Nav.Link> */}
            
          </Nav>
          <InputGroup className="mb-3 " >
        <Form.Control
          className='bg-white search'
          placeholder="Search For Products"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" color='blue' id="bt">
         Search
        </Button>
      </InputGroup>
          <Nav>
            
          <Nav.Link to='/cart' as={Link}>
            <img src={cartImage} alt='Cart' className='cartimg' />
            {cartProducts.length > 0 && ( 
              <Badge bg="danger" pill className='cart-badge'>
                {cartProducts.length}
              </Badge>
            )}
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navi
