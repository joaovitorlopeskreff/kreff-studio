





//----------------------------------------------logica para adicionar mais opicoes na barra de navegação em jogos--------------------------------------- //





document.addEventListener("DOMContentLoaded", () => {
    const jogosLink = document.querySelector(".jogos");
    const subMenu = document.querySelector(".sub-menu");
    
    // Esconde o submenu imediatamente antes que o DOM seja totalmente carregado
    subMenu.style.cssText = "display: none !important";

    jogosLink.addEventListener("click", (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Toggle da visibilidade do submenu
        if (subMenu.style.display === "block") {
            subMenu.style.cssText = "display: none !important";
        } else {
            subMenu.style.cssText = "display: block !important";
        }
        // // Toggle da rotação e posição do ícone de seta
        // const jogosElement = document.querySelector('.jogos::after');
        // if (subMenu.style.display === "block") {
        //     jogosElement.style.setProperty('--after-rotation', 'rotate(0deg)');
        //     jogosElement.style.setProperty('--after-position', 'left');
        // } else {
        //     jogosElement.style.setProperty('--after-rotation', 'rotate(180deg)');
        //     jogosElement.style.setProperty('--after-position', 'right');
        // }
    });


    // Fecha o submenu quando clicar fora dele
    document.addEventListener("click", (e) => {
        if (!jogosLink.contains(e.target) && !subMenu.contains(e.target)) {
            subMenu.style.cssText = "display: none !important";
        }
    });
    // Esconde o submenu usando múltiplas abordagens para garantir que fique oculto
    subMenu.style.cssText = "display: none !important; visibility: hidden !important; opacity: 0 !important";
    subMenu.classList.add('hidden');
    
    // Aplica o mesmo no carregamento da janela e após o DOM estar pronto
    window.onload = () => {
        requestAnimationFrame(() => {
            subMenu.style.cssText = "display: none !important; visibility: hidden !important; opacity: 0 !important";
            subMenu.classList.add('hidden');
        });
    }
});














//----------------------------------------------logica para adicionar produtos ao carrinho--------------------------------------- //



document.addEventListener("DOMContentLoaded", () => {
    const comprarBotoes = document.querySelectorAll("#btn-comprar");

    comprarBotoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            const item = botao.closest(".config-store-itens"); // Seleciona o elemento do produto
            const nome = item.querySelector("#iten-name-h4").textContent.trim();
            const preco = item.querySelector("#iten-preco-p").textContent.trim();

            // Cria o objeto do produto
            const produto = { nome, preco };

            // Recupera o carrinho atual do localStorage
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.push(produto);

            // Salva o carrinho atualizado no localStorage
            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            alert(`${nome} foi adicionado ao carrinho!`);
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const addCarButtons = document.querySelectorAll("#btn-add-car");

    addCarButtons.forEach((botao) => {
        botao.addEventListener("click", () => {
            const item = botao.closest(".config-store-itens"); // Seleciona o elemento do produto
            const nome = item.querySelector("#iten-name-h4").textContent.trim();
            const preco = item.querySelector("#iten-preco-p").textContent.trim();

            // Cria o objeto do produto
            const produto = { nome, preco };

            // Recupera o carrinho atual do localStorage
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.push(produto);

            // Salva o carrinho atualizado no localStorage
            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            // alert(`${nome} foi adicionado ao carrinho!`);
        });
    });
});








//--------------------------------------logica para adicionar notificacao ao incone carrinho------------------------------------------- //



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






//-------------------------------------------Logica para abrir a tela do login em uma janela popup-------------------------------------------------------- //

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login");
    
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Define as dimensões e características da janela popup
        const width = 600;
        const height = 800;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;
        const features = `width=${width},height=${height},left=${left},top=${top},resizable=no`;
        
        // Abre o login.html em uma nova janela popup
        window.open("/kreff-studio/login.html", "LoginPopup", features);
    });
});












