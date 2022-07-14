// O sistema de pontuação por partida no Campeonato Brasileiro de Futebol funciona assim:

// Vitória = 3 pontos
// Derrota = 0 pontos
// Empate  = 1 ponto
// Dado que o time 'Tabajara F.C.' tem 12 vitórias, 2 derrotas e 6 empates, implemente um código em Javascript para calcular a quantidade de pontos e de jogos deste time.
// Ao final, construa uma página HTML que apresente a frase abaixo (preenchendo-a com os respectivos valores):

// "O time <NOME_DO_TIME> acumulou <NRO_DE_PTOS> após jogar <NRO_PARTIDAS> partidas".

// A página html deve conter uma elemento de parágrafo com o texto indicado no seu 'body'.
// O elemento HTML com a frase deve ser criado dinamicamente com código Javascript.
// Pode estilizar a página, se quiser.

// Dicas:
// - Crie variáveis para guardar o valor de vitorias, derrotas e empates.
// - Crie outra variável para guardar o nro de partidas (soma de vitorias, derrotas e empates).
// - Crie outra variável para receber o resultado do calculo de pontos.
// - Coloque o código Javascript na página e faça a inserção do elemento com a frase solicitada.

var nomeDoTime = 'Tabajara F.C.'
var pVitoria = 3;
var pDerrota = 0;
var pEmpate = 1;
var vitorias = 12;
var derrotas = 2;
var empates = 6;
var nPartidas = vitorias + derrotas + empates;
var pontos = 0
var pontos = (vitorias * pVitoria)+(empates * pEmpate);

const p = document.createElement('p')
p.innerText = `"O time ${nomeDoTime} acumulou ${pontos} Pontos após jogar ${nPartidas} partidas".`
const body = document.body
body.appendChild(p)
