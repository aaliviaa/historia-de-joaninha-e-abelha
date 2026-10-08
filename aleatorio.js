const nomes = ["Lili a Joaninha", "Melinda a Abelha", "Lili e Melinda"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
