function calcularPuntosDeCaida( nivelCombustible) {
    const paises = [
        "China", "Mongolia", "Rusia", "Kazajistán", "Uzbekistán",
        "Turkmenistán", "Irán", "Afganistán", "Pakistán", "India",
        "Nepal", "Bután", "Bangladesh", "Myanmar", "Tailandia",
        "Laos", "Vietnam", "Camboya", "Malasia", "Indonesia",
        "Filipinas", "Pacífico"
    ];

    const indice = Math.round((nivelCombustible / 100) * (paises.length - 1));

    for (let i = 0; i <= indice; i++) {
        console.log(`Sobrevuela ${paises[i]}`);
    }
    return paises[indice];
}

const nivelCombustible = 25; // Nivel de combustible (del 1 al 100)
const paisDeCaida = calcularPuntosDeCaida( nivelCombustible);
console.log(`El cohete caerá en ${paisDeCaida}.`);
