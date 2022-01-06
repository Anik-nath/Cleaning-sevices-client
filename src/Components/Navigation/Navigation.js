import React, { useState } from "react";
import { Button, Container, Nav, Navbar,Dropdown, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../Hooks/useAuth";
import styles from './myButton.module.css';
import userimg from '../../images/user.png';

const Navigation = () => {
  const {user,signout} = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSignOut =()=>{
    signout();
  }
  return (
    <div>
     <div className={styles.mainbg}>
      <div className="d-flex flex-lg-row flex-column justify-content-lg-between container align-items-center py-3 text-white">
          <div style={{fontSize:"14px"}} className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column align-items-center">
            <span className="me-4"><i className="fas fa-map-marker-alt"></i> New Area, Bangladesh, Road, 1000</span>
            <span><i className="far fa-envelope"></i> cleener@gmail.com</span>
          </div>
          <div style={{fontSize:"14px"}}>
            <NavLink className="text-decoration-none text-white" to="/">Support</NavLink>
            <NavLink className="text-decoration-none text-white mx-4" to="/">Terms & Conditions</NavLink>
            <NavLink className="text-decoration-none text-white" to="/">News</NavLink>
          </div>
        </div>
     </div>
      <Navbar className="py-2 text-black shadow-sm " collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
        <Container>
          <Navbar.Brand className="d-flex align-items-center me-5" as={HashLink} to="/home">
          <span className="h1 text-primary"><i className="fas fa-broom"></i></span>
          <div className="d-flex flex-column">
          <h1 className="h1 mb-0"><span className={styles.mainText}>Cleener</span></h1>
            <span className={styles.brandTitle}>Best cleaning services</span>
          </div>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="me-auto fw-bold">
              <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/about">About</Nav.Link>
              <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
              <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
              <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>
              <Nav.Link as={HashLink} to="/registration">Sign up</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
               <Button onClick={handleShow} className={styles.myButton}>
                 <i className="fas fa-phone-alt border-1 border bg-light text-dark p-3 me-2 my-1"></i> 
                 <div>
                 <span>Get free Estimate</span> <br />
                 <span className="h6">012 365 799</span> 
                   </div></Button>
              </Nav.Link>
              <div className="d-flex flex-column align-items-center justify-content-center">
              <Dropdown>
                <Dropdown.Toggle style={{width:"40px",height:"40px"}} className="p-0 rounded-circle ">
                  {user.email ?  <img className="rounded-circle img-fluid w-100" src={user.photoURL} alt="" />
                  : <i className="fas fa-user text-white"></i> }
                </Dropdown.Toggle>
                <Dropdown.Menu style={{left:"-100px",top:"70px"}}>
                  <div className="d-flex flex-column text-center p-3">
                    {
                      user.email ? 
                      <img className="w-50 rounded-circle border border-1 mx-auto mb-3" src={user.photoURL} alt="" />
                      :
                      <img className="w-50 rounded-circle border border-1 mx-auto mb-3" src={userimg} alt="" />
                    }
                      <small style={{wordBreak : "break-all"}}>{user.displayName}</small>
                      <small style={{wordBreak : "break-all"}}>{user.email}</small>
                    </div>
                  <div className="text-center">
                    {
                      !user.email ? 'user info'
                      : <Button onClick={handleSignOut}>Sign out</Button>
                    }
               
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make a Call</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're contacting Our Manager!</Modal.Body>
        <Modal.Footer>
          <Button variant="warning">
            Later
          </Button>
          <Button variant="primary">
            Call Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navigation;
