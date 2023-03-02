const btnFazerPedido = document.getElementById("fazer-pedido");
const carrinho = [
    {
        nome: "Máscara com elástico ",
        preco: 29.90,
        precoPix: 27,
        imagem: "img/mascaracomelastico.png",
        id: 1
    },
    {
        nome: "Máscara com elástico ",
        preco: 29.90,
        precoPix: 27,
        imagem: "img/mascaracomelastico.png",
        id: 2
    }
]
var mensagem = `Olá, tenho interesse nos seguintes itens: `;
carrinho.forEach(item => {
    mensagem = mensagem + "%0a→ " + 1 + " unidade do produto " + item.nome;
})

btnFazerPedido.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=3497743681&text=" + mensagem);
})



const ulCarrinho = document.getElementById("carrinho-lista");
carrinho.forEach(produto => {
    const liProduto = document.createElement("li");
    liProduto.className = "carrinho-item";
    liProduto.innerHTML = `
    <img src=${produto.imagem} alt=${produto.nome}>
    <div class="carrinho-item-text">
        <h3>
            ${produto.nome}
        </h3>
        <span>R$ ${produto.preco}</span>
        <div>
            <a href="#" id="carrinho-item-menos">-</a>
            <input type="text" value=1>
            <a href="#" id="carrinho-item-mais">+</a>
        </div>
    </div>
`
const barra = document.createElement("hr");
    ulCarrinho.appendChild(liProduto);
    ulCarrinho.appendChild(barra)

})



/* ADICIONA AO CARRINHO */
const qtdCarrinho = document.getElementById("qtd-carrinho");
window.localStorage.setItem("qtdCarrinho", carrinho.length);
qtdCarrinho.innerText = carrinho.length;