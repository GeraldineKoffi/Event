import React from "react";
import { Link } from "react-router-dom";
import user from './user.jpg'
import Org from './Org.jpg'

function Role(){
    return(
        <div className="role">
            
            <div className="user">
                <img src={user} className="userIcon"/>
                <Link to={'./inscription'}><button className="valid">Créer un compte utilisateur</button></Link>
            </div>
            <div className="org">
                <img src={Org} className="userIcon1" />
            <Link to={'./inscriptionorg'}><button className="valid">Créer un compte organisateur</button></Link>
           </div>
        </div>
    )
}export default Role