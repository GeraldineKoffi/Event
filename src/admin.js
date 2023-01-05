import React, { useState,useRef } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

function Inscription(){
    const [redirect, setRedirect] = React.useState(false)
    const nameInputRef= useRef();
    const prenomInputRef=useRef();
    const emailInputRef= useRef();
    const telInputRef= useRef();
    const passwordInputRef= useRef();
    const passwordBixInputRef= useRef();
 

const handleSubmit=async(event)=>{
    event.preventDefault()
   
    const Name= nameInputRef.current.value;
    const Prenom= prenomInputRef.current.value;
    const Mail= emailInputRef.current.value; 
    const Pass = passwordInputRef.current.value;
    const Telephone= telInputRef.current.value; 
   
    console.log(Name,Prenom, Mail ,Telephone, Pass)
    try {
        await axios.post("http://localhost:4000/admin",{
          Name,
         Prenom,
         Mail,
         Pass,
         Telephone
        });
      } catch (err) {
        console.log("l'erreur est :", err);
      }
      setRedirect(true)
    }
    return (
        <form className='signup' onSubmit={handleSubmit}>
        <div className='head'>SignUp Admin</div><br/>
            <label>Nom</label><br/>
            <input required placeholder='Entrer votre Nom' id="name" ref={nameInputRef}/><br/>
            <label>Prenom</label><br/>
 <input required placeholder='Entrer votre prénom' id="prenom" ref={prenomInputRef}/><br/>
            <label>Email</label><br/>
            <input required placeholder='Entrer un email' type="email" id="email"  ref={emailInputRef}/><br/>
            
            <label>Téléphone</label><br/>
            <input  required placeholder='Entrer votre numéro de téléphone' id="telephone" type="number" ref={telInputRef}/><br/>

            <label>Mot de passe</label><br/>
            <input  required placeholder='Entrer un mot de passe'  id="password" type="password" ref={passwordInputRef}/><br/>
            <label>Confirmer le mot de passe</label><br/>
            <input required placeholder='Confirmer le mot de passe'  id="passwordBix" type="password" ref={passwordBixInputRef}/><br/>
            <button className='valid'>S'inscrire</button>
            {redirect? <Redirect to="/dashboard" />: null}
           

        </form>

    )
}
export default Inscription