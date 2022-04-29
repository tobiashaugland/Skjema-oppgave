
//Gjør at "Send Inn" knappen ikke har en funksjon

document.querySelector("#submit").addEventListener("click", (e) => e.preventDefault())

//Hører etter på input om skjemaene er fylt ut
document.querySelector("#name").addEventListener("input", allowButtonClick)
document.querySelector("#email").addEventListener("input", allowButtonClick)
document.querySelector("#tel").addEventListener("input", allowButtonClick)
document.querySelector("#privacy").addEventListener("input", allowButtonClick)

//Returnerer falskt hvis noen av inputsene ikke er fylt ut

function checkIfFilled() {

    const form = document.querySelector("form")

    if (form.name.value === "") {
        return false
    }

    if (form.email.value === "") {
        return false
    }

    if (form.tel.value === "") {
        return false
    }

    if (!form.privacy.checked) {
        return false
    }
    //Hvis alle inputsene er fylt ut returnerer den sann

    return true
}

function allowButtonClick() {

    const submit = document.querySelector("#submit")

    //Hvis "checkIfFilled" returnerer "sann" vil "Send Inn" knappen bli trykkbar

    if (checkIfFilled()) {
        submit.addEventListener("click", validateInputs)
        submit.style.backgroundColor = "rgb(0, 51, 160)"
        submit.style.cursor = "pointer"
    }

    //Hvis "checkIfFilled" returnerer "falskt" vil "Send Inn" knappen ikke være trykkbar

    else {
        submit.removeEventListener("click", validateInputs)
        submit.style.backgroundColor = "rgba(0, 51, 160, 0.5)"
        submit.style.cursor = "not-allowed"
    }
}

//Når "Send Inn" knappen blir trykket validerer den om inputsene er riktig fylt inn

function validateInputs() {
    const p = document.querySelector("#p")
    const form = document.querySelector("form")
    const atPosition = form.email.value.indexOf("@");
    const dotPosition = form.email.value.lastIndexOf(".")

    let isValid = true;

    //Hvis både e-post og telefonnummer er ugyldig

    if ((atPosition < 1 || dotPosition < 1 || dotPosition - atPosition < 2) && (isNaN(form.tel.value) || form.tel.value.length < 8)) {
        p.textContent = "Skriv inn en gyldig e-postadresse og telefonnummer!"
        isValid = false;
        return
    }

    //Sjekker at e-post ikke starter med "." eller "@" Og at det er minst en karakter mellom "@" og den siste "."

    if (atPosition < 1 || dotPosition < 1 || dotPosition - atPosition < 2) {
        p.textContent = "Skriv inn en gyldig e-postadresse! "
        isValid = false;
        return
    }

    //Sjekker at telfonnummeret er et nummer og at den er minst 8 siffer.

    if (isNaN(form.tel.value) || form.tel.value.length < 8) {
        p.textContent = "Telefonnummer må være minst åtte siffer og bare inneholde tall. "
        isValid = false;
        return
    }

    submitForm();

}

//Hvis telefonnummer og e-post er gyldig blir skjemaet sendt inn

function submitForm() {
    const p = document.querySelector("#p")
    p.textContent = "Takk for din melding, vi vil svare deg så fort som mulig!"
}







