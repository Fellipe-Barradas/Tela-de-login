const form = document.querySelector("#form-id")
//Colocar o evento no input submit e receber dados do form.
form.addEventListener('submit', function(e){
    e.preventDefault();
    //Dados//
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let email = document.querySelector("#email-set").value;
    let cell = document.querySelector("#cell-set").value;
    //Mensagens de erros//
    let errorMsg = document.querySelector("#error-msg");
    validarMsg()
    function validarMsg(){
        if (firstName.includes(" ") == true || firstName.length == 0){
            return errorMsg.classList.remove("hidden");
        }
        if (lastName.includes(" ") == true || lastName.length == 0){
            return errorMsg.classList.remove("hidden");
        }
        if (email.includes("email", "hotmail") == false || email.length == 0){
            return errorMsg.classList.remove("hidden");
        }
    }
})

