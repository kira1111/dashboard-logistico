const entregas = [
    {id: 1, transportadora: "RotaMax", regiao: "Sudeste", atrasado: true},
    {id: 2, transportadora: "ViaCargo", regiao: "Sul", atrasado: false},
    {id: 3, transportadora: "FlashLog", regiao: "Nordeste", atrasado: true},
    {id: 4, transportadora: "RotaMax", regiao: "Norte", atrasado: false},
    {id: 5, transportadora: "ViaCargo", regiao: "Centro-Oeste", atrasado: true},
    {id: 6, transportadora: "FlashLog", regiao: "Sul", atrasado: false}
];

const total = entregas.length;
const atrasadas = entregas.filter(e => e.atrasado).length;
const percentual = ((atrasadas / total) * 100).toFixed(0);

document.getElementById("total").textContent = total;
document.getElementById("atrasadas").textContent = atrasadas;
document.getElementById("percentual").textContent = percentual + "%";

const tabela = document.getElementById("tabela");

entregas.forEach(e => {
    const linha = document.createElement("tr");

    linha.className = e.atrasado ? "atrasado" : "noPrazo";

    linha.innerHTML = `
        <td>${e.id}</td>
        <td>${e.transportadora}</td>
        <td>${e.regiao}</td>
        <td>${e.atrasado ? "Atrasada" : "No prazo"}</td>
    `;

    tabela.appendChild(linha);
});

new Chart(document.getElementById("graficoAtrasos"), {
    type: "bar",
    data: {
        labels: ["No Prazo", "Atrasadas"],
        datasets: [{
            label: "Quantidade",
            data: [total - atrasadas, atrasadas]
        }]
    },
    options: {
        responsive: true
    }
});