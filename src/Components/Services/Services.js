import React from "react";
import styles from "../Navigation/myButton.module.css";
import ServicesSlider from "./ServicesSlider";

const Services = () => {
  return (
    <div>
      <div className={styles.pageBackground}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12 text-center text-light py-5">
              <h1 className="display-3">Our Services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row px-3 px-lg-0">
          <div className="col-lg-4 col-12">
            <div className="d-flex justify-content-start mb-3">
              <div className={styles.fancyDot}></div>
              <div className={styles.fancyDot2}></div>
            </div>
            <h3 className={styles.heading}>What we do?</h3>
            <p>
              It was popularized with the release of desktop publishing
              software-like versions.
            </p>
          </div>
          <div className="col-lg-8 col-12">
            <div className="d-flex justify-content-lg-end justify-content-start gap-4">
              <button className={styles.myButton2}>
                <i className="fas fa-home bg-light text-dark p-3 me-2 my-1"></i>
                <div>
                  <span className="fw-bold px-2">Residential</span> <br />
                </div>
              </button>
              <button className={styles.myButton2}>
                <i className="fas fa-brush bg-light text-dark p-3 me-2 my-1"></i>
                <div>
                  <span className="fw-bold px-2">Commercial</span> <br />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* services slider */}
      <ServicesSlider></ServicesSlider>
    </div>
  );
};

export default Services;
