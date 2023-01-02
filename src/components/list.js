import { useState, useContext, useEffect } from "react";
import { LoginContext } from "./ContextProvider/Context";
import { useNavigate } from "react-router-dom";

import "../css/list.css";
import Listings from "./listings";
import "../css/basicinfo.css";
import Header from "./Header";
import NewHeader from "./NewHeader";
import NewLogo from "./NewLogo";

const List = () => {
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

  const [listData, setData] = useState([]);
  const [ppdID, setppdID] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/listing")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data);
        // if(result.data.message ==="No data"){
        //   console.log('Nothing to present')
        // } else{
        //   setData(result.data);
        // }
        setData(result.data);
      });
  }, []);
  function parent(chilData) {
    setppdID(chilData);
  }

  return (
    <>
  <NewHeader />
  <NewLogo />
      <div className="content-listings-content-container">
        <div className="content-list-headers">
          <Listings myPPDID={parent}></Listings>
          <div className="content-list-headers ul-list">
            <ul>
              <li>PPD ID</li>
              <li>Image</li>
              <li>Property</li>
              <li>Contact</li>
              <li>Area</li>
              <li>Views</li>
              <li>Status</li>
              <li>Days Left</li>
              <li>Action</li>
            </ul>
          </div>
        </div>
        {listData
          .filter((val) => {
            if (!ppdID) {
              return val;
            } else if (val.ppdid.includes(ppdID)) {
              return val;
            }
          })
          .map((item, key) => {
            let status = "Unsold";
            if (item.views > 50) {
              status = "Sold";
            }
            return (
              <div
                className="content-list-headers content-list-items "
                key={key}
              >
                <ul>
                  <li>{item.ppdid}</li>
                  <li>
                    <i className="fa fa-image" style={{ color: "#DFDFDF" }}></i>
                  </li>
                  <li>{item.property}</li>
                  <li>{item.contact}</li>
                  <li>{item.area}</li>
                  <li>{item.views}</li>
                  <li>{status}</li>
                  <li>{item.daysleft}</li>
                  <li>
                    <i className="fa fa-edit" style={{ color: "#DFDFDF" }}></i>
                    <i className="fa fa-eye" style={{ color: "#DFDFDF" }}></i>
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default List;
