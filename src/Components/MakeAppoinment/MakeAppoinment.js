import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import image from "../../images/contact-min.png";
import styles from '../Navigation/myButton.module.css'
const MakeAppoinment = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-12 col-md-12 sm-order-1">
          <Form className={styles.form}>
          <div className="d-flex justify-content-start mb-3">
           <div className={styles.fancyDot}></div>
            <div className={styles.fancyDot2}></div>
           </div>
          <h1 className="text-white mb-3">Make An <br /> Appoinment</h1>
            <Row className="mb-0">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Subject</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>office</option>
                  <option>home</option>
                  <option>shop</option>
                  <option>road</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <FloatingLabel className="my-4" controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            <Button className={styles.formBtn} variant="warning" type="submit">
              Submit Request
            </Button>
          </Form>
        </div>
        <div className="col-lg-6 col-12 col-md-12">
          <img className="w-100" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MakeAppoinment;
