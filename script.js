const botao = document.getElementById("btn");
const logo = document.getElementById("logo");
const favicon = document.getElementById("favicon");

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    logo.src = "img/logoClara.png";
    botao.src = "img/botaoClaro.png";
    favicon.href = "Favicon2.svg"
  } else {
    logo.src = "img/logoEscura.png";
    botao.src = "img/botaoEscuro.png";
    favicon.href = "Favicon1.svg"
  }
});