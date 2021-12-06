// Declarar as regras dos carros por raridade
const raridadePopular = {
    velMaxInf: 180,
    velMaxSup: 200,
    velMinInf: 110,
    velminSup: 130,
    derrapagemInf: 0.03,
    derrapagemSup: 0.04
};

const raridadeSport = {
    velMaxInf: 195,
    velMaxSup: 200,
    velMinInf: 125,
    velMinSup: 145,
    derrapagemInf: 0.02,
    derrapagemSup: 0.03
};

const raridadeSuperSport = {
    velMaxInf: 210,
    velMaxSup: 230,
    velMinInf: 125,
    velMinSup: 145,
    derrapagemInf: 0.01,
    derrapagemSup: 0.0175
};

//raridade dos carros
const raridadesDosCarros = {
    Pedro: "",
    Juca: "",
    Edna: "",
};

//carro Pedro
const carroPedro = {
    velocidadeMinima: 0,
    velocidadeMaxima: 0,
    derrapagem: 0
};

//carro Juca
const carroJuca = {
    velocidadeMinima: 0,
    velocidadeMaxima: 0,
    derrapagem: 0
}

//carro Edna
const carroEdna = {
    velocidadeMinima: 0,
    velocidadeMaxima: 0,
    derrapagem: 0
}

//vitórias 
const vitórias = {
    pedro: 0,
    juca: 0,
    edna: 0
};

const velocidadeCorrida = {
    pedro: 0,
    juca: 0,
    edna: 0
}

const informarVencedor = document.getElementById("vencedor");

//função para gerar valores dos carros
function determinarValor (limiteInferior, limiteSuperior) {
    let valor = Math.random()*(limiteSuperior - limiteInferior) + limiteInferior;
    return valor;
}

//função para determinar a raridade
function determinarRaridade () {
    let raridade = "";
    let probabilidade = Math.random();
    if (probabilidade <= 0.6) {
        raridade = "Popular";
    } else if (probabilidade > 0.6 && probabilidade <= 0.95) {
        raridade = "Sport";
    } else {
        raridade = "Super Sport";
    }
    return raridade;
}

// velocidade em cada volta
function velocidade(min,max,derrapagem) {
    let vel = Math.random()*(max-min) + min;
    let velocidadeFinal = vel*(100 - derrapagem);
    return velocidadeFinal;
}

//Corrida rápida
function corridaRapida() {
    vitórias.pedro = 0;
    vitórias.juca = 0;
    vitórias.edna = 0;
    raridadesDosCarros.Pedro = determinarRaridade();
    raridadesDosCarros.Juca = determinarRaridade();
    raridadesDosCarros.Edna = determinarRaridade();

    if (raridadesDosCarros.Pedro === "Popular") {
        carroPedro.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Pedro === "Sport") {
        carroPedro.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroPedro.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    if (raridadesDosCarros.Juca === "Popular") {
        carroJuca.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Juca === "Sport") {
        carroJuca.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroJuca.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    if (raridadesDosCarros.Edna === "Popular") {
        carroEdna.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Edna === "Sport") {
        carroEdna.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroEdna.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    for (let i = 0; i <= 9; i++) {
        velocidadeCorrida.pedro = velocidade ( carroPedro.velocidadeMinima , carroPedro.velocidadeMaxima , carroPedro.derrapagem );
        velocidadeCorrida.juca = velocidade ( carroJuca.velocidadeMinima , carroJuca.velocidadeMaxima , carroJuca.derrapagem );
        velocidadeCorrida.edna = velocidade ( carroEdna.velocidadeMinima , carroEdna.velocidadeMaxima , carroEdna.derrapagem );
        let volta = [velocidadeCorrida.pedro , velocidadeCorrida.juca, velocidadeCorrida.edna];
        let resultadoVolta = volta.sort((a,b) => b - a);
        if (resultadoVolta[0] === velocidadeCorrida.pedro) {
            vitórias.pedro += 1;
        } else if (resultadoVolta[0] === velocidadeCorrida.juca) {
            vitórias.juca += 1;
        } else {
            vitórias.edna += 1;
        }
    }

    let valoresFinais = [vitórias.pedro, vitórias.juca, vitórias.edna];
    let resultado = valoresFinais.sort(( a, b) => b - a);
    let vencedor = "";
    if (resultado[0] === vitórias.pedro) {
        vencedor = "Pedro";
    } else if (resultado[0] === vitórias.juca) {
        vencedor = "Juca";
    } else {
        vencedor = "Edna";
    }
    console.log("O vencedor da corrida rápida é " + vencedor);
    informarVencedor.innerHTML = "O vencedor da corrida rápida é " + vencedor;

}

//Grande prêmio
function grandePremio() {
    vitórias.pedro = 0;
    vitórias.juca = 0;
    vitórias.edna = 0;
    raridadesDosCarros.Pedro = determinarRaridade();
    raridadesDosCarros.Juca = determinarRaridade();
    raridadesDosCarros.Edna = determinarRaridade();

    if (raridadesDosCarros.Pedro === "Popular") {
        carroPedro.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Pedro === "Sport") {
        carroPedro.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroPedro.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    if (raridadesDosCarros.Juca === "Popular") {
        carroJuca.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Juca === "Sport") {
        carroJuca.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroJuca.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    if (raridadesDosCarros.Edna === "Popular") {
        carroEdna.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Edna === "Sport") {
        carroEdna.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroEdna.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    for (let i = 0; i <= 69; i++) {
        velocidadeCorrida.pedro = velocidade ( carroPedro.velocidadeMinima , carroPedro.velocidadeMaxima , carroPedro.derrapagem );
        velocidadeCorrida.juca = velocidade ( carroJuca.velocidadeMinima , carroJuca.velocidadeMaxima , carroJuca.derrapagem );
        velocidadeCorrida.edna = velocidade ( carroEdna.velocidadeMinima , carroEdna.velocidadeMaxima , carroEdna.derrapagem );
        let volta = [velocidadeCorrida.pedro , velocidadeCorrida.juca, velocidadeCorrida.edna];
        let resultadoVolta = volta.sort((a,b) => b - a);
        if (resultadoVolta[0] === velocidadeCorrida.pedro) {
            vitórias.pedro += 1;
        } else if (resultadoVolta[0] === velocidadeCorrida.juca) {
            vitórias.juca += 1;
        } else {
            vitórias.edna += 1;
        }
    }

    let valoresFinais = [vitórias.pedro, vitórias.juca, vitórias.edna];
    let resultado = valoresFinais.sort(( a, b) => b - a);
    let vencedor = "";
    if (resultado[0] === vitórias.pedro) {
        vencedor = "Pedro";
    } else if (resultado[0] === vitórias.juca) {
        vencedor = "Juca";
    } else {
        vencedor = "Edna";
    }
    console.log("O vencedor do Grande Prêmio é " + vencedor);
    informarVencedor.innerHTML = "O vencedor do Grande Prêmio é " + vencedor;

}

//Enduro
function enduro() {
    vitórias.pedro = 0;
    vitórias.juca = 0;
    vitórias.edna = 0;
    raridadesDosCarros.Pedro = determinarRaridade();
    raridadesDosCarros.Juca = determinarRaridade();
    raridadesDosCarros.Edna = determinarRaridade();

    if (raridadesDosCarros.Pedro === "Popular") {
        carroPedro.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Pedro === "Sport") {
        carroPedro.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroPedro.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroPedro.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroPedro.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    if (raridadesDosCarros.Juca === "Popular") {
        carroJuca.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Juca === "Sport") {
        carroJuca.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroJuca.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroJuca.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroJuca.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    if (raridadesDosCarros.Edna === "Popular") {
        carroEdna.velocidadeMinima = determinarValor(raridadePopular.velMinInf, raridadePopular.velminSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadePopular.velMaxInf, raridadePopular.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadePopular.derrapagemInf, raridadePopular.derrapagemSup);
    } else if (raridadesDosCarros.Edna === "Sport") {
        carroEdna.velocidadeMinima = determinarValor(raridadeSport.velMinInf, raridadeSport.velMinSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadeSport.velMaxInf, raridadeSport.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadeSport.derrapagemInf, raridadeSport.derrapagemSup);
    } else {
        carroEdna.velocidadeMinima = determinarValor(raridadeSuperSport.velMinInf, raridadeSuperSport.velMinSup);
        carroEdna.velocidadeMaxima = determinarValor(raridadeSuperSport.velMaxInf, raridadeSuperSport.velMaxSup);
        carroEdna.derrapagem = determinarValor(raridadeSuperSport.derrapagemInf, raridadeSuperSport.derrapagemSup);
    }

    for (let i = 0; i <= 159; i++) {
        velocidadeCorrida.pedro = velocidade ( carroPedro.velocidadeMinima , carroPedro.velocidadeMaxima , carroPedro.derrapagem );
        velocidadeCorrida.juca = velocidade ( carroJuca.velocidadeMinima , carroJuca.velocidadeMaxima , carroJuca.derrapagem );
        velocidadeCorrida.edna = velocidade ( carroEdna.velocidadeMinima , carroEdna.velocidadeMaxima , carroEdna.derrapagem );
        let volta = [velocidadeCorrida.pedro , velocidadeCorrida.juca, velocidadeCorrida.edna];
        let resultadoVolta = volta.sort((a,b) => b - a);
        if (resultadoVolta[0] === velocidadeCorrida.pedro) {
            vitórias.pedro += 1;
        } else if (resultadoVolta[0] === velocidadeCorrida.juca) {
            vitórias.juca += 1;
        } else {
            vitórias.edna += 1;
        }
    }

    let valoresFinais = [vitórias.pedro, vitórias.juca, vitórias.edna];
    let resultado = valoresFinais.sort(( a, b) => b - a);
    let vencedor = "";
    if (resultado[0] === vitórias.pedro) {
        vencedor = "Pedro";
    } else if (resultado[0] === vitórias.juca) {
        vencedor = "Juca";
    } else {
        vencedor = "Edna";
    }
    console.log("O vencedor do Enduro é " + vencedor);
    informarVencedor.innerHTML = "O vencedor do Enduro é " + vencedor;

}