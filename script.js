const dadosPeixes = {
  "lambari": {
    alimento: "Rações comerciais e pequenos insetos",
    parametros: "Temperatura: 22-28°C, pH: 6.5-7.5, Oxigênio: >5 mg/L",
    outros: "Muito utilizado como isca viva, crescimento rápido"
  },
  "curimba": {
    alimento: "Fitoplâncton, detritos orgânicos",
    parametros: "Temperatura: 24-30°C, pH: 6.0-7.5, Oxigênio: >5 mg/L",
    outros: "Peixe migrador, importante para a pesca comercial"
  },
  "tilapia": {
    alimento: "Ração vegetal, folhas, algas",
    parametros: "Temperatura: 25-32°C, pH: 6.5-8.5, Oxigênio: >4 mg/L",
    outros: "Peixe muito resistente, ideal para iniciantes"
  }
};

function buscarPeixe() {
  const nome = document.getElementById("peixeInput").value.toLowerCase();
  const info = dadosPeixes[nome];

  const div = document.getElementById("resultado");

  if (info) {
    div.innerHTML = `
      <h2>${nome.charAt(0).toUpperCase() + nome.slice(1)}</h2>
      <p><strong>Alimento:</strong> ${info.alimento}</p>
      <p><strong>Parâmetros ideais de água:</strong> ${info.parametros}</p>
      <p><strong>Outras informações:</strong> ${info.outros}</p>
    `;
  } else {
    div.innerHTML = `<p>Peixe não encontrado. Tente "lambari", "curimba" ou "tilapia".</p>`;
  }
}
