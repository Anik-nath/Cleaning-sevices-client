import React from "react";
import bannerimg from "../../../images/work-min.jpg";
import worker1 from "../../../images/worker1.png";
import './banner.css';
import styles from '../../Navigation/myButton.module.css'
import { Link } from "react-router-dom";

const Banner = () => {
  const banner = {
    background: `url(${bannerimg})`,
    backgroundReapte: "no-reapte",
    backgroundSize: "cover",
  };
  return (
    <div style={banner}>
      <div className="container banner pt-5">
        <div className="row py-5">
          <div className="col-lg-6 col-12 my-auto">
            <h1 className="display-1 fw-bold text-capitalize"><span className={styles.mainText}>Need cleaning Services?</span></h1>
            <span className="fs-4 d-block mb-4">We are a certified company. We provide the best cleaning services for you & your company.</span>
            <Link style={{textDecoration:"none"}} to="/services">
            <button className={styles.myButton2}>
                 <i className="fas fa-angle-double-right bg-light text-dark p-3 me-2 my-1"></i> 
                 <div>
                 <span className="fw-bold px-2">Our Best Offers</span> <br />
                   </div>
            </button>
            </Link>
          </div>
          <div className="col-lg-6 col-12 mt-5 img-container">
            <img className="img-fluid" src={worker1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
