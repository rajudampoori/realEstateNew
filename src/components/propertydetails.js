import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/propertydetails.css";
import "../css/newBasicInfo.css";
import "../css/newButton.css";
import NewLogo from "./NewLogo";
import NewHeader from "./NewHeader";
import NavProperty from '../components/NavFolder/NavProperty'
const Properties = () => {
  const [totalArea, setTotalArea] = useState("");
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
      //   console.log('user verify')
      setLoginData(recivedData);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setInfo(true);
    }, 2000);
  }, []);
  const handleUpload = async (e) => {
    e.preventDefault();
    navigate("/basicinfo/propertydetails/generalinfo");

    console.log(totalArea);
    const objectname = { totalArea };
    await axios
      .post("http://localhost:8000/api/basicinfo/posts", objectname)
      //mongodb://localhost:27017
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <NewLogo />
      <hr />
      <NewHeader />
      <NavProperty></NavProperty>
      <div className="new-basic-info-container">
        {/* <!-- Row 1 --> */}
        <div className="row1">
          {/* <!-- Contents --> */}
          <div className="content-3">
            <label for="fname">Length</label>
            <br />
            <input
              type="text"
              className="content-type"
              name="Length"
              placeholder="Length"
            />
            <br />
          </div>
          <div className="content-4">
            <label for="totalArea">Total Area</label>
            <br />
            <input
              type="text"
              className="content-type"
              id="price"
              value={totalArea}
              name="totalArea"
              placeholder="Total Area"
              onChange={(e) => {
                setTotalArea(e.target.value);
              }}
            />
            <br />
          </div>

          <div className="content-2">
            <label for="bhk">No Of BHK</label>
            <br />
            <select className="content-type" name="property-type">
              <option value="11-15">Select No Of BHK</option>
              <option value="0-5">1 BHK</option>
              <option value="0-5">2 BHK</option>
              <option value="6-10">3 BHK</option>
            </select>
            <br />
          </div>

          <div className="content-1">
            <label for="fname">Attached</label>
            <br />
            <select className="content-type" name="property-attached">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
          </div>

          <div className="content-1">
            <label for="fname">Furnished</label>
            <br />
            <select className="content-type" name="property-type">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>

          <div className="content-1">
            <label for="fname">Lift</label>
            <br />
            <select className="content-type" name="property-type">
              <option value="house" disabled>
                Select Lift
              </option>
              <option value="saab">Yes</option>
              <option value="fiat">No</option>
            </select>
            <br />
          </div>

          <div className="content-1">
            <label for="fname">Facing</label>
            <br />
            <select className="content-type" name="property-type">
              <option value="house">Select Facing</option>
              <option value="saab">North</option>
              <option value="fiat">South</option>
              <option value="fiat">East</option>
              <option value="fiat">West</option>
            </select>
            <br />
          </div>

          {/* <!-- Contents --> */}
        </div>
        {/* <!-- Row 1 Ends--> */}

        {/* <!-- Row 2 Ends--> */}
        <div className="row2">
          {/* <!-- Contents --> */}

          <div className="content-3">
            <label for="fname">Breadth</label>
            <br />
            <input
              type="text"
              className="content-type"
              id="price"
              name="price"
              placeholder="Example: 1000"
            />
            <br />
          </div>

          <div className="content-1">
            <label for="negotiable">Area Unit</label>
            <br />
            <select className="content-type" name="negotiable">
              <option value="Yes">Area Unit</option>
              <option value="No">1 Unit</option>
              <option value="No">2 Unit</option>
              <option value="No">3 Unit</option>
            </select>
            <br />
          </div>

          <div className="content-2">
            <label for="ownership">No Of Floor</label>
            <br />
            <select className="content-type" name="ownership">
              <option value="dealer">No Of Floor</option>
              <option value="private">1st Floor</option>
              <option value="private">2nd Floor</option>
              <option value="private">3rd Floor</option>
            </select>
            <br />
          </div>

          <div className="content-3">
            <label for="property-approved">Western Toilet</label>
            <br />
            <select className="content-type" name="property-approved">
              <option value="Yes">Select Western Toilet</option>
              <option value="No">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>

          <div className="content-3">
            <label for="bank-loan">Car Parking</label>
            <br />
            <select className="content-type" name="property-approved">
              <option value="Yes">Select Car Parking</option>
              <option value="No">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>

          <div className="content-3">
            <label for="fname">Electricity</label>
            <br />
            <input
              type="text"
              className="content-type"
              id="price"
              name="price"
              placeholder="Example: 3 Phase"
            />
            <br />
          </div>

          {/* <!-- Contents --> */}
        </div>
      </div>

      {/* <!-- Cancel and previous buttons --> */}
      <div className="functional-buttons">
        {/* <!-- Cancel Button --> */}
        <div className="cancel-button">
          <Link to="/basicinfo">
            <button className="button canc-button">Previous</button>
          </Link>
        </div>
        <div className="continue-button">
          <button
            className="button cont-button"
            onClick={(e) => {
              handleUpload(e);
            }}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};
export default Properties;
