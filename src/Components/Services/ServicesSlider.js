import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesSlider = () => {
  const { isLoading } = useAuth();
  const [services, setService] = useState([]);

  useEffect(() => {
    const url = "https://desolate-brook-42851.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="container pb-3 mb-5">
        <div className="row">
          <div className="col-12 px-4 px-lg-2 text-center">
            <Slider {...settings}>
              {services.map((service) => (
                <div
                  key={service._id}
                  className="border border-light border-5 border-bottom-0 border-top-0"
                >
                  {isLoading ? (
                    <Spinner variant="primary" animation="grow" />
                  ) : (
                    <div
                      style={{ height: "250px", backgroundColor: "#247ffb" }}
                      className="card-body d-flex flex-column align-items-center justify-content-center"
                    >
                      <div
                        className="d-flex justify-content-center"
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50% 0 50% 50%",
                          backgroundColor: "gold",
                          transform: "rotate(-45deg)",
                        }}
                      >
                        <img
                          style={{ transform: "rotate(45deg)" }}
                          className="w-50 mx-auto"
                          src={service.icon}
                          alt=""
                        />
                      </div>
                     <Link style={{textDecoration:"none"}} to={`/services/${service._id}`}>
                     <h4 className="text-light mt-3">{service.name}</h4>
                     </Link>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
