const user = []
const password = []
console.log(user)
console.log(password)


const inputUserCreate = document.getElementById('user') //pegando o valor do input de user
const inputPasswordCreate = document.getElementById('password') //pegando o valor do input de password

const btnCreate = document.getElementById('btncreate') //pegando o valor do button de criação
btnCreate.addEventListener('click', (event) =>{
    event.preventDefault();

    if(inputUserCreate.value === '' && inputPasswordCreate.value === ''){ //caso o input esteja vazio, dará erro.
        console.error('failed create profile (empty field)')
    }else{
        if(inputUserCreate.value.length > 2 && inputPasswordCreate.value.length > 5){ //caso o user for > 2 e password > 5, funcionará. Caso contrário, erro.
        user.push(inputUserCreate.value)
        password.push(inputPasswordCreate.value)
        alert('Create Success')
        }else{
            console.error('min characters user (3) - min characters password (6)') //mostrando a quantidade minima de caracteres para cada input
        }
    }
});

const inputUserJoin = document.getElementById('userjoin') //pegando o valor do input de user logar
const inputPasswordJoin = document.getElementById('passwordjoin') //pegando o valor do input de password logar

const btnJoin = document.getElementById('btnjoin') //pegando o valor do button de logar
btnJoin.addEventListener('click', (event) =>{
    event.preventDefault();

    let foundUser = false; // variável para rastrear se o usuário foi encontrado

    for (let i = 0; i < user.length; i++) {
        if(inputUserJoin.value == user[i]){
            for( let x = 0; x < password.length; x++){
            if(inputPasswordJoin.value == password[x]){
                console.log(`user found: ${user[i]}`)
                foundUser = true; // definindo como verdadeiro, pois o usuário foi encontrado
                break;
            }
            }
        }
    }

    if (!foundUser) { // se o usuário não foi encontrado, exiba um erro
        console.error('User not found');  
    }
    
});





// OBJETIVOS 

// CRIAR VERIFICAÇÃO PARA NÃO CRIAR USUARIOS COM O VALOR '' (vazio) 🎇
// CRIAR DESING COM BOOTSTRAP ❌
// CRIAR TELAS DIFERENTES PARA CRIAR E LOGAR ❌
// MANTER O MAIS PROFISSIONAL PARA POSTAGEM DE PROJETO ❌