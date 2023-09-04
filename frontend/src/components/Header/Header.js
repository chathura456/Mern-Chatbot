import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };


  return (
    <Navbar bg="primary" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/mynotes"><h2>SellSync</h2></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            
          </Nav>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "80px" }} navbarScroll>
        
            <Nav.Link href="/#action4">
              <Link to="/#action4">My Profile</Link>
            </Nav.Link>
            <Nav.Link href="/#action4">
              <Link to="/#action4">about us</Link>
            </Nav.Link>
            <NavDropdown title={`Hello, ${userInfo.name} `} id="navbarScrollingDropdown">
            <NavDropdown.Item> <Link to="/profile">Profile</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
