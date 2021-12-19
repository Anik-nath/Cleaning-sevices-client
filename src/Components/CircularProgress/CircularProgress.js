import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const percentage = 66;
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <div className="card">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />;
          </div>
        </div>
      </div>
      <div className="card"></div>
    </div>
  );
};

export default CircularProgress;
