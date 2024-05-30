let errorName = document.getElementById("error-name");
let messageErrorName = document.getElementById("message-error-name");
let errorEmail = document.getElementById("error-email");
let messageErrorEmail = document.getElementById("message-error-email");
let errorText = document.getElementById("error-text");
let messageErrorText = document.getElementById("message-error-text");

function enviar(event) {

    if (document.getElementById("name").value && document.getElementById("email").value.includes("@") && document.getElementById("message").value) {
        messageErrorName.style.display = "none";
        messageErrorEmail.style.display = "none";
        messageErrorText.style.display = "none";
        setTimeout(function () {
            document.getElementById("contact__form").reset();
        }, 500);

    } else if (!document.getElementById("name").value && !document.getElementById("email").value.includes("@") && !document.getElementById("message").value) {
        messageErrorName.style.display = "block";
        messageErrorEmail.style.display = "block";
        messageErrorText.style.display = "block";
        errorName.textContent = "Este valor es requerido.";
        errorEmail.textContent = "Este valor es requerido.";
        errorText.textContent = "Este valor es requerido.";
        event.preventDefault();

    } else if (!document.getElementById("name").value) {
        messageErrorName.style.display = "block";
        errorName.textContent = "Este valor es requerido.";
        event.preventDefault();

    } else if (!document.getElementById("email").value.includes("@")) {
        messageErrorEmail.style.display = "block";
        errorEmail.textContent = "Ingresa un correo electrónico válido.";
        event.preventDefault();

    } else if (!document.getElementById("message").value) {
        messageErrorText.style.display = "block";
        errorText.textContent = "Este valor es requerido.";
        event.preventDefault();

    }
}

document.getElementById("name").addEventListener("input", function () {
    document.getElementById("message-error-name").style.display = "none";
});

document.getElementById("email").addEventListener("input", function () {
    if (document.getElementById("email").value.includes("@")) {
        document.getElementById("message-error-email").style.display = "none";
    } else {
        messageErrorEmail.style.display = "block";
        errorEmail.textContent = "Ingresa un correo electrónico válido.";
    }
});

document.getElementById("message").addEventListener("input", function () {
    document.getElementById("message-error-text").style.display = "none";
});