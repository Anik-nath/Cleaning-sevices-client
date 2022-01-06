import React, { useState, useEffect } from "react";
import styles from "../Navigation/myButton.module.css";
import { useParams } from "react-router-dom";
import { Accordion, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import cleaning from "../../images/cleaning.jpg";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
const [data,setData] = useState({});
  useEffect(() => {
    const url = `https://desolate-brook-42851.herokuapp.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  const [services, setService] = useState([]);

  useEffect(() => {
    const url = "https://desolate-brook-42851.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  //order functionality
 const handleFiled = (e) =>{
  const field = e.target.name;
  const value = e.target.value;
  // console.log(value);
  const newField = {...data};
  newField[field] = value;
  // console.log(newField);
  setData(newField);
 }
 const handleSubmit = (e) =>{
   const order = {
      ...data,
      service: data?.service,
      username: data?.username,
      useraddress: data?.useraddress,
      userphone: data?.userphone,
      date: new Date().toLocaleDateString(),
    };
    console.log(order);

    //now fetch and post data
    fetch("https://desolate-brook-42851.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("accept your order");
        }
      });
    e.preventDefault();
 }

  return (
    <div className="">
      <div className={styles.pageBackground}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12 text-center text-light py-5">
              <h1 className="display-3">{details.name} Cleaning Service</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div>
              <div className="card-body">
                <img className="w-100" src={cleaning} alt="" />
                <h3 className="my-3">{details.name} Cleaning </h3>
                <p style={{ textAlign: "justify" }}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn’t anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. <br /> <br />
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable. The generated Lorem Ipsum is therefore
                  always free from repetition, injected humour,sure there isn’t
                  anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat
                  predefined
                </p>
              </div>
            </div>
            {/* frequently ask questions */}
            <div className="p-3">
              <h3 className="py-3">Frequently Ask Questions</h3>
              <Accordion>
                <Accordion.Item className="shadow mb-2" eventKey="0">
                  <Accordion.Header>
                    Modern Equipment We Use and support from our experts
                  </Accordion.Header>
                  <Accordion.Body>
                    Combined with a handful of model sentence structures, to
                    generate Lorem Ipsum which looks reasonable. generated Lorem
                    Ipsum is therefore always free from repetition, injected
                    humor, sure there isn't anything embarrassing hidden in the
                    middle of the text. All the Lorem Ipsum generators.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="shadow mb-2" eventKey="1">
                  <Accordion.Header>
                    Understand Your Problem, You must understand the issue
                  </Accordion.Header>
                  <Accordion.Body>
                    It uses a dictionary of over 200 Latin words, combined with
                    a handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour,sure
                    there isn’t anything embarrassing hidden in the middle of
                    text. All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="shadow mb-2" eventKey="2">
                  <Accordion.Header>
                  Those who experiment the most, are able to innovate the best
                  </Accordion.Header>
                  <Accordion.Body>
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="card mx-3 mx-lg-0 mx-md-0">
              <div className="card-body">
                <h3 className="my-3">All Services</h3>
                <ListGroup>
                  {services.map((service) => (
                    <ListGroup.Item key={service._id}>
                      <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        to={`/services/${service._id}`}
                      >
                        {service.name}
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </div>
            <div className="bg-primary shadow text-light mt-5 p-5">
              <h3 className="text-dark">Place Your Order</h3>
              <Form>
                <Form.Group className="" controlId="formBasicSevice">
                  <Form.Label>Cleaning service</Form.Label>
                  <Form.Control name="service" onBlur={handleFiled} type="text" value={details.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control name="username" onBlur={handleFiled} required type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Your Phone</Form.Label>
                  <Form.Control name="userphone" onBlur={handleFiled} required type="text" placeholder="Enter Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Your address</Form.Label>
                  <Form.Control name="useraddress" onBlur={handleFiled} required type="text" placeholder="Enter address" />
                </Form.Group>

                <button onClick={handleSubmit} type="button" className={styles.myButton2}>
                  <i className="fas fa-phone bg-light text-dark p-3 me-2 my-1"></i>
                  <div>
                    <span className="fw-bold px-2">Order Now</span> <br />
                  </div>
                </button>
              </Form>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;


/* 
<div className="bg-primary text-light mt-5 p-5">
              <h3>Get a Free Quote</h3>
              <p className="py-4">
                We are a cleaning company that has been in the business for
                almost 7 years Since our inception
              </p>
              <Link style={{ textDecoration: "none" }} to="/contact">
                <button className={styles.myButton2}>
                  <i className="fas fa-phone bg-light text-dark p-3 me-2 my-1"></i>
                  <div>
                    <span className="fw-bold px-2">Contact Now</span> <br />
                  </div>
                </button>
              </Link>
            </div>
*/
