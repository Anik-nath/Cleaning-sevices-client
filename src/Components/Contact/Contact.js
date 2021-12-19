import React from "react";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import styles from "../Navigation/myButton.module.css";

const Contact = () => {
  return (
    <div className="">
      <div className={styles.pageBackground}>
        <div className="container py-5 mb-5">
          <div className="row py-5">
            <div className="col-12 text-center text-light py-5">
              <h1 className="display-3">Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <MakeAppoinment></MakeAppoinment>

      <div class="">
        <div class="py-5 mb-5">
          <iframe style={{width:"100%",height:"450px",border:"0"}} title="location"  src="https://maps.google.com/maps?q=chittagong,bangldesh&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
            </div>
          </div>
    </div>
  );
};

export default Contact;

