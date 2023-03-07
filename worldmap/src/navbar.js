import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style/navbar.css';

function ColorSchemesExample() {
   return (
      <Navbar bg="primary" variant="dark">
         <Container className='nav'>
            <Navbar.Brand href="#home">
               <img
                  src="./images/logo.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="brokenimage"
               />
            </Navbar.Brand>

               <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
               </Nav>
         </Container>
      </Navbar>
   );
}

export default ColorSchemesExample;