import React from 'react'
import { useEffect,useState } from 'react';
import Axios from 'axios';


function EventList(){
    const [data,setDate]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:4000/event")
        .then(res =>{
            console.log("Data:::", res);
            setDate(res.data)
        }
        ).catch(err => console.log(err))
    }

    )
    return (
        <h1>Hello</h1>
    )
}
export default EventList