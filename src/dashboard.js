import React from "react";
import {Link} from 'react-router-dom'
import Interest from './dashboard/interest'
import Profil from './dashboard/profil'
import  './dashboard/style.css'

function dashboard(){

    return(
        <div className="dashboard">
         <Link to={'./events'}><button className="event">Consulter les évènements à venir</button></Link> 
           <Profil/>
           <Interest/>
        </div>
    )

}
export default dashboard