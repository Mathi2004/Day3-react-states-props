import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCart } from '@mui/icons-material';
import './App.css';
export class Daythree extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Cafe 360",
      }
    }
    styles = {
        fontStyle: 'Italic',
        color: 'Purple',
        fontSize: '28px',
      };
      
render() {
    return (
      <div>
        <h1 style={this.styles}>{this.state.message}</h1>
        <h6> “ Welcome to cafe 360.”</h6>
        <div className='Cafe'><Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.starbucks.in/dashboard">Cofee</Nav.Link>
            <Nav.Link href="https://www.tripadvisor.in/Restaurant_Review-g304556-d8734870-Reviews-Hotel_Sri_Annapoorna_Restaurant-Chennai_Madras_Chennai_District_Tamil_Nadu.html">Tea</Nav.Link>
            <Nav.Link href="https://www.justdial.com/Chennai/Mahak-Cakes-Bakes-Spices-Near-Buhari-Hotel-Kilpauk/044PXX44-XX44-190311173026-W9E2_BZDET?ncatid=10355951&area=&search=%20Pastry%20Shops%20in%20Chennai&mncatname=Pastry%20Shops">Pastries</Nav.Link>
          </Nav>
          <ShoppingCart></ShoppingCart>
        
        </Container>
      </Navbar>
      </div>
      </div>
    )
}
}
export default Daythree;