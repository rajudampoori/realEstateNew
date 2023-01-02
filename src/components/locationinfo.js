import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "./ContextProvider/Context";

import { Link, useNavigate } from "react-router-dom";
import "../css/newBasicInfo.css";
import "../css/newButton.css";
import NewLogo from "./NewLogo";
import NewHeader from "./NewHeader";
import NavLoc from '../components/NavFolder/NavLoc'
const LocationInfo = () => {
  const navigate = useNavigate();

  const { logindata, setLoginData } = useContext(LoginContext);

  const [info, setInfo] = useState(false);
  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const recivedData = await res.json();

    if (recivedData.status == 401 || !recivedData) {
      navigate("/");
    } else {
      setLoginData(recivedData);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setInfo(true);
    }, 2000);
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    navigate("/list");
  };
  return (
    <>
      <NewLogo />
      <hr />
      <NewHeader />
      <NavLoc></NavLoc>
      <div class="new-basic-info-container">
        {/* <!-- Row 1 --> */}
        <div class="row1">
          <div class="content-1">
            <label for="email">Email</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="email"
              name="Email"
              placeholder="Email"
            />
            <br />
          </div>
          <div class="content-2">
            <label for="area">Area</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="area"
              name="area"
              placeholder="Area"
            />
            <br />
          </div>
          <div class="content-3">
            <label for="address">Address</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="address"
              name="Address"
              placeholder="address"
            />
            <br />
          </div>
          <div class="content-4">
            <label for="latitude">Latitude</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="latitude"
              name="latitude"
              placeholder="latitude"
            />
            <br />
          </div>

          {/* <!-- Contents --> */}
        </div>
        {/* <!-- Row 1 Ends--> */}

        {/* <!-- Row 2 Ends--> */}
        <div class="row2">
          {/* <!-- Contents --> */}
          <div class="content-1">
            <label for="email">City</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="city"
              name="city"
              placeholder="Enter City Name"
            />
            <br />
          </div>
          <div class="content-2">
            <label for="pincode">City</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="pincode"
              name="pincode"
              placeholder="Enter the Pincode"
            />
            <br />
          </div>
          <div class="content-3">
            <label for="landmark">Landmark</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="landmark"
              name="landmark"
              placeholder="Land"
            />
            <br />
          </div>
          <div class="content-4">
            <label for="latitude">Longitude</label>
            <br />
            <input
              type="text"
              class="content-type"
              id="latitude"
              name="latitude"
              placeholder="Longitude"
            />
            <br />
          </div>
          {/* <!-- Contents --> */}
        </div>
      </div>

      {/* <!-- Cancel and previous buttons --> */}
      <div class="functional-buttons">
        {/* <!-- Cancel Button --> */}
        <div class="cancel-button">
          <Link to="./generalinfo">
            <button class="button canc-button">Previous</button>
          </Link>
        </div>
        <div class="continue-button">
          <button
            class="button cont-button"
            onClick={(e) => {
              handleChange(e);
            }}
          >
            Add Property
          </button>
        </div>
      </div>
    </>
  );
};
export default LocationInfo;
