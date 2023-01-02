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
        fetch("http://localhost:8000/listings", httpactions)
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