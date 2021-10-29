let user = document.querySelector("#userName");
let password = document.querySelector("#password");
let newUser = document.querySelector("#createUser");
let newPassword = document.querySelector("#newPassword");
let modal = document.querySelector("#modal-container");

function loginUser() {
  event.preventDefault();
  let userString = localStorage.getItem("user");
  let passwordString = localStorage.getItem("password");
  let userSystem = user.value.toUpperCase().trim();
  let passwordSystem = password.value.toUpperCase().trim();

  let userConvert = JSON.stringify(userSystem);
  let passwordConvert = JSON.stringify(passwordSystem);

  if (userString === userConvert && passwordString === passwordConvert) {
    modal.classList.remove("hidden");
    setTimeout(function () {
      window.location.href = "auth-ok.html";
    }, 2000);
  } else if (userString != userConvert || passwordString != passwordConvert) {
    modal.innerHTML = `
    <div class="modal-error">
     <p>Usuário ou senha não conferem</p>
    <br>
    <br>
    <div class="button">
    <button onclick="closeModal()">Fechar</button>
    </div>
    </div>`;
    modal.classList.remove("hidden");
   
  }
}

function registerUser() {
  event.preventDefault();

  if (newUser.value && newPassword.value) {
    
      localStorage.setItem(
        "user",
        JSON.stringify(newUser.value.toUpperCase().trim())
      );
      localStorage.setItem(
        "password",
        JSON.stringify(newPassword.value.toUpperCase().trim())
      );
      modal.classList.remove("hidden");
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
  } else {
    modal.innerHTML = `<div class="modal-error">

                         <p>Nenhum campo pode ficar em branco</p>
                        <br>
                        <br>
                        <div class="button">
                        <button onclick="closeModal()">Fechar</button>
                        </div>
                        </div>`;
    modal.classList.remove("hidden");
  }
}

function closeModal() {
  location.reload()
  modal.classList.add("hidden");
}
