const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mensagem = document.getElementById("mesagem");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    checkForm();
})
email.addEventListener("blur", () => {
    checkInputEmail();
})
username.addEventListener("blur", () =>{
    checkInputUsername();
})
phone.addEventListener("blur", () =>{
    checkInputPhone();
})


// CHECK USERNAME
function checkInputUsername (){
    const usernameValue = username.value;
    console.log(usernameValue);
    // condição 
    if (usernameValue == ""){
        errorInput (username, "Sessão obrigatória!")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}
// CHECK EMAIL
function checkInputEmail(){
    const emailValue = email.value;
    // CONDIÇÃO DE VALIDAÇÃO
    if(emailValue === ""){
        errorInput(email, "Sessão obrigrória") //ACIONA ALERTA
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content" // RETIRA ALERTA
    }
}
// CHECK PHONE
function checkInputPhone(){
    const phoneValue = phone.value;
    // CONDIÇÃO DE VALIDAÇÃO
    if(phoneValue === ""){
        errorInput(phone, "Sessão obrigrória") //ACIONA ALERTA
    } else {
        const formItem = phone.parentElement;
        formItem.className = "form-content" // RETIRA ALERTA
    }
}
// CHECK FORM
function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPhone();
    checkInputMensagem();

    const formItems = form.querySelectorAll(".form-content")
    // passa por todos os elementos e verifica se estão preenchidos (com a class 'form-content')
    const isValid = [...formItems].every( (item) => {
        return item.className === "form.content"
    })
    // se todos os elementos forem 'true', o formulário é valido e o console mostra "Casdastrado com sucesso!"
    if (isValid) {
        alert("Casdastrado com sucesso!")
    } else {
        alert("Preença todos os campos do formulário")
    }
}

// ALERT FUNCTION
function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}