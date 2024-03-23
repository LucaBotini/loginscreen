const user = []
const password = []


const inputUserCreate = document.getElementById('user')
const inputPasswordCreate = document.getElementById('password')

const btnCreate = document.getElementById('btncreate')
btnCreate.addEventListener('click', (event) =>{
    event.preventDefault();

    if(inputUserCreate.value && inputPasswordCreate.value === 's'){
        console.log('Erro')
    }else{
        user.push(inputUserCreate.value)
        password.push(inputPasswordCreate.value)
        alert('Create Success')
    }
});

const inputUserJoin = document.getElementById('userjoin')
const inputPasswordJoin = document.getElementById('passwordjoin')

const btnJoin = document.getElementById('btnjoin')
btnJoin.addEventListener('click', (event) =>{
    event.preventDefault();
    if(inputUserJoin.value == user && inputPasswordJoin.value == password){
        alert('Join Success')
    }else{
        alert('Failed Join')
    }
});



// OBJETIVOS 

// CRIAR VERIFICAÇÃO PARA NÃO CRIAR USUARIOS COM O VALOR '' (vazio)
// CRIAR DESING COM BOOTSTRAP 
// CRIAR TELAS DIFERENTES PARA CRIAR E LOGAR 
// MANTER O MAIS PROFISSIONAL PARA POSTAGEM DE PROJETO