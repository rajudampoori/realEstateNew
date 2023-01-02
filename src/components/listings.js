import React,{ useState } from "react";
import "../css/listings.css";
import { Link } from "react-router-dom";

const Listings = (props) => {
  const [ppid, setPpid] = useState('');
    return (
    <div class="searching">
      <div class="searching-bar">
        <div>
          <input type="text" placeholder="Search PPID" name="search" onChange ={(e)=>setPpid(e.target.value)}/>
          
          <button type="submit" onClick ={()=>props.myPPDID(ppid)}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="searching-button">
        <Link to = "/basicinfo"><button className="button button1">+Add Property</button></Link>
      </div>
    </div>
  );
};
export default Listings;
