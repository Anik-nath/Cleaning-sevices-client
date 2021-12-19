import React from "react";
import styles from "../Navigation/myButton.module.css";
import expert1 from "../../images/team1-1.png";
import expert2 from "../../images/team2-1.png";
import expert3 from "../../images/team3-1.png";
const Expert = () => {
    const fancyContent = {
        background : "rgba(1, 1, 70, 0.931)",
        borderRadius: "50% 50% 0px 50%",
    }
    const fancyText = {
        background : "rgb(253, 220, 32)",
        borderRadius: "50% 50% 50% 0%",
        height: "350px"
    }
  return (
    <div>
      <div className="container pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-12 mx-auto text-center">
            <div className="d-flex justify-content-center">
              <div className={styles.fancyDot}></div>
              <div className={styles.fancyDot2}></div>
            </div>
            <h2 className={styles.heading}>Our Experts</h2>
            <p>
            Find company research, competitor information, contact details & financial data for Expert Cleaners of Portales.
            </p>
          </div>
        </div>
        <div className="row g-lg-5 mb-5 mt-3">
            <div className="col-lg-6 col-12">
                <div className="">
                    <div className="row gap-2 px-4 px-lg-0">
                        <div style={fancyContent} className="col-lg-5 col-12 d-flex align-items-center">
                            <img className="w-100 rounded-circle" src={expert1} alt="" />
                        </div>
                        <div style={fancyText} className="col-lg-5 col-12 text-center d-flex flex-column align-items-center justify-content-center">
                            <h6>CLEANER LEADER</h6>
                            <h4>Alone Mabry</h4>
                            <div className="d-flex gap-4 fs-5 text-dark mt-2">
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="facebook.com"><i className="fab fa-facebook"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="instagram.com"> <i className="fab fa-instagram"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="twitter.com"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 my-lg-0 my-5">
                <div className="">
                    <div className="row gap-2 px-4 px-lg-0">
                        <div style={fancyContent} className="col-lg-5 col-12 d-flex align-items-center">
                            <img className="w-100 rounded-circle" src={expert2} alt="" />
                        </div>
                        <div style={fancyText} className="col-lg-5 col-12 text-center d-flex flex-column align-items-center justify-content-center">
                            <h6>CLEANER LEADER</h6>
                            <h4>Mayola Loy</h4>
                            <div className="d-flex gap-4 fs-5 text-dark mt-2">
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="facebook.com"><i className="fab fa-facebook"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="instagram.com"> <i className="fab fa-instagram"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="twitter.com"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="">
                    <div className="row gap-2 px-4 px-lg-0">
                        <div style={fancyContent} className="col-lg-5 col-12 d-flex align-items-center">
                            <img className="w-100 rounded-circle" src={expert3} alt="" />
                        </div>
                        <div style={fancyText} className="col-lg-5 col-12 text-center d-flex flex-column align-items-center justify-content-center">
                            <h6>CLEANER LEADER</h6>
                            <h4>Brubaker Nika</h4>
                            <div className="d-flex gap-4 fs-5 text-dark mt-2">
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="facebook.com"><i className="fab fa-facebook"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="instagram.com"> <i className="fab fa-instagram"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="twitter.com"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 mt-lg-0 mt-5">
                <div className="">
                    <div className="row gap-2 px-4 px-lg-0">
                        <div style={fancyContent} className="col-lg-5 col-12 d-flex align-items-center">
                            <img className="w-100 rounded-circle" src={expert1} alt="" />
                        </div>
                        <div style={fancyText} className="col-lg-5 col-12 text-center d-flex flex-column align-items-center justify-content-center">
                            <h6>CLEANER LEADER</h6>
                            <h4>Jessy Pery</h4>
                            <div className="d-flex gap-4 fs-5 text-dark mt-2">
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="facebook.com"><i className="fab fa-facebook"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="instagram.com"> <i className="fab fa-instagram"></i></a>
                               <a className="text-primary shadow rounded-circle px-2 py-1" href="twitter.com"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
