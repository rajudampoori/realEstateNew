import React from 'react'
import "../css/list.css";

const PropertyImage = ({show, imageItem, onClose}) => {
    if(!show) { return null ;}
  return (
    <div className='overlay'>
        <button className='close' onClick={onClose}> X </button>
        <div className='inner'>
        <img src={imageItem.image} alt={"property_img"} className="estate_img"/>
        </div>
    </div>
  )
}

export default PropertyImage