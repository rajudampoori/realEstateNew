import React from "react";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "./ContextProvider/Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/newBasicInfo.css";
import "../css/newButton.css";
import NewLogo from "./NewLogo";
import NewHeader from "./NewHeader";
import NavGen from '../components/NavFolder/NavGen'
const GeneralInfo = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [mobile, setMobile] = useState("");

  const url = "https://api.cloudinary.com/v1_1/ravisharma/image/upload";
  const preset = "upload";
  const handleUpload = async (e) => {
    e.preventDefault();
    navigate("/basicinfo/propertydetails/generalinfo/locationinfo");
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset", preset);

    try {
      const res = await axios.post(url, formdata);
      const imageUrl = res.data.secure_url;
      const postData = await axios.post(
        "http://localhost:8000/api/basicinfo/propertydetails/generalinfo/posts",
        {
          image: imageUrl,
          mobile: mobile,
        }
      );
    } catch (error) {
      console.log(error);
    }
    setMobile("");
    setImage("");
  };

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
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setInfo(true);
    }, 2000);
  }, []);

  return (
    <>
      <NewLogo />
      <hr />
      <NewHeader />
      <hr />
      <NavGen></NavGen>
      <div className="new-basic-info-container">
        {/* <!-- Row 1 --> */}
        <div className="row1">
          <div className="content-1">
            <label for="fname">Name</label>
            <br />
            <select className="content-type" name="property-type">
              <option value="Owner">Owner</option>
              <option value="Broker">Broker</option>
            </select>
            <br />
          </div>
          <div className="content-2">
            <label for="fname">Posted By</label>
            <br />
            <select className="content-type" name="property-type">
              <option value="Owner">Owner</option>
              <option value="Broker">Broker</option>
            </select>
            <br />
          </div>
          <div className="content-2">
            <label for="fname">Featured Package </label>
            <br />
            <select className="content-type" name="property-type">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>
        </div>

        <div className="row2">
          <div className="content-3">
            <label for="fname">Mobile</label>
            <br />
            <input
              type="text"
              className="content-type"
              id="content-type"
              name="mobile"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="content-2">
            <label for="ownership">Sale Type</label>
            <br />
            <select className="content-type" name="ownership">
              <option value="dealer">Mortgage</option>
              <option value="private">Auction</option>
              <option value="private">Negotiable</option>
            </select>
            <br />
          </div>
          <div className="content-3">
            <label for="property-approved">PPD Package</label>
            <br />
            <select className="content-type" name="property-approved">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
          </div>
        </div>
      </div>
      <div className="generalInfoCamera">
        <input
          type="file"
          name="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></input>
      </div>

      <div className="functional-buttons">
        <div className="cancel-button">
          <Link to="/basicinfo/propertydetails">
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
export default GeneralInfo;
