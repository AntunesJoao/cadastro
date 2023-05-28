function validarFields(){
    toggleButtonsDisable()
    toggleErrors()
}




function toggleErrors(){
    const email = document.getElementById('email').value
    if(validateEmail(email)){
        document.getElementById('email-error').style.display = "none"
        document.getElementById('senha-error').style.display = "none"
    }else{
        document.getElementById('email-error').style.display = "block"
        document.getElementById('senha-error').style.display = "block"
    }

}

function toggleButtonsDisable(){
    const email = document.getElementById('email').value
    const senha = isSenhaValid()
    document.getElementById('login-button').disabled = !email  || !senha
    if(!email){
        document.getElementById('recover-senha').disabled = true
    }
    else if(validateEmail(email)){
        document.getElementById('recover-senha').disabled = false 

    }
}


function isSenhaValid(){
    const senha = document.getElementById('senha').value
    if(!senha){
        return false
    }
    return true
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email)
}