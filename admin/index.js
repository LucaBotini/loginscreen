const user = []
const password = []

const alertContainer = document.querySelector('#alertContainer');
const alertContainersign = document.querySelector('#alertContainersign');
const inputUserCreate = document.getElementById('user') //pegando o valor do input de user
const inputPasswordCreate = document.getElementById('password') //pegando o valor do input de password

const btnCreate = document.getElementById('btncreate') //pegando o valor do button de criação
btnCreate.addEventListener('click', (event) => {
  event.preventDefault();

  if (inputUserCreate.value === '' && inputPasswordCreate.value === '') {
    const msgError = `
      <div class="alert alert-warning mt-3" id="alerta" role="alert">
          Failed to create profile (empty field)
      </div>`;

    alertContainer.innerHTML += msgError;

    // Remover o alerta após 2 segundos
    setTimeout(function () {
      const alerta = document.getElementById('alerta');
      if (alerta) {
        alerta.remove();
      }
    }, 3000);
  } else {
    if (inputUserCreate.value.length > 2 && inputPasswordCreate.value.length > 5) { //caso o user for > 2 e password > 5, funcionará. Caso contrário, erro.
      user.push(inputUserCreate.value)
      password.push(inputPasswordCreate.value)
      console.log('User created successfully')
      // window.location.href = "../public/loginUser.html";
      const msgSuccess = `
        <div id="alertWarning" class="form-floating alert alert-success mt-3" role="alert">
        User created successfully!
      </div>`
      alertContainer.innerHTML += msgSuccess;

      setTimeout(function () {
        const alerta = document.getElementById('alertWarning');
        if (alerta) {
          alerta.remove();
        }
      }, 3000);
    } else {
      const msgError = `
            <div id="alertmin" class="alert alert-warning mt-3" role="alert">
            min characters user (3) - min characters password (6)
          </div>`
      alertContainer.innerHTML += msgError; //mostrando a quantidade minima de caracteres para cada input

      setTimeout(function () {
        const alerta = document.getElementById('alertmin');
        if (alerta) {
          alerta.remove();
        }
      }, 3000);
    }
  }
});

const inputUserJoin = document.getElementById('userjoin') //pegando o valor do input de user logar
const inputPasswordJoin = document.getElementById('passwordjoin') //pegando o valor do input de password logar

const btnJoin = document.getElementById('btnjoin') //pegando o valor do button de logar
btnJoin.addEventListener('click', (event) => {
  event.preventDefault();

  let foundUser = false; // variável para rastrear se o usuário foi encontrado

  for (let i = 0; i < user.length; i++) {
    if (inputUserJoin.value == user[i]) {
      for (let x = 0; x < password.length; x++) {
        if (inputPasswordJoin.value == password[x]) {
          console.log(`user found: ${user[i]}`)

          const msgSuccess = `
                <div id="alertWarning" class="form-floating alert alert-success mt-3" role="alert">
                user found! Welcome
                </div>`
          alertContainersign.innerHTML += msgSuccess;

          setTimeout(function () {
            const alerta = document.getElementById('alertWarning');
            if (alerta) {
              alerta.remove();
            }
          }, 3000);
          foundUser = true; // definindo como verdadeiro, pois o usuário foi encontrado
          break;
        }
      }
    }
  }

  if (!foundUser) { // se o usuário não foi encontrado, exiba um erro
    console.error('User not found or password incorret');

    const msgError = `
      <div id="alertincorret" class="alert alert-warning mt-3" role="alert">
      User not found or password incorret
    </div>`
    alertContainersign.innerHTML += msgError; //mostrando a quantidade minima de caracteres para cada input

    setTimeout(function () {
      const alerta = document.getElementById('alertincorret');
      if (alerta) {
        alerta.remove();
      }
    }, 3000);
  }

});


const btnTheme = document.getElementById('btntheme')
btnTheme.addEventListener('click', (event) =>{
  event.defaultPrevented();

//adicionar theme dark light

})