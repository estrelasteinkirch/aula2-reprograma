// var form = document.getElementById("contact");

// if (form.addEventListener){
//   form.addEventListener("submit", validacao);
// }
// else if (form.attachEvent){
//   form.attachEvent("onsubmit", validacao);
// }

const botao = document.querySelector('.btn-enviar');

botao.addEventListener('click', function (evento){
  evento.preventDefault();

  let sucesso = true;

  const nome = document.querySelector("#exampleFormControlInput1");
  const email = document.querySelector("#exampleFormControlInput2");
  const telefone = document.querySelector("#exampleFormControlInput3");
  const text = document.querySelector("#exampleFormControlTextarea4");

// Validação do Campo nome
  if(nome.value.trim() == ""
  ||nome.value == undefined
  ||nome.value.length < 2 ){
    const corMsg = document.createElement("div");
    const divNome = document.querySelector("#campoNome");
    const msgNome = document.createTextNode("Por favor, preencha o campo NOME");
    corMsg.appendChild(msgNome);
    corMsg.style.color = "red";
    divNome.appendChild(corMsg);
    nome.focus();
    sucesso = false;
  }

  // Validação do Campo telefone
  if(telefone.value.trim() == ""
    || isNaN(telefone.value)
    || telefone.value.length < 9 ){
      console.log(telefone)
    const corMsg = document.createElement("div");
    const divTel = document.querySelector("#campoTel");
    const msgTel = document.createTextNode("O telefone só deve conter dígitos");
    corMsg.appendChild(msgTel);
    corMsg.style.color = "red";
    divTel.appendChild(corMsg);
    telefone.focus();
    sucesso = false;
  }

 // Validação do Campo email
  if(email.value.trim() == "" 
  || email.value.indexOf("@")==-1 
  || email.value.indexOf(".")==-1){
    const corMsg = document.createElement("div");
    const divEmail = document.querySelector("#campoEmail");
    const msgEmail = document.createTextNode("Por favor, digite um e-mail válido");
    corMsg.appendChild(msgEmail);
    corMsg.style.color = "red";
    divEmail.appendChild(corMsg);
    email.focus();
    sucesso = false;
  }
  
  if(text.value.trim() == ""
  ||text.value.length < 10){
    const corMsg = document.createElement("div");
    const divText = document.querySelector("#campoText");
    const msgText = document.createTextNode("A mensagem deve ter pelo menos 10 caracteres");
    corMsg.appendChild(msgText);
    corMsg.style.color = "red";
    divText.appendChild(corMsg);
    text.focus();
    sucesso = false;
  }

  if (sucesso){
  document.querySelector('form').submit()
  alert("Mensagem enviada com realizado com sucesso!")
  }

})

