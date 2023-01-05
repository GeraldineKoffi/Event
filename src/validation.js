function validation(emailInputRef,passwordInputRef){
    let error = {}
    if(emailInputRef=== ""){
        error.emailInputRef="Veuillez entrer un email svp"
    }

    if(emailInputRef=== ""){
        error.emailInputRef="Veuillez entrer un email svp"
    }
    if(passwordInputRef=== ""){
        error.passwordInputRef="Veuillez entrer un mot de passe svp"
    }
    return error
}
export default validation
