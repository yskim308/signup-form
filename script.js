let form = document.querySelector("#my-form");

form.addEventListener('submit', ()=>{
    event.preventDefault();
    let pw = document.querySelector("#password").value; 
    let confirmPw = document.querySelector("#confirm-password").value;

    if (pw !== confirmPw){
        document.querySelector(".password-check").textContent = "Passwords do not match!";
        let passwords = document.querySelectorAll("#password, #confirm-password");
        passwords.forEach((password)=>{
            console.log(password);
            password.classList.add("error");
        })
    }
})

