import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import p3 from '../../images/p3.webp';

const Home = () => {
  return (
    <>
      <Navbar expand="lg" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',  // light transparent color
        backdropFilter: 'blur(10px)',                  // glass blur effect
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // subtle shadow
        padding: '1rem',
      }}>
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'} style={{ color: '#ffc107', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
              BOOK A DOCTOR
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll />
            <Nav>
              <Nav.Link as={Link} to="/login" style={{ color: '#fff', marginRight: '1rem' }}>
                <Button className='login-btn'>
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button className='register-btn'>
                  Register
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='home-container' style={{ display: 'flex', alignItems: 'center', padding: '2rem' }}>
        <div className="left-side" style={{ flex: '1', paddingRight: '1rem' }}>
          <img alt="" src={p3} style={{ width: '100%', borderRadius: '8px', border: 'none' }} />
        </div>
        <div className="right-side" style={{ flex: '1', paddingLeft: '1rem', textAlign: 'center' }}>
          <p>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Effortlessly schedule your doctor</span><br />
            <span style={{ fontSize: '1.2rem' }}>appointments with just a few clicks,</span> <br />
            <span style={{ fontSize: '1.2rem' }}>putting your health in your hands.</span><br />
            <Button className='book-doctor-btn mt-3' style={{
              marginTop: '1rem',
              backgroundColor: '#ffc107',
              border: 'none',
              padding: '0.5rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}>
              <Link to={'/Login'} style={{ color: '#343a40', textDecoration: 'none' }}>Book your Doctor</Link>
            </Button>
          </p>
        </div>
      </div>

      <style>
        {`
          .login-btn, .register-btn, .book-doctor-btn {
            background-color: #ffc107;
            color: #343a40;
            border: none;
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .login-btn:hover, .register-btn:hover, .book-doctor-btn:hover {
            background-color: #e67e22; /* Darken button on hover */
            color: white;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(-3px); /* Move button up on hover */
          }

          .login-btn:active, .register-btn:active, .book-doctor-btn:active {
            transform: translateY(1px); /* Button presses down on click */
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .book-doctor-btn {
            text-align: center;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}

export default Home;
