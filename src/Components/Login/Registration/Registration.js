import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const {createUser} = useAuth();
    const [data,setData] = useState({})

    const handleInput = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newField = {...data};
        newField[field] = value;
        setData(newField);
      }
    const handleSubmit =(e)=>{
        e.preventDefault();
        createUser(data.email,data.password);
    }
    return (
        <div className="container py-5">
        <div className="row pb-5">
          <div className="col-lg-6 mx-auto">
            <Form onSubmit={handleSubmit} className="bg-primary p-3 mt-5">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="h5">Username </Form.Label>
              <Form.Control required onBlur={handleInput} name="displayName" type="text" placeholder="Enter fullname" />
            </Form.Group>
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
              Registration
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Registration;