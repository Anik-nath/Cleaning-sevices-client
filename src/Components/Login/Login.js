import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const [data,setData] = useState({});
  const {googleSignIn,login,error} = useAuth();

  const handleGoogle = () =>{
    googleSignIn();
  }

  const handleInput = (e) =>{
    const field = e.target.name;
    let value = e.target.value;
    // console.log(value);
    const newField = {...data};
    newField[field] = value;
    setData(newField);
    // console.log(newField);
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    login(data.email,data.password);
  }

  return (
    <div className="container py-5">
      <div className="row pb-5">
        <div className="col-lg-6 mx-auto">
        <p>{
        error && 
          <Alert variant="danger">
            Your information was wrong. Try again
        </Alert>
        }</p>
          <Form onSubmit={handleLogin} className="bg-primary p-3 mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="h5">Email address</Form.Label>
              <Form.Control required onBlur={handleInput} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="h5">Password</Form.Label>
              <Form.Control required onBlur={handleInput} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>
            <Link to="/registration" className="ms-3 btn btn-warning" variant="warning" type="submit">
              Registration
            </Link>
            <hr />
            <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
             <Button onClick={handleGoogle} className="btn btn-warning">Google Sign in</Button>
            </Form.Group> 
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
