const form = document.querySelector("form")
const inputPassword = document.querySelector("#pwd")
const inputTerms = document.querySelector("terms")

const checkPassword = document.querySelector("#check-pwd")
const checkTerms = document.querySelector("#check-terms")

inputPassword.onblur = (e) => {
    if (inputPassword.value.length < 8) {
       checkPassword.textContent = "The password must be at least 8 characters long."
       inputPassword.classList.add("input-error")
    }
  }
  
/*con esto quiero que la checkeada de los terminos se obligatoria
para mandar el fomulario ???????????????? NO ME FUNCIONA */

inputTerms.onblur = (e) =>  {
    if (inputTerms.value.length =  false ) {
        checkTerms.textContent = "You must accept the terms."
        inputTerms.classList.add("input-error")

    }
}