import React from "react";

import Profil from './dashboard/profil'
import  './dashboard/style.css'
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import EventDesact from './dashboard/eventDesact'

function dashboardAd(){
    return(
        <div className="dashboard">
           <Profil/>
           <UserBloquer/>
           <OrgBloquer/>
           <EventDesact/>
        </div>
    )

}
export default dashboardAd