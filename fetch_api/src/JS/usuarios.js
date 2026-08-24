//código do JSON users (html,css e js) feito por: José

// Fonte de dados
let url = 'https://fakestoreapi.com/users'

// Request
let resp = await fetch(url)

// Tratamento da resposta
let users = await resp.json()

console.log(users)

// Container dos cards
let container = document.querySelector('.container-cards')

// Loop para criar os cards
for (let i = 0; i < users.length; i++) {

    // Criando o card
    let card = document.createElement('div')
    card.classList.add('card-usuario')

    // Criando a lista de produtos
    let endereco = ''
    endereco.classList.add = '.infos-endereco'
    for (let j = 0; j < users[i].adress.length; j++) {

        endereco += `
            <p>
                ${users[i].address.street}, nº ${users[i].address.number}\n
                ${users[i].address.city} - CEP: ${users[i].address.zipcode}\n
                GPS: ${users[i].adress[j].lat}, ${users[i].adress[j].long}
            </p>
        `
        
    }

    card.querySelector('.id-usuario').textContent = `ID: ${users[i].id}`

    // Nome e Login
    card.querySelector('.nome-usuario').textContent = `${users[i].name.firstname} ${users[i].name.lastname}`
    card.querySelector('.login-usuario').textContent = `@${users[i].username}`

    // Contatos e Autenticação
    card.querySelector('.email-usuario').textContent = `E-mail: ${users[i].email}`
    card.querySelector('.senha-usuario').textContent = `Senha: ${users[i].password}`
    card.querySelector('.telefone-usuario').textContent = `Tel: ${users[i].phone}`

    // Endereço completo
    card.querySelector('.rua-numero-usuario').textContent = ``
    card.querySelector('.cidade-cep-usuario').textContent = ``
    card.querySelector('.geolocalizacao-usuario').textContent = `GPS: (${users[i].address.geolocation.lat}, ${users[i].address.geolocation.long})`

    // Exibindo a data
    let data = new Date(users[i].date)

    // Conteúdo do card
    card.innerHTML = `
        <span class="id-usuario">
            ID: ${users[i].id}
        </span>

                

        <div class="secao-endereco">
            ${endereco}
        </div>
    `

    // Adicionando o card ao container
    container.appendChild(card)
}

console.log("JS FUNCIONOU")

