import React from "react";
import styles from "../Navigation/myButton.module.css";
import image1 from "../../images/work-process-1.jpg";
import image2 from "../../images/work-process-2.jpg";
import image3 from "../../images/work-process-3.jpg";
const HowItWorks = () => {
  return (
    <div className="container py-5">
      <div className="row pt-5">
        <div className="col-6 mx-auto text-center">
          <div className="d-flex justify-content-center">
            <div className={styles.fancyDot}></div>
            <div className={styles.fancyDot2}></div>
          </div>
          <h2 className={styles.heading}>How it Works</h2>
          <p>
            The Work Process defines required tools, systems, and resources as
            well as an organizational responsibility.
          </p>
        </div>
      </div>
      <div className="row text-center py-5">
        <div className="col-lg-4 col-12 col-md-4">
          <div className={styles.fancyCard}>
            <div className={styles.fancyCardBody}>
              <img src={image1} alt="" />
            </div>
            <h5 className="fw-bold mt-3">Easy online scheduling</h5>
          </div>
        </div>
        <div className="col-lg-4 col-12 col-md-4">
          <div className={styles.fancyCard}>
            <div className={styles.fancyCardBody}>
              <img src={image2} alt="" />
            </div>
            <h5 className="fw-bold mt-3">Get Clean And Fresh</h5>
          </div>
        </div>
        <div className="col-lg-4 col-12 col-md-4">
          <div className={styles.fancyCard}>
            <div className={styles.fancyCardBody}>
              <img src={image3} alt="" />
            </div>
            <h5 className="fw-bold mt-3">Enjoy Happy Cleanliness</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
