// Fonte de dados
let url = 'https://fakestoreapi.com/users'

// Request
let resp = await fetch(url)

// Tratamento da resposta
let users = await resp.json()

console.log(users)

const body = document.querySelector('body')

//barra de navegação para facilitar transição entre páginas
let barraNav = document.createElement('nav')
barraNav.classList.add('navbar')
barraNav.innerHTML = `
    <a href="./carrinhos.html">Carrinhos</a>
    <a href="./users.html">Usuários</a>
    <a href="./products.html">Produtos</a>
`
body.appendChild(barraNav)

//título da página
let titulo = document.createElement('h1')
titulo.textContent = 'Usuários'
titulo.classList.add('titulo-pagina')
body.appendChild(titulo)

// Container dos cards
let container = document.createElement('div')
container.classList.add('container-cards')

for (let i = 0; i < users.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.id = `card-${i + 1}`

    // Endereço do usuário
    let endereco = `
        <p class="info-card">
            ${users[i].address.street}, ${users[i].address.number}
        </p>
        <p class="info-card">
           ${users[i].address.city} - CEP ${users[i].address.zipcode}
        </p>
        <p class="info-card">
            Lat: ${users[i].address.geolocation.lat},
            Long: ${users[i].address.geolocation.long}
        </p>
    `

    card.innerHTML = `
        <span class="id-card">
            ${users[i].id}
        </span>
        <h2 class="nome-card">
            ${users[i].name.firstname} ${users[i].name.lastname}
        </h2>
        
        <p class="info-secundaria">
            @${users[i].username}
        </p>

        <p class="info-card">
            Email: ${users[i].email}
        </p>

        <p class="info-card">
            Telefone: ${users[i].phone}
        </p>
        
        <div class="secao-card">
            ${endereco}
        </div>
    `

    container.appendChild(card)
}
body.appendChild(container)

console.log("JS FUNCIONOU")

