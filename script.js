let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    let password1 = document.querySelector('#password');
    let password2 = document.querySelector('#confirm');
    console.log(password1.value);
    console.log(password2.value);

    if (password1.value !== password2.value) {
        let error = document.createElement('div');
        error.textContent = "Passwords do not match.";
        error.style.backgroundColor = "red";
        error.style.borderRadius = "1vw";
        error.style.fontSize = "1.3vh";
        error.style.padding = "0.5vw";
        error.style.display = "block";
        error.style.marginTop = "0.3vh";
        error.style.width = "fit-content";
        password1.style.border = "0.2vw solid red";
        password2.style.border = "0.2vw solid red";
        if (password1.parentNode.lastChild.textContent == error.textContent) {
            event.preventDefault();
            return;
        }
        else {
        password1.parentNode.appendChild(error);
        event.preventDefault();
        alert('works!');
        }
    }


});