// MODO ESCURO
const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Modo Claro";
  } else {
    toggleBtn.textContent = "🌙 Modo Escuro";
  }
});


// CURIOSIDADES ALEATÓRIAS
const curiosidades = [
  "Ada Lovelace é considerada a primeira programadora da história.",
  "Ela imaginou computadores criando música!",
  "Era filha do poeta Lord Byron.",
  "Trabalhou com Charles Babbage.",
  "Seu trabalho só foi reconhecido muitos anos depois."
];

const btn = document.getElementById("btn-curiosidade");
const texto = document.getElementById("curiosidade");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * curiosidades.length);
  texto.textContent = curiosidades[random];
});