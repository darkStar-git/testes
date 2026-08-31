//código do JSON carts (html,css e js) feito por: José

// Fonte de dados
let url = 'https://fakestoreapi.com/carts'

// Request
let resp = await fetch(url)

// Tratamento da resposta
let carts = await resp.json()

console.log(carts)
const body = document.querySelector('body')

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


// Loop para criar os cards
for (let i = 0; i < carts.length; i++) {

    // Criando o card
    let card = document.createElement('div')
    card.classList.add('card')

    // Criando a lista de produtos
    let produtos = ''

    for (let j = 0; j < carts[i].products.length; j++) {

        produtos += `
            <p class="info-card">
                Produto: ${carts[i].products[j].productId}
                | Quantidade: ${carts[i].products[j].quantity}
            </p>
        `
    }


    // Exibindo a data
    let data = new Date(carts[i].date)
    data.toLocaleString('pt-BR')

    // Conteúdo do card
    card.innerHTML = `
        <span class="id-card">
            ID: ${carts[i].id}
        </span>

        <h2 class="nome-card">
            Carrinho #${carts[i].id}
        </h2>

        <p class="info-secundaria">
            Usuário: ${carts[i].userId}
        </p>

        <p class="info-card">
            <strong>Data:</strong> ${data}
        </p>

        <div class="secao-card">

            <h4 style="color: var(--grayed-blue); margin-bottom: 5px;">Produtos</h4>
            ${produtos}

        </div>
    `

    // Adicionando o card ao container
    container.appendChild(card)
}

body.appendChild(container)
console.log("JS FUNCIONOU")