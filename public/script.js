const form = document.querySelector("#form-id")
const refreshBtn = document.querySelector("#refresh");
const resultado = document.querySelector("#resultado")
//Colocar o evento no input submit e receber dados do form.
refreshBtn.addEventListener("click", function(){
    location.reload()
})
form.addEventListener('submit', function(e){
    e.preventDefault();
    //Dados//
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let email = document.querySelector("#email-set").value;
    let cell = document.querySelector("#cell-set").value;
    //RegEx
    const telRegEx = /^([1-9]\d)(\d{4})-?(\d{4})$/
    //Mensagens de erros//
    let errorMsg = document.querySelector("#error-msg");
    let errorMsg2 = document.querySelector("#error-msg2");
    let errorEmail = document.querySelector("#error-email");
    let errorTel = document.querySelector("#error-tel");
    validarMsg()
    function validarMsg(){
        if (firstName.includes(" ") == true || firstName.length == 0){
            errorMsg.classList.remove("hidden");
        }
        if (lastName.includes(" ") == true || lastName.length == 0){
            errorMsg2.classList.remove("hidden");
        }
        if (email.includes("email"&&".com", "hotmail"&&".com") == false || email.length == 0){
            errorEmail.classList.remove("hidden");
        }
        if(cell.match(telRegEx)===null){
            errorTel.classList.remove("hidden");
        }
    }
    //Adicionar os dados ao resultado
    createDiv(firstName, lastName)
})

function createDiv(fn, ln){
    const div = document.createElement('div');
    div.innerHTML=`Seja bem vindo(a) ${fn} ${ln}!`;
    resultado.appendChild(div);

}