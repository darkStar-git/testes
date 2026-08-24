//código do JSON users (html,css e js) feito por: Carlos

// fonte de dados
let url = 'https://fakestoreapi.com/users'

// request   |  promise
let resp = await fetch(url)

// tratamento da resposta
let users = await resp.json()
console.log(users)


// loop para preencher oscards 
for (let i = 0; i < users.length; i++) {

    let card = document.querySelector(`#card-${i + 1}`)

    if (card && users[i]) {
        // ID
        card.querySelector('.id-usuario').textContent = `ID: ${users[i].id}`

        // Nome e Login
        card.querySelector('.nome-usuario').textContent = `${users[i].name.firstname} ${users[i].name.lastname}`
        card.querySelector('.login-usuario').textContent = `@${users[i].username}`

        // Contatos e Autenticação
        card.querySelector('.email-usuario').textContent = `E-mail: ${users[i].email}`
        card.querySelector('.senha-usuario').textContent = `Senha: ${users[i].password}`
        card.querySelector('.telefone-usuario').textContent = `Tel: ${users[i].phone}`

        // Endereço completo
        card.querySelector('.rua-numero-usuario').textContent = `${users[i].address.street}, nº ${users[i].address.number}`
        card.querySelector('.cidade-cep-usuario').textContent = `${users[i].address.city} - CEP: ${users[i].address.zipcode}`
        card.querySelector('.geolocalizacao-usuario').textContent = `GPS: (${users[i].address.geolocation.lat}, ${users[i].address.geolocation.long})`
    }
}