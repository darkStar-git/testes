//código do JSON carts (html,css e js) feito por: José

// Fonte de dados
let url = 'https://fakestoreapi.com/carts'

// Request
let resp = await fetch(url)

// Tratamento da resposta
let carts = await resp.json()

console.log(carts)

// Container dos cards
let container = document.querySelector('.container-cards')

// Loop para criar os cards
for (let i = 0; i < carts.length; i++) {

    // Criando o card
    let card = document.createElement('div')
    card.classList.add('card-carrinho')

    // Criando a lista de produtos
    let produtos = ''

    for (let j = 0; j < carts[i].products.length; j++) {

        produtos += `
            <p>
                Produto: ${carts[i].products[j].productId}
                | Quantidade: ${carts[i].products[j].quantity}
            </p>
        `
    }


    // Exibindo a data
    let data = new Date(carts[i].date)

    // Conteúdo do card
    card.innerHTML = `
        <span class="id-carrinho">
            ID: ${carts[i].id}
        </span>

        <h2 class="nome-carrinho">
            Carrinho #${carts[i].id}
        </h2>

        <p class="usuario-carrinho">
            Usuário: ${carts[i].userId}
        </p>

        <p class="data-carrinho">
            Data: ${data}
        </p>

        <div class="secao-produtos">

            <h3>Produtos</h3>
            ${produtos}

        </div>
    `

    // Adicionando o card ao container
    container.appendChild(card)
}

console.log("JS FUNCIONOU")