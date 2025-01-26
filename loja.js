// document.addEventListener("DOMContentLoaded", () => {
//     const comprarBotoes = document.querySelectorAll("#btn-comprar");

//     comprarBotoes.forEach((botao) => {
//         botao.addEventListener("click", () => {
//             const item = botao.closest(".config-store-itens"); // Seleciona o elemento do produto
//             const nome = item.querySelector("#iten-name-h4").textContent.trim();
//             const preco = item.querySelector("#iten-preco-p").textContent.trim();

//             // Cria o objeto do produto
//             const produto = { nome, preco };

//             // Recupera o carrinho atual do localStorage
//             let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//             carrinho.push(produto);

//             // Salva o carrinho atualizado no localStorage
//             localStorage.setItem("carrinho", JSON.stringify(carrinho));

//             alert(`${nome} foi adicionado ao carrinho!`);
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const comprarBotoes = document.querySelectorAll("#btn-add-car");
    const carrinhoIcon = document.querySelector(".li-car-icon");

    // Função para atualizar a notificação do carrinho
    function atualizarNotificacaoCarrinho() {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        let notificacao = carrinhoIcon.querySelector(".carrinho-notificacao");

        if (!notificacao) {
            notificacao = document.createElement("span");
            notificacao.classList.add("carrinho-notificacao");
            carrinhoIcon.appendChild(notificacao);
        }

        notificacao.textContent = carrinho.length;
        notificacao.style.display = carrinho.length > 0 ? "block" : "none";
    }

    // Inicializa a notificação ao carregar a página
    

    // atualizar Notificacao do carrinho 
    comprarBotoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            let notificacao = carrinhoIcon.querySelector(".carrinho-notificacao");

            if (!notificacao) {
                notificacao = document.createElement("span");
                notificacao.classList.add("carrinho-notificacao");
                carrinhoIcon.appendChild(notificacao);
            }
    
            notificacao.textContent = carrinho.length;
            notificacao.style.display = carrinho.length > 0 ? "block" : "none";
        });
    });
    atualizarNotificacaoCarrinho();
});
