

// Restante do código existente (carrinho, etc.)
document.getElementById('entrar').addEventListener('click', () => {
    let nome = document.getElementById('nomeCliente').value;
    if (nome.trim() === "") {
        alert("Digite seu nome!");
        return;
    }
    document.getElementById('mensagem').innerHTML = `Bem-vindo(a) a Padaria, ${nome}`;
});

const nomePadaria = "Padaria Coffee";
const sobre = "Cheiro que conquista";
const endereco = "Rua Alfredo Haak, 99";
const telefonePadaria = "(19) 98608-0910";

if (document.getElementById('dadosPadaria')) {
    document.getElementById('dadosPadaria').innerHTML = 
        `${nomePadaria} - ${sobre} - ${endereco} - ${telefonePadaria}`;
}

let carrinho = [];
let totalCarrinho = 0;

document.querySelectorAll('.comprar').forEach(btn => {
    btn.addEventListener('click', () => {
        let produto = btn.dataset.produto;
        let preco = parseFloat(btn.dataset.preco);
        
        carrinho.push({nome: produto, preco});
        totalCarrinho += preco;
        
        let li = document.createElement('li');
        li.textContent = `${produto} - R$ ${preco.toFixed(2)}`;
        
        document.getElementById('listaCarrinho').appendChild(li);
        document.getElementById('totalCarrinho').textContent = totalCarrinho.toFixed(2);
    });
});

document.getElementById('removerTodos').addEventListener('click', () => {
    carrinho = [];
    totalCarrinho = 0;
    document.getElementById('listaCarrinho').innerHTML = "";
    document.getElementById('totalCarrinho').textContent = "0.00";
});

function calcularItem(tipo, preco, idQuantidade, idResultado) {
    let quantidade = document.getElementById(idQuantidade).value;
    let resultado = parseFloat(preco) * parseInt(quantidade);
    document.getElementById(idResultado).textContent = `Total: R$ ${resultado.toFixed(2)}`;
}