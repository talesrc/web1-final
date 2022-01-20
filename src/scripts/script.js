function validacao() {
    const nome = document.getElementById('nome').value;

    const estado = document.getElementsByName('estado')[0].value;

    const email = document.getElementsByName('email')[0].value;

    const telefone = document.getElementsByName('telefone').value;

    const areaInteresse = document.getElementsByName('areaInteresse')[0].value;

    const curriculo = document.getElementById('arquivo').value;

    const inputVazio = (nome === "" | estado === "" | email === "" |
                        areaInteresse === ""| telefone === "");

    const emailValidado = (email.includes("@") & email.includes(".com"));

    const curriculoVazio = (curriculo === "");

    if (inputVazio) {
        alert('Preencha e selecione todos os campos.');
        return false;
    }

    if (!emailValidado) {
        alert('Email inválido!\nInsira as informações novamente');
        return false;
    }

    if (curriculoVazio) {
        alert('Anexar currículo');
        return false;
    }

    return alert('Currículo cadastrado!');
}

function login() {

    const email = document.getElementsByName('email')[0].value;
    const senha = document.getElementById('senha').value;

    const emailValidado = (email.includes("@") & email.includes(".com"));
    
    if (!emailValidado | senha.length < 6) {
        alert('Login inválido');
        return false;
    } else return true
}

var slideIndex = 1;
showSlides(slideIndex);

function slidePosition(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) slideIndex = 1;

  if (n < 1) slideIndex = slides.length;

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}