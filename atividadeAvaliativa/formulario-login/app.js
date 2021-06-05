let form = document.querySelector('form')
let email = document.querySelector('form[name=email]')
let senha = document.querySelector('form[name=senha]')
let btnEnviar = document.querySelector('button[name=btnEnviar]') 


btnEnviar.addEventListener('click',validarLogin)

function validarLogin(){
    if((`${form.email.value}` == 'rudson@gmail.com') && (`${form.senha.value}` == '123456')){
        loginValido()
    }else{
        loginInvalido()
    }
}

function loginValido(){
    document.write(`Usuário Logado`)
}

function loginInvalido(){
    document.write(`Login ou senha inválidos`)
}