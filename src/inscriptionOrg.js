import React, { useRef } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

function InscriptionOrg(){
    const [redirect, setRedirect] = React.useState(false)
    const nameInputRef= useRef();
    const emailInputRef= useRef();
    const telInputRef= useRef();
    const adressInputRef= useRef();
    const gerantInputRef=useRef();
    const numRcsInputRef=useRef();
    const passwordInputRef= useRef();
    const passwordBixInputRef= useRef();
    

const handleSubmit= async(event)=>{
    event.preventDefault()
   
    const name= nameInputRef.current.value;
    const mail= emailInputRef.current.value; 
    const pass= passwordInputRef.current.value;
    const tel= telInputRef.current.value; 
    const adresse= adressInputRef.current.value; 
    const gerant= gerantInputRef.current.value;
    const num_RCS= numRcsInputRef.current.value;

    try {
        await axios.post("http://localhost:4000/organisateur", {
          name,
          mail,
          pass,
          tel,
          adresse,
          gerant,
          num_RCS
         
        })
        .then(response=>{

          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('name', response.data.organisateur.name)
          localStorage.setItem('mail', response.data.organisateur.mail)
          localStorage.setItem('tel', response.data.organisateur.tel)
          localStorage.setItem('adresse', response.data.organisateur.adresse)
          localStorage.setItem('id', response.data.organisateur.id)
          localStorage.setItem('gerant', response.data.organisateur.gerant)
          localStorage.setItem('num_RCS', response.data.organisateur.num_RCS)
          setRedirect(true)
        }
         )
      } catch (err) {
        console.log("l'erreur est :", err);
      }
      
        }
    
    

    return (
        <form className='signup' onSubmit={(e)=>handleSubmit(e)}>
        <div className='head'>SignUp Organisateur</div><br/>
            <label>Nom Entreprise </label><br/>
            <input required placeholder='Entrer votre Nom ' id="name" ref={nameInputRef}/><br/>
            
            <label>Email</label><br/>
            <input required placeholder='Entrer un email' type="email" id="email"  ref={emailInputRef}/><br/>
          
            <label>Téléphone</label><br/>
            <input  required placeholder='Entrer votre numéro de téléphone' id="telephone" ref={telInputRef}/><br/>

            <label>Adresse</label><br/>
            <input  required placeholder='Entrer une adresse' id="adress" ref={adressInputRef} /><br/>

            <label>Gerant</label><br/>
            <input required placeholder='Nom gerant' id='gerant' ref={gerantInputRef}/><br/>

            <label>Numéro RCS</label><br/>
            <input required placeholder='Entrer votre numéro RCS' id='num_RCS' ref={numRcsInputRef}/><br/>

            <label>Mot de passe</label><br/>
            <input  required placeholder='Entrer un mot de passe'  id="password" type="password" ref={passwordInputRef}/><br/>
            <label>Confirmer le mot de passe</label><br/>
            <input required placeholder='Confirmer le mot de passe'  id="passwordBix" type="password" ref={passwordBixInputRef}/><br/>
            <button className='valid'>S'inscrire</button>
            {redirect? <Redirect to="/dashboardOrg" />: null}
           

        </form>

    )
}
export default InscriptionOrg