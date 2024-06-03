function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Função para exibir o resultado
function exibirResultado(vitorias, derrotas) {
    const resultado = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} está no nível ${resultado.nivel}`);
}

// Exemplo de uso da função
const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));

exibirResultado(vitorias, derrotas);
