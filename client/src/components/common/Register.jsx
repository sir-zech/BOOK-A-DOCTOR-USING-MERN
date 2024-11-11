import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { message } from 'antd';
import p2 from '../../images/p2.png';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from 'mdb-react-ui-kit';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: '', email: '', password: '', phone: '', type: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8001/api/user/register', user);
      if (res.data.success) {
        message.success('Registered Successfully');
        navigate('/login');
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
      {/* Navbar Section */}
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
              <Nav.Link as={Link} to="/" className="nav-link-hover">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link-hover">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-link-hover">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Register Form Section */}
      <MDBContainer className="my-5">
        <MDBCard style={{ border: 'none' }}>
          <MDBRow style={{ background: 'rgb(190, 203, 203)' }} className="g-0 border-none p-3">
            <MDBCol md="6">
              <MDBCardBody className="d-flex mx-3 flex-column">
                <div className="d-flex flex-row mb-2">
                  <span className="h1 text-center fw-bold">Sign up to your account</span>
                </div>

                <Form onSubmit={handleSubmit}>
                  <label className="my-1 form-label" htmlFor="formControlLg">Full name</label>
                  <MDBInput
                    style={{ height: '40px' }}
                    name="fullName"
                    value={user.fullName}
                    onChange={handleChange}
                    id="formControlLg"
                    type="text"
                    size="sm"
                    className="form-control-hover"
                  />

                  <label className="my-1 form-label" htmlFor="formControlLg">Email</label>
                  <MDBInput
                    style={{ height: '40px' }}
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    id="formControlLg"
                    type="email"
                    size="sm"
                    className="form-control-hover"
                  />

                  <label className="my-1 form-label" htmlFor="formControlLg">Password</label>
                  <MDBInput
                    style={{ height: '40px' }}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    id="formControlLg"
                    type="password"
                    size="sm"
                    className="form-control-hover"
                  />

                  <label className="my-1 form-label" htmlFor="formControlLg">Phone</label>
                  <MDBInput
                    style={{ height: '40px' }}
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    id="formControlLg"
                    type="phone"
                    size="sm"
                    className="form-control-hover"
                  />

                  <Container className="my-3">
                    <MDBRadio
                      name="type"
                      id="inlineRadio1"
                      checked={user.type === 'admin'}
                      value="admin"
                      onChange={handleChange}
                      label="Admin"
                      inline
                    />
                    <MDBRadio
                      name="type"
                      id="inlineRadio2"
                      checked={user.type === 'user'}
                      value="user"
                      onChange={handleChange}
                      label="User"
                      inline
                    />
                  </Container>

                  {/* Register Button Styled Like Login Button */}
                  <Button
                    style={{ marginTop: '20px' }}
                    className="mb-4 btn-home"
                    variant="dark"
                    size="lg"
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>

                <p className="mb-5 pb-md-2" style={{ color: '#393f81' }}>
                  Have an account?{' '}
                  <Link to="/login" style={{ color: '#393f81' }} className="link-hover">
                    Login here
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>

            <MDBCol md="6">
              <MDBCardImage
                style={{ mixBlendMode: 'darken' }}
                src={p2}
                alt="register form"
                className="rounded-start w-100"
              />
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>

      {/* Styles for Input Fields, Button, and Links with Hover Effects */}
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

          .form-control-hover {
            background-color: #f8f9fa;
            border-radius: 30px;
            padding: 10px;
            border: 1px solid #ccc;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .form-control-hover:hover {
            background-color: #fff;
            border-color: #ffc107;
            box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
          }

          .form-control-hover:focus {
            background-color: #fff;
            border-color: #ffc107;
            box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
          }

          .nav-link-hover:hover {
            color: #ffc107 !important;
            transform: scale(1.1);
          }

          .link-hover:hover {
            color: #ffc107;
            text-decoration: underline;
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
};

export default Register;
