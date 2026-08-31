export function criarModalProduto(body) {

    const modal = document.createElement('div');

    modal.classList.add('modal-produto');

    modal.innerHTML = `
        <div class="conteudo-modal">

            <button class="fechar-modal">&times;</button>

            <div class="imagem-modal">
                <img class="modal-img" src="" alt="">
            </div>

            <div class="informacoes-modal">

                <p class="modal-categoria"></p>

                <h2 class="modal-titulo"></h2>

                <p class="modal-descricao"></p>

                <p class="modal-preco"></p>

                <div class="modal-avaliacao">
                    <span class="modal-nota"></span>
                    <span class="modal-contagem"></span>
                </div>

            </div>

        </div>
    `;

    body.appendChild(modal);

    // Elementos da modal
    const fechar = modal.querySelector('.fechar-modal');
    const imagem = modal.querySelector('.modal-img');
    const categoria = modal.querySelector('.modal-categoria');
    const titulo = modal.querySelector('.modal-titulo');
    const descricao = modal.querySelector('.modal-descricao');
    const preco = modal.querySelector('.modal-preco');
    const nota = modal.querySelector('.modal-nota');
    const contagem = modal.querySelector('.modal-contagem');

    // Função para abrir a modal
    function abrir(produto) {

        imagem.src = produto.image;
        imagem.alt = produto.title;

        categoria.textContent = produto.category;
        titulo.textContent = produto.title;
        descricao.textContent = produto.description;

        preco.textContent = `$${Number(produto.price).toFixed(2)}`;

        nota.textContent = `★ ${produto.rating.rate}`;
        contagem.textContent = `${produto.rating.count} avaliações`;

        modal.classList.add('ativo');
    }

    // Fechar pelo X
    fechar.addEventListener('click', () => {
        modal.classList.remove('ativo');
    });

    // Fechar clicando fora
    modal.addEventListener('click', (event) => {

        if (event.target === modal) {
            modal.classList.remove('ativo');
        }

    });

    // Fechar com ESC
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {
            modal.classList.remove('ativo');
        }

    });

    return abrir;
}