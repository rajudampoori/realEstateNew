import React from "react";
import { useState, useContext } from "react";
import { LoginContext } from "./ContextProvider/Context";
import { useNavigate } from "react-router-dom";
import '../css/NewHeader.css'

const NewHeader = () => {
  const navigate = useNavigate();
  const { logindata, setLoginData } = useContext(LoginContext);
  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    const res = await fetch("https://realestatenewbackend.onrender.com/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
    });
    const data = await res.json();
    if (data.status == 201) {
      localStorage.removeItem("usersdatatoken");
      setLoginData(false);
      navigate("/");
    } else {
      console.log("error");
    }
  };
  return (
    <>
      <div class="page-top-header">
        <header>
          <div class="page-userid">
            <p> USER ID:{logindata ? logindata.ValidUserOne._id.slice(0, 5).toUpperCase(): ""}</p>
          </div>
          <div class="page-userName">
            <i class="fa fa-user"></i>&nbsp;&nbsp;
            <span>{logindata ? logindata.ValidUserOne.email.slice(0, 5).toUpperCase(): ""}
            <span style={{marginLeft : "10px"}}>logout</span>
             <i class="fa fa-angle-down" onClick={() => {
                  if (window.confirm("Do you want to logout.!?")) {
                    logoutuser();
                  }
                }}>
               </i>
            </span>
          </div>
        </header>
      </div>
      <hr></hr>
    </>
  );
};

export default NewHeader;
