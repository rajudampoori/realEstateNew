import React, { useEffect, useState } from "react";
const Api = () => {
    const [data, setData] = useState("");
    const apiget = () => {
        const httpactions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        fetch("https://realestatenewbackend.onrender.com/listings", httpactions)
        //http://localhost:8000/
            .then((data) => data.json()).then((data) => {
                console.log(data)
                setData(data.listings)
            })
    }
    useEffect(() => {
        apiget();
    }, [])
    return (
        <div>
            
        </div>
    )
}
export default Api;