import React from "react";
import "../css/newLogo.css";

const NewLogo = () => {
  return (
    <div className="page-sidebar-container">
      <div className="page-logo">
        <h2>LOGO</h2>
      </div>

      <div className="page-nav-elements">
        <div className="page-nav-content">
          <i className="fa fa-home"></i> Property
        </div>
        <div className="page-nav-content">
          <i className="fa fa-bell"></i> Assistance
        </div>
        <div className="page-nav-content">
          <i className="fa fa-angle-up"></i> Recieved Interest
        </div>
        <div className="page-nav-content">
          <i className="fa fa-angle-down "></i> Sent Interest
        </div>
        <div className="page-nav-content">
          <i className="fa fa-eye"></i> Property Views
        </div>
        <div className="page-nav-content">
          <i className="fa fa-tags"></i> Tarrif Plan
        </div>
      </div>
    </div>
  );
};

export default NewLogo;
