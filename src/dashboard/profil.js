import React from 'react'
import utilisateur1 from './utilisateur1.png'

function profil(){
  

    const [show3, setShow3] = React.useState(false)
 
 function modif(){
    setShow3(!show3)
    
 }
 
    return(
      <div className='profil'>
        <h3>Profil Utilisateur</h3>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('lastName')}</p>
        <p>{ localStorage.getItem('firstName')}</p>
        <p>{ localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('phone')}</p>
        </div>
        <button className='valid' onClick={modif}>Modifier</button>
       {show3? <div className='modifProfil'>
        <h3 >Modifier vos informations</h3>
        <div className='infoModif'>
         <label>Id</label><br/>
         <input placeholder={ localStorage.getItem('id')}/><br/>
         <label>Nom</label><br/>
         <input placeholder={ localStorage.getItem('firstName')}/><br/>
         <label>Prenom</label><br/>
         <input placeholder={ localStorage.getItem('lastName')}/><br/>
        <label>Numéro</label><br/>
        <input placeholder={ localStorage.getItem('phone')}/><br/>
         <label>Email</label><br/>
         <input placeholder={ localStorage.getItem('mail')}/><br/>
         <button className='valid'>Valider</button>
         </div>
      </div>:null}
      </div>
    )
}
export default profil