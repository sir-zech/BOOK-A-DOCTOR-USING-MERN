import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import photo1 from '../../images/photo1.png';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '', password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/api/user/login", user);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
        message.success('Login successfully');
        const isLoggedIn = JSON.parse(localStorage.getItem("userData"));
        const { type } = isLoggedIn;

        switch (type) {
          case "admin":
            navigate("/adminHome");
            break;
          case "user":
            navigate("/userhome");
            break;
          default:
            navigate("/Login");
            break;
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  return (
    <>
      {/* Navbar Section with Home, Login, and Register Links */}
      <Navbar expand="lg" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Transparent background
        backdropFilter: 'blur(10px)',                  // Glass blur effect
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for a refined look
        padding: '1rem',
      }}>
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'} style={{
              color: '#ffc107', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none'
            }}>
              BOOK A DOCTOR
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/" style={{
                color: '#fff', marginRight: '1rem', transition: 'color 0.3s ease',
              }} className="nav-link-hover">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login" style={{
                color: '#fff', marginRight: '1rem', transition: 'color 0.3s ease',
              }} className="nav-link-hover">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" style={{
                color: '#fff', marginRight: '1rem', transition: 'color 0.3s ease',
              }} className="nav-link-hover">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Form Section */}
      <MDBContainer className="my-5">
        <MDBCard style={{ border: 'none' }}>
          <MDBRow style={{ background: 'rgb(190, 203, 203)' }} className="g-0 border-none p-3">
            <MDBCol md="6">
              <MDBCardImage src={photo1} alt="login form" className="rounded-start w-100" />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex mx-5 flex-column">
                <div className="d-flex flex-row mt-2 mb-5">
                  <span className="h1 fw-bold mb-0">Sign in to your account</span>
                </div>

                <Form onSubmit={handleSubmit}>
                  <label className="form-label" htmlFor="formControlLgEmail">Email</label>
                  <MDBInput
                    style={{
                      margin: '5px auto', 
                      padding: '10px', 
                      borderRadius: '30px',
                      border: '1px solid #ccc', 
                      backgroundColor: '#f8f9fa',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                      transition: 'all 0.3s ease'
                    }}
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    id="formControlLgEmail"
                    type="email"
                    size="md"
                    autoComplete="off"
                  />
                  <label className="form-label" htmlFor="formControlLgPassword">Password</label>
                  <MDBInput
                    style={{
                      margin: '5px auto', 
                      padding: '10px', 
                      borderRadius: '30px',
                      border: '1px solid #ccc', 
                      backgroundColor: '#f8f9fa',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                      transition: 'all 0.3s ease'
                    }}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    id="formControlLgPassword"
                    type="password"
                    size="md"
                    autoComplete="off"
                  />
                  {/* Updated Login Button to match "Home" button style */}
                  <Button className="mb-4 px-5 btn-home" size="lg" type="submit">Let's Enter</Button>
                </Form>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  Don't have an account? <Link to="/register" style={{ color: '#393f81' }}>Register here</Link>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>

      {/* Styles for Input Fields & Button */}
      <style>
        {`
          .btn-home {
            background-color: #ffc107;  /* Matching the button color */
            color: #343a40;
            border: none;
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            display: block;
            margin: 0 auto;
          }

          .btn-home:hover {
            background-color: #e67e22;
            color: white;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(-3px);
          }

          .btn-home:active {
            transform: translateY(1px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .form-label {
            font-weight: bold;
            color: #333;
          }

          .form-control {
            background-color: #f8f9fa;
            border-radius: 30px;
            padding: 10px;
            border: 1px solid #ccc;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .form-control:focus {
            background-color: #fff;
            border-color: #ffc107;
            box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
          }

          .nav-link-hover:hover {
            color: #ffc107 !important;
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
};

export default Login;
