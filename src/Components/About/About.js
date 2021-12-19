import React from "react";
import aboutimg1 from "../../images/aboutimg1.jpg";
import Expert from "../Expert/Expert";
import styles from "../Navigation/myButton.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.pageBackground}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12 text-center text-light py-5">
              <h1 className="display-3">About</h1>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(226, 248, 248,0.4)" }}>
        <div className="container py-5">
          <div className="row py-5 px-2 px-lg-0 px-md-0">
            <div className="col-lg-5 col-12 mb-5 mb-lg-0">
              <img className="w-100" src={aboutimg1} alt="" />
            </div>
            <div className="col-lg-7 col-12">
              <div className="d-flex gap-4 align-items-center">
                <div className="d-flex justify-content-center">
                  <div className={styles.fancyDot}></div>
                  <div className={styles.fancyDot2}></div>
                </div>
                <h5>Why Choose Us</h5>
              </div>
              <h3 className={styles.heading}>
                Over 25+ Years Experience In Cleaning Service
              </h3>
              <p className="text-dark my-5" style={{textAlign:"justify"}}>
                Cleaning can be a chore and we know you have many choices when
                you consider hiring a maid service. Because of that, we are
                constantly thriving to improve our already high standards to
                have you see us as the absolute best in the industry.you also have to trust that they will perform a
                first-class cleaning job for you. Putting our employees through
                a rigorous training program ensures each member of our cleaning
                team understands their role and how it relates to the overall
                performance of the team.
                <br />
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.Chen an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries.{" "}
                <br />
              </p>
              <h5>Brubaker Nilka</h5>
              <h6>Vertex Chambers, CEO</h6>
            </div>
          </div>

          <div className="row py-5 mt-5 px-2 px-lg-0 px-md-0">
            <div className="col-12 col-md-6 col-lg-6">
              <h4 className={styles.heading}>Our mission</h4>
              <div className="d-flex align-items-start gap-2">
                <i
                  class="fas fa-bullseye"
                  style={{ fontSize: "40px", color: "rgba(1, 1, 70, 0.931)" }}
                ></i>
                <p style={{textAlign:"justify"}}>
                  Aims to be a national market leader in the provision of
                  cleaning services delivering reliable, quality, cost effective
                  cleaning solutions to our customers
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h4 className={styles.heading}>Our vission</h4>
              <div className="d-flex align-items-start gap-2">
                <i
                  class="fas fa-brush"
                  style={{ fontSize: "40px", color: "rgba(1, 1, 70, 0.931)" }}
                ></i>
                <p style={{textAlign:"justify"}}>
                  Aims to be a national market leader in the provision of
                  cleaning services delivering reliable, quality, cost effective
                  cleaning solutions to our customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Expert></Expert>
    </div>
  );
};

export default About;
