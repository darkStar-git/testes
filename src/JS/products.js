import { criarModalProduto } from './modalProdutos.js';

// Fonte de dados
let url = 'https://fakestoreapi.com/products'

// Request
let resp = await fetch(url)

// Tratamento da resposta
let products = await resp.json()

console.log(products)
const body = document.querySelector('body')

const abrirModal = criarModalProduto(body)

//barra de navegação para facilitar transição entre páginas
let barraNav = document.createElement('nav')
barraNav.classList.add('navbar')
barraNav.innerHTML = `
    <a href="./carrinhos.html">Carrinhos</a>
    <a href="./index.html">Usuários</a>
    <a href="./products.html">Produtos</a>
`
body.appendChild(barraNav)

//título da página
let titulo = document.createElement('h1')
titulo.textContent = 'Carrinhos de Compras'
titulo.classList.add('titulo-pagina')
body.appendChild(titulo)

// Container dos cards
let container = document.createElement('div')
container.classList.add('container-cards')

// CRIAÇÃO DOS CARDS

for (let i = 0; i < products.length; i++) {

    const card = document.createElement('div')
    card.classList.add(
        'card',
        'card-produto'
    )

    card.innerHTML = `

                <div class="imagem-produto">

                    <img
                        src="${products[i].image}"
                        alt="${products[i].title}"
                    >

                    <span class="id-card">
                        ID: ${products[i].id}
                    </span>

                </div>


                <div class="conteudo-produto">

                    <p class="categoria-produto">
                        ${products[i].category}
                    </p>


                    <h2 class="nome-card nome-produto">
                        ${products[i].title}
                    </h2>


                    <p class="preco-produto">
                        $${Number(products[i].price).toFixed(2)}
                    </p>


                    <div class="avaliacao-produto">

                        <span>
                            ★ ${products[i].rating.rate}
                        </span>

                        <span>
                            ${products[i].rating.count} avaliações
                        </span>

                    </div>

                </div>
            `

    card.addEventListener('click', () => {

        abrirModal(products[i]);

    });

    container.appendChild(card)
}


// Adiciona os cards na página
body.appendChild(container)
