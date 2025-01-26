document.addEventListener("DOMContentLoaded", () => {
    const carrinhoContainer = document.getElementById("itens-add-carrinho");


    // Recupera os itens do carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach((produto) => {
        // Cria os elementos para exibir o produto
        const itemDiv = document.createElement("div");
        itemDiv.className = "pedido-add-carrinho";

        itemDiv.innerHTML = `
            <div class="itens-add-carrinho"     id="itens-add-carrinho">
                <div class="linha-horizontal-itens-add-carrinho" id="linha-horizontal-itens-add-carrinho"></div>
                <div class="pedido-add-carrinho" id="pedido-add-carrinho">
                    <div class="iten-resumo-information" id="iten-resumo-information">
                        <div class="image-iten-carinho" id="image-iten-carinho"></div>
                        <div class="information-iten-resumo">
                            <h2 id="titulo-do-produto-a">${produto.nome}</h2>
                            <p>INformcoes gerais do produto</p>
                            <div class="container-quantidade" id="container-quantidade">
                                <p>quantidade: <p id="quantidade">${produto.quantidade} </p></p>
                            </div>
                            <div class="remove-or-buyaffter" id="remove-or-buyaffter">
                                <button class="remove-itens" id="remove-itens">Remover</button>
                                <button class="buy-affter"id="buy-affter" onclick="window.location.href='/kreff-studio/index.html'">Salvar pra mais tarde</button>
                            </div>
                        </div>
                    </div>
                <div id="preco-information" class="preco-information">${produto.preco}</div>
            </div>

        `;

        carrinhoContainer.appendChild(itemDiv);


        // Adiciona funcionalidade ao botão de remover
        itemDiv.querySelector(".remove-itens").addEventListener("click", () => {
            const index = carrinho.indexOf(produto);


            ;
            if (index > -1) {
                carrinho.splice(index, 1);
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                itemDiv.remove();
                alert(`${produto.nome} foi removido do carrinho.`);

            }
            calcularTotal();

        });
        const liparCarrinho = document.getElementById("btn-limpar-carrinho");

        liparCarrinho.addEventListener("click", () => {
            carrinho.length = 0;
            localStorage.removeItem("carrinho");
            carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
            atualizarExibicaoCarrinho();
            calcularTotal();

        });


    });

});


// Função para calcular o total do carrinho

function calcularTotal() {
    // Pega todos os elementos com a classe preco-information
    const precos = document.querySelectorAll('.preco-information');
    let total = 0;

    // Soma todos os preços
    precos.forEach(preco => {
        // Remove "R$ " e converte para número
        const valor = parseFloat(preco.textContent.replace('R$ ', '').replace(',', '.'));
        if (!isNaN(valor)) {
            total += valor;
        }
    });

    // Atualiza o elemento com a classe tt-total
    const totalElement = document.querySelector('.tt-total');
    if (totalElement) {
        totalElement.textContent = `R$ ${total.toFixed(2)}`;

    }
    

}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', calcularTotal);


// Função para atualizar a quantidade de itens
function atualizarQuantidade() {
    const itensCarrinho = document.querySelectorAll('.pedido-add-carrinho');

    itensCarrinho.forEach(item => {
        const quantidadeElement = item.querySelector('#quantidade');
        if (quantidadeElement) {
            // Pega o produto do localStorage
            const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            const nomeProduto = item.querySelector('h2').textContent;

            // Conta quantas vezes o produto aparece no carrinho
            const quantidade = carrinho.filter(produto => produto.nome === nomeProduto).length;

            // Atualiza o elemento de quantidade
            quantidadeElement.textContent = quantidade;
            
        }
    });
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', atualizarQuantidade);

// Atualiza a quantidade sempre que o carrinho for modificado
const quantidadeObserver = new MutationObserver(atualizarQuantidade);
quantidadeObserver.observe(document.getElementById('itens-add-carrinho'), {
    childList: true,
    subtree: true
});

// Função para calcular e mostrar o total de itens
function calcularTotalItens() {
    const quantidadeElements = document.querySelectorAll('#quantidade');
    let totalItens = 0;

    // Soma as quantidades de todos os itens
    quantidadeElements.forEach(element => {
        totalItens += parseInt(element.textContent) || 0;
    });

    // Atualiza o elemento que mostra o total de itens
    const totalItensElement = document.querySelector('.itens-total-p');
    if (totalItensElement) {
        totalItensElement.textContent = totalItens;
    }
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', calcularTotalItens);

// Atualiza o total sempre que houver mudanças no carrinho
const totalObserver = new MutationObserver(calcularTotalItens);
totalObserver.observe(document.getElementById('itens-add-carrinho'), {
    childList: true,
    subtree: true
});
// Função para atualizar a exibição do carrinho
function atualizarExibicaoCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const itensContainer = document.getElementById('itens-add-carrinho');

    if (!itensContainer) return;

    // Limpa o container
    itensContainer.innerHTML = '';

    // Agrupa os itens por nome e soma suas quantidades
    const itensAgrupados = carrinho.reduce((acc, item) => {
        if (!acc[item.nome]) {
            acc[item.nome] = {
                nome: item.nome,
                preco: item.preco,
                quantidade: 1
            };
        } else {
            acc[item.nome].quantidade += 1;
        }
        return acc;
    }, {});

    // Cria elementos para cada item agrupado
    Object.values(itensAgrupados).forEach(item => {
        const div = document.createElement('div');
        div.className = 'pedido-add-carrinho';
        div.innerHTML = `
            <div class="itens-add-carrinho"     id="itens-add-carrinho">
                <div class="linha-horizontal-itens-add-carrinho" id="linha-horizontal-itens-add-carrinho"></div>
                <div class="pedido-add-carrinho" id="pedido-add-carrinho">
                    <div class="iten-resumo-information" id="iten-resumo-information">
                        <div class="image-iten-carinho" id="image-iten-carinho"></div>
                        <div class="information-iten-resumo">
                            <h2 id="titulo-do-produto-a">${item.nome}</h2>
                            <p>INformcoes gerais do produto</p>
                            <div class="container-quantidade" id="container-quantidade">
                                <p>quantidade: <p id="quantidade">${item.quantidade} </p></p>
                            </div>
                            <div class="remove-or-buyaffter" id="remove-or-buyaffter">
                                <button class="remove-itens" id="remove-itens">Remover</button>
                                <button class="buy-affter"id="buy-affter" onclick="window.location.href='/kreff-studio/index.html'">Salvar pra mais tarde</button>
                            </div>
                        </div>
                    </div>
                <div id="preco-information" class="preco-information">${item.preco}</div>
            </div>
        `;
        itensContainer.appendChild(div);


    



    });

    
    calcularTotalItens();
}

// Sobrescreve o evento DOMContentLoaded anterior
document.addEventListener('DOMContentLoaded', () => {
    atualizarExibicaoCarrinho();

    // Adiciona listener para o botão de limpar carrinho
    const btnLimparCarrinho = document.getElementById('btn-limpar-carrinho');
    if (btnLimparCarrinho) {
        btnLimparCarrinho.addEventListener('click', () => {
            localStorage.removeItem('carrinho');
            atualizarExibicaoCarrinho();
        });
    }

});

// Adiciona listener para o botão de limpar carrinho 


// Adiciona listener para o botão de remover
document.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('remove-itens')) {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const itemDiv = e.target.closest('.pedido-add-carrinho');
        const nomeProduto = itemDiv.querySelector('#titulo-do-produto-a').textContent;
   
        
        
        // Encontra e remove o item do carrinho
        const index = carrinho.findIndex(item => item.nome === nomeProduto);
        if (index > -1) {
            carrinho.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            
            
            // Remove o elemento da interface
            itemDiv.remove();
            
            // Atualiza os totais
            calcularTotal();
            calcularTotalItens();
            atualizarExibicaoCarrinho();
   
            
            
            // Verifica se o carrinho está vazio
            if (carrinho.length === 0) {
                const carrinhoContainer = document.getElementById('itens-add-carrinho');
                carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
                
            }
            
        }
        
    }
    // Recalcula e atualiza o total baseado na quantidade
    const totalElement = document.querySelector('.tt-total');
    if (totalElement) {
        const itensCarrinho = document.querySelectorAll('.pedido-add-carrinho');
        let novoTotal = 0;

        itensCarrinho.forEach(item => {
            const quantidade = parseInt(item.querySelector('#quantidade').textContent) || 0;
            const precoTexto = item.querySelector('.preco-information').textContent;
            const precoUnitario = parseFloat(precoTexto.replace('R$ ', '').replace(',', '.'));
            
            if (!isNaN(precoUnitario)) {
                novoTotal = precoUnitario * quantidade;
            }
        });

        totalElement.textContent = `R$ ${novoTotal.toFixed(2)}`;
    }
    
    
    
});

