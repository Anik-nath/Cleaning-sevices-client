import React from "react";
import { ProgressBar } from "react-bootstrap";
import CircularProgress from "../CircularProgress/CircularProgress";

const DashboardHome = () => {
    const now = 50;
  return (
    <div className="container py-5">
      <h2 className="text-center">dashboard</h2>
      <div className="row">
          <div className="col-12">
            <ProgressBar animated  className="my-4" striped variant="success" now={now} label={`${now}%`} />
            <ProgressBar animated  striped variant="info" now={20} />
            <ProgressBar  animated className="my-4" striped variant="warning" now={60} />
            <ProgressBar animated  striped variant="danger" now={80} />
            <CircularProgress></CircularProgress>
          </div>
      </div>
    </div>
  );
};

export default DashboardHome;
