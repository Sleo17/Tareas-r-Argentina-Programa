document.querySelector('#bienvenido').onclick = function () {
    const userAge = Number (document.querySelector ('#user-age').value);
    const userName = nombreCompletoUsuario();
    mensajeBienvenida(userName);
    document.querySelector('#informacion-total').innerText=`Bienvenido ${userName} de ${userAge} años de edad.`
    return false;
}

function nombreCompletoUsuario () {
    const firstName=document.querySelector('#user-first-name').value;
    const secondName=document.querySelector('#user-second-name').value
       ? `${document.querySelector('#user-second-name').value}` : ''; 
    const surname= document.querySelector('#user-surname').value;
    return `${firstName} ${secondName} ${surname}`;
}

function mensajeBienvenida (userName){
    return document.querySelector('h1').innerText = `Bienvenido ${userName}`;
}
