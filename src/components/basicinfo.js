import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "./ContextProvider/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/newBasicInfo.css";
import "../css/newButton.css";
import NewLogo from "./NewLogo";
import NewHeader from "./NewHeader";
import NavBasic from '../components/NavFolder/NavBasic'

const BasicInfo = () => {
  const [propertyType, setPropertyType] = useState("");

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

  const handleBack = async (e) => {
    e.preventDefault();
    navigate("/list");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(propertyType);
    const objectname = { propertyType };
    navigate("/basicinfo/propertydetails");

    await axios
      .post("https://realestatenewbackend.onrender.com/api/posts", objectname)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/basicinfo/propertydetails");
    setPropertyType("");
  };
  
  return (
    <>
      <NewLogo />
      <hr />
      <NewHeader />
      <NavBasic />
      <div className="new-basic-info-container">
        {/* <!-- Row 1 --> */}
        <div className="row1">
          {/* <!-- Contents --> */}
          <div className="content-1">
            <label for="fname">Property Type</label>
            <br />
            <select
              className="content-type"
              name="property-type"
              onChange={(e) => {
                setPropertyType(e.target.value);
              }}
            >
              <option value="house">House</option>
              <option value="flat">Flat</option>
              <option value="plot">Plot</option>
            </select>
            <br />
          </div>

          <div className="content-2">
            <label for="fname">Property Age</label>
            <br />
            <select className="content-type" name="property-type">
              <option value="0-5">0-5 Years</option>
              <option value="6-10">6-10 Years</option>
              <option value="11-15">11-15 Years</option>
              <option value="more">More than 15 Years</option>
            </select>
            <br />
          </div>

          <div className="content-3">
            <label for="fname">Price</label>
            <br />
            <input
              type="text"
              className="content-type"
              id="price"
              name="price"
              placeholder="Example: 100000"
            />
            <br />
          </div>
          <div className="content-4">
            <label for="fname">Property Description</label>
            <br />
            <input
              type="text"
              className="content-type"
              id="price"
              name="price"
            />
            <br />
          </div>

          {/* <!-- Contents --> */}
        </div>
        {/* <!-- Row 1 Ends--> */}

        {/* <!-- Row 2 Ends--> */}
        <div className="row2">
          {/* <!-- Contents --> */}
          <div className="content-1">
            <label for="negotiable">Negotiable</label>
            <br />
            <select className="content-type" name="negotiable">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>

          <div className="content-2">
            <label for="ownership">Ownership</label>
            <br />
            <select className="content-type" name="ownership">
              <option value="dealer">Dealer Owned</option>
              <option value="private">Privately Owned</option>
            </select>
            <br />
          </div>
          <div className="content-3">
            <label for="property-approved">Property Approved</label>
            <br />
            <select className="content-type" name="property-approved">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>

          <div className="content-3">
            <label for="bank-loan">Bank Loan</label>
            <br />
            <select className="content-type" name="property-approved">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>

          {/* <!-- Contents --> */}
        </div>
      </div>

      {/* <!-- Cancel and previous buttons --> */}
      <div className="functional-buttons">
        {/* <!-- Cancel Button --> */}
        <div className="cancel-button">
          <button
            className="button canc-button"
            onClick={(e) => {
              handleBack(e);
            }}
          >
            Cancel
          </button>
        </div>
        <div className="continue-button">
          <button
            className="button cont-button"
            onClick={(e) => handleUpload(e)}
          >
            Save & Continue
          </button>
        </div>
      </div>
      
    </>
  );
};
export default BasicInfo;
