const cep = document.getElementById('cep');
const btn = document.getElementById('btn-1');
const formome = document.getElementById('nome');
const formEmail = document.getElementById('email');
const sectionForm = document.querySelector('.form');

formome.addEventListener('keyup',()=>{
    let istyle =  document.getElementById('avisoNome');
    let nome = document.getElementById('nome').value;

    if(nome.replace(/\s/g, '') == ''){
        if(istyle.style.visibility === 'visible')
            istyle.style.visibility = "hidden";
    }
    if (validaNome(nome.replace(/\s/g, '')) == false) {
        document.getElementById('avisoNome').style.visibility = "visible";
    }else{
        if(istyle.style.visibility === 'visible')
            istyle.style.visibility = "hidden";
    }
});
formEmail.addEventListener('keyup',()=>{
    let message =  document.getElementById('avisoEmail');
    let email = document.getElementById('email').value;
    
    if (validaEmail(email) == false) {
        message.style.visibility = "visible";
    }else{
        if(message.style.visibility === 'visible')
        message.style.visibility = "hidden";
    }
});
cep.addEventListener('keyup',(e)=>{
        if(e.key != 'Backspace' ){
            if(cep.value.length == 5 ){
                cep.value+= '-';
            }
        }
    let message = document.getElementById('cepMessage');
    if(validaCEP(cep.value) == false){
        message.style.visibility = 'visible';
    }else{
        if(message.style.visibility === 'visible')
            message.style.visibility = 'hidden';
    }
})
sectionForm.addEventListener('keyup', ()=>{
    let email = document.getElementById('email').value;
    let nome = document.getElementById('nome').value;

    if (validaNome(nome.replace(/\s/g, ''))){
        if (validaEmail(email)){
            if(validaCEP(cep.value)){
                btn.style.visibility = 'visible';
            }else{
                btn.style.visibility = 'hidden';
            }
        }else{
            btn.style.visibility = 'hidden';
        }
    }else{
        btn.style.visibility = 'hidden';
    }
})

btn.addEventListener('click', ()=>{
    document.getElementById('mesage').style.visibility = "visible";
                            setTimeout(() => {
                                document.getElementById('mesage').style.visibility = "hidden";
                                
                            }, 3000);
    btn.style.visibility = 'hidden';
    formEmail.value = '';
    formome.value = '';
    cep.value = '';
});

function validaEmail(email){
    let regex = /[\w\.+-]+@([\w-]+\.)+[a-z]{2,}/
    return regex.test(email);
}
function validaNome(nome){
   let regex = /^[a-zA-Z]{3,}$/;
   return regex.test(nome);
}
function validaCEP(cep){
    let regex = /(^[\d]{5}-([\d]{3})$)/;
    return regex.test(cep);
}

