
const pass = document.querySelector("#pass")
const newPassword = document.querySelector("#newPassword")

function generatePass () {

    newPassword.innerHTML = ''
    
    if(pass.value === ''){
        alert('Digite a Quantidade de Caracteres!')
        return              
    }
    
    let charset = 'abcdefghijKlmnopqrstuvwxzABCDEFGHIJKLMNOPQRSWXZ0123456789_@#%&*';
    let password = ''
for (var i = 0, n = charset.length; i < pass.value; ++i){
    
    password += charset.charAt( Math.floor( Math.random() * n))
}

let result = document.createTextNode(password)
return newPassword.appendChild(result)  
}

function copiarTexto() {
    let textoCopiado = document.getElementById("newPassword");
    navigator.clipboard.writeText(textoCopiado.innerText);
    
}
