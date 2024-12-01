/* ********************************************************************************* */
/* SCRIPT DO BANNER*/
let contador = 1;
const totalImagens = 3;
const delay = 4000;

// document.getElementById("radio1").checked = True;

setInterval(function () {
    proximaImagem();
}, delay)

function proximaImagem() {
    contador++;
    if (contador > totalImagens) {
        contador = 1;
    }
    document.getElementById("radio" + contador).checked = true;
}


/* ********************************************************************************* */
/* SCRIPT DO ENTRAR*/
document.addEventListener("DOMContentLoaded", () => {
    const botaoVerificar = document.getElementById("verificarBtn");
    const emailVerificar = document.getElementById("verificarEmail");
    const senhaVerificar = document.getElementById("verificarSenha");
    
    if (botaoVerificar) {
        botaoVerificar.addEventListener("click", () => {
            const emailSalvo = localStorage.getItem("emailUsuario");
            const senhaSalva = localStorage.getItem("senhaUsuario");
            
            if (!emailSalvo || !senhaSalva) {
                alert("Os dados de e-mail ou senha não foram encontrados no localStorage.");
                return;
            }
            
            const email2 = emailVerificar.value.trim();
            const senha2 = senhaVerificar.value.trim();
            
            if (emailSalvo.trim() === email2 && senhaSalva.trim() === senha2) {
                const nomeSalvo = localStorage.getItem("nomeUsuario") || "Usuário";
                alert(`Bem-vindo/a ${nomeSalvo}`);
            } else {
                alert("Perfil não encontrado");
            }
        });
    } else {
        console.error("O botão verificar não foi encontrado no DOM.");
    }
});

/* ********************************************************************************* */
/* SCRIPT DA CAIXA DE OPÇÕES DE FOTO DE PERFIL */
const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body')
        body.classList.toggle('active')
    })
})

/* ********************************************************************************* */
/* SCRIPT DA CAIXA DE OPÇÕES DE FOTO DE PERFIL */
function apertar() {
    // alert("apertoooooooou") // teste pra ver se o botao funciona 
    Swal.fire({
        title: "COMPRADO!",
        text: "Você comprou sua novel com sucesso",
        icon: "success"
    });
}

/* ********************************************************************************* */
/* SCRIPT DAS NOVELS RELACIONADAS 1 */
const novelId = localStorage.getItem("novelIdSelecionado");
if (novelId >= 1 && novelId <= 7) {
    function carregando() {
        fetch('novels.json')
        .then(response => response.json())
            .then(novel => {
                const novels = novel.lancamentos;
                const container = document.querySelector("#novelsContainer");
                
                novels.map(data => {
                    // Verifica se o ID do item é igual ao ID armazenado no localStorage
                    if (data.id != novelId) {
                        const card = document.createElement("div");
                        card.classList.add("card2");
                        
                        const link = document.createElement("a");
                        link.href = novel.url || "venda.html";
                        link.setAttribute("data-id", data.id); // Adiciona o atributo data-id com o id do item
                        
                        const img = document.createElement("img");
                        img.src = data.imagem;
                        img.alt = data.nome;
                        
                        const titulo = document.createElement("h3");
                        titulo.textContent = data.nome;
                        
                        link.appendChild(img);
                        link.appendChild(titulo);
                        card.appendChild(link);
                        container.appendChild(card);
                    }
                    
                });
                // Adiciona event listeners aos links após renderizar todos os elementos
                container.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const selectedId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", selectedId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${selectedId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            })
        }
        
        carregando();
    }
/* ********************************************************************************* */
    /* SCRIPT DAS NOVELS RELACIONADAS 2 */
    
    else if (novelId >= 8 && novelId <= 15) {
        function carregando() {
            fetch('novels.json')
            .then(response => response.json())
            .then(novel => {
                const novels = novel.portugues
                const container = document.querySelector("#novelsContainer")
                
                novels.map(data => {
                    // Verifica se o ID do item é igual ao ID armazenado no localStorage
                    if (data.id != novelId) {
                        const card = document.createElement("div");
                        card.classList.add("card2");
                        
                        const link = document.createElement("a");
                        link.href = novel.url || "venda.html";
                        link.setAttribute("data-id", data.id); // Adiciona o atributo data-id com o id do item

                        const img = document.createElement("img");
                        img.src = data.imagem;
                        img.alt = data.nome;
                        
                        const titulo = document.createElement("h3");
                        titulo.textContent = data.nome;
                        
                        link.appendChild(img);
                        link.appendChild(titulo);
                        card.appendChild(link);
                        container.appendChild(card);
                    }
                    
                });
                // Adiciona event listeners aos links após renderizar todos os elementos
                container.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const selectedId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", selectedId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${selectedId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            })
    }
    carregando()
}
/* ********************************************************************************* */
/* SCRIPT DAS NOVELS RELACIONADAS 3 */
else if (novelId >= 16 && novelId <= 23) {
    function carregando() {
        fetch('novels.json')
        .then(response => response.json())
        .then(novel => {
            const novels = novel.populares
            const container = document.querySelector("#novelsContainer")
            
            novels.map(data => {
                // Verifica se o ID do item é igual ao ID armazenado no localStorage
                if (data.id != novelId) {
                    const card = document.createElement("div");
                    card.classList.add("card2");
                    
                    const link = document.createElement("a");
                    link.href = novel.url || "venda.html";
                    link.setAttribute("data-id", data.id); // Adiciona o atributo data-id com o id do item
                    
                    const img = document.createElement("img");
                    img.src = data.imagem;
                    img.alt = data.nome;
                    
                        const titulo = document.createElement("h3");
                        titulo.textContent = data.nome;
                        
                        link.appendChild(img);
                        link.appendChild(titulo);
                        card.appendChild(link);
                        container.appendChild(card);
                    }
                    
                });
                // Adiciona event listeners aos links após renderizar todos os elementos
                container.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const selectedId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", selectedId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${selectedId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            })
        }
        carregando()
    }
/* ********************************************************************************* */
/* SCRIPT DAS NOVELS RELACIONADAS 4 */
else if (novelId >= 24 && novelId <= 30) {
    function carregando() {
        fetch('novels.json')
        .then(response => response.json())
        .then(novel => {
            const novels = novel.promocoes
            const container = document.querySelector("#novelsContainer")
            
            novels.map(data => {
                // Verifica se o ID do item é igual ao ID armazenado no localStorage
                if (data.id != novelId) {
                    const card = document.createElement("div");
                    card.classList.add("card2");
                    
                    const link = document.createElement("a");
                    link.href = novel.url || "venda.html";
                    link.setAttribute("data-id", data.id); // Adiciona o atributo data-id com o id do item
                    
                        const img = document.createElement("img");
                        img.src = data.imagem;
                        img.alt = data.nome;
                        
                        const titulo = document.createElement("h3");
                        titulo.textContent = data.nome;
                        
                        link.appendChild(img);
                        link.appendChild(titulo);
                        card.appendChild(link);
                        container.appendChild(card);
                    }
                    
                });
                // Adiciona event listeners aos links após renderizar todos os elementos
                container.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const selectedId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", selectedId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${selectedId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            })
        }
        carregando()
    }

/* ********************************************************************************* */
/* SCRIPT DO DARK MODE*/
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
// let button = document.querySelector('button')

// Elemento do botão
const toggleDarkMode = document.getElementById('toggle-dark-mode');

// Função para alternar o modo escuro
function toggleDarkModeClass() {
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
    main.classList.toggle('dark');
    footer.classList.toggle('dark');
    // button.classList.toggle('dark');
    
    
    // Salvar preferência no Local Storage
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Adiciona evento de clique no botão
toggleDarkMode.addEventListener('click', toggleDarkModeClass);

// Verifica o Local Storage ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    const toggleButton = document.getElementById('toggle-dark-mode'); // Seleciona o botão
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark');
        header.classList.toggle('dark');
        main.classList.toggle('dark');
        footer.classList.toggle('dark');
        // button.classList.toggle('dark');
        
        // ****** Várias classes ******
        // Seleciona todos os h2 dentro das tags a
        const h2Elements = document.querySelectorAll('a h2');
        
        // Adiciona a classe "dark" em cada elemento h2
        h2Elements.forEach(function (h2) {
            h2.classList.toggle('dark');
            
            const labelElements = document.querySelectorAll('label');
            
            // Adiciona a classe "dark" em cada elemento label
            labelElements.forEach(function (label) {
                label.classList.toggle('dark');
            });
        });
        
        const divElements = document.querySelectorAll('div');
        
        // Adiciona a classe "dark" em cada elemento div
        divElements.forEach(function (div) {
            div.classList.toggle('dark');
        });
        
        // Atualiza o emote para lua 🌙
if (toggleButton) {
    toggleButton.textContent = '🌙';
}
} else {
    // Atualiza o emote para sol ☀️ caso o dark mode não esteja ativo
    if (toggleButton) {
        toggleButton.textContent = '☀️';
    }
}

/* ********************************************************************************* */
/* SCRIPT DO CARROSSEL DE NOVELS 1(PROMOÇÕES)*/
let inicioAtual = 0;
const itensMostrados = 3;

function carregar() {
    fetch('novels.json') // Caminho para o JSON
    .then(response => response.json())
    .then(data => {
        const populares = data.populares; // Acessa a seção 'populares' do JSON
            const container = document.querySelector("#novels-container");
            
            function renderCarousel(inicio) {
                container.innerHTML = ""; // Limpa o container antes de renderizar
                
                // Renderiza os 3 itens principais e adiciona o item anterior e o próximo parcialmente visíveis
                for (let i = -1; i <= itensMostrados; i++) {
                    const index = (inicio + i + populares.length) % populares.length; // Índice circular
                    const novel = populares[index]; // Acessa os itens de 'populares'
                    
                    const card = document.createElement("div");
                    card.classList.add("card");
                    
                    if (i === -1)
                    card.classList.add("anterior");
                    else if (i === itensMostrados)
                    card.classList.add("proximo");
                    else if (i === 0)
                        card.classList.add("current");
                        
                        const link = document.createElement("a");
                        link.href = novel.url || "venda.html";
                        link.setAttribute("data-id", novel.id); // Adiciona o atributo data-id com o id do item
                        
                        const img = document.createElement("img");
                        img.src = novel.imagem;
                        img.alt = novel.nome;
                        
                        const titulo = document.createElement("h3");
                        titulo.textContent = novel.nome;
                        
                        link.appendChild(img);
                        link.appendChild(titulo);
                        card.appendChild(link);
                        container.appendChild(card);
                    }
                    
                    // Adiciona event listeners aos links
                    container.querySelectorAll("a").forEach(link => {
                        link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const novelId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", novelId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${novelId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            }
            
            renderCarousel(inicioAtual);
            
            function proximo() {
                inicioAtual = (inicioAtual + 1) % populares.length;
                renderCarousel(inicioAtual);
            }
            
            function anterior() {
                inicioAtual = (inicioAtual - 1 + populares.length) % populares.length;
                renderCarousel(inicioAtual);
            }
            
            document.getElementById("proximo").addEventListener("click", proximo);
            document.getElementById("anterior").addEventListener("click", anterior);
        })
        .catch(error => console.error("Erro ao carregar JSON:", error));
    }
    carregar();
    /* ********************************************************************************* */
    /* SCRIPT DO CARROSSEL DE NOVELS 2*/
    let inicioAtual2 = 0;
    const itensMostrados2 = 3;
    
    function carregar2() {
        fetch('novels.json') // Caminho para o JSON
        .then(response => response.json())
        .then(data => {
            const lancamentos = data.lancamentos; // Acessa a seção 'lancamentos' do JSON
            const container = document.querySelector("#novels-container2");
            
            function renderCarousel(inicio) {
                container.innerHTML = ""; // Limpa o container antes de renderizar
                
                // Renderiza os 3 itens principais e adiciona o item anterior2 e o próximo parcialmente visíveis
                for (let i = -1; i <= itensMostrados2; i++) {
                    const index = (inicio + i + lancamentos.length) % lancamentos.length; // Índice circular
                    const novel = lancamentos[index]; // Acessa os itens de 'lancamentos'
                    
                    const card = document.createElement("div");
                    card.classList.add("card");
                    
                    if (i === -1)
                    card.classList.add("anterior2");
                    else if (i === itensMostrados2)
                    card.classList.add("proximo2");
                    else if (i === 0)
                    card.classList.add("current");
                    
                    const link = document.createElement("a");
                    link.href = novel.url || "venda.html";
                    link.setAttribute("data-id", novel.id); // Adiciona o atributo data-id com o id do item
                    
                    const img = document.createElement("img");
                    img.src = novel.imagem;
                    img.alt = novel.nome;
                    
                    const titulo = document.createElement("h3");
                    titulo.textContent = novel.nome;
                    
                    link.appendChild(img);
                    link.appendChild(titulo);
                    card.appendChild(link);
                    container.appendChild(card);
                }
                
                // Adiciona event listeners aos links
                container.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const novelId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", novelId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${novelId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            }
            
            renderCarousel(inicioAtual2);
            
            function proximo2() {
                inicioAtual2 = (inicioAtual2 + 1) % lancamentos.length;
                renderCarousel(inicioAtual2);
            }
            
            function anterior2() {
                inicioAtual2 = (inicioAtual2 - 1 + lancamentos.length) % lancamentos.length;
                renderCarousel(inicioAtual2);
            }
            
            document.getElementById("proximo2").addEventListener("click", proximo2);
            document.getElementById("anterior2").addEventListener("click", anterior2);
        })
        .catch(error => console.error("Erro ao carregar JSON:", error));
    }
    
    carregar2();
    
    /* ********************************************************************************* */
    /* SCRIPT DO CARROSSEL DE NOVELS 3*/
    let inicioAtual3 = 0;
    const itensMostrados3 = 3;
    
    function carregar3() {
        fetch('novels.json') // Caminho para o JSON
        .then(response => response.json())
        .then(data => {
            const portugues = data.portugues; // Acessa a seção 'portugues' do JSON
            const container = document.querySelector("#novels-container3");
            
            function renderCarousel(inicio) {
                container.innerHTML = ""; // Limpa o container antes de renderizar
                
                // Renderiza os 3 itens principais e adiciona o item anterior3 e o próximo parcialmente visíveis
                for (let i = -1; i <= itensMostrados3; i++) {
                    const index = (inicio + i + portugues.length) % portugues.length; // Índice circular
                    const novel = portugues[index]; // Acessa os itens de 'portugues'
                    
                    const card = document.createElement("div");
                    card.classList.add("card");
                    
                    if (i === -1)
                    card.classList.add("anterior3");
                    else if (i === itensMostrados3)
                    card.classList.add("proximo3");
                    else if (i === 0)
                    card.classList.add("current");
                    
                    const link = document.createElement("a");
                    link.href = novel.url || "venda.html";
                    link.setAttribute("data-id", novel.id); // Adiciona o atributo data-id com o id do item
                    
                    const img = document.createElement("img");
                    img.src = novel.imagem;
                    img.alt = novel.nome;
                    
                    const titulo = document.createElement("h3");
                    titulo.textContent = novel.nome;
                    
                    link.appendChild(img);
                    link.appendChild(titulo);
                    card.appendChild(link);
                    container.appendChild(card);
                }
                
                // Adiciona event listeners aos links
                container.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const novelId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", novelId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${novelId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            }
            
            renderCarousel(inicioAtual3);
            
            function proximo3() {
                inicioAtual3 = (inicioAtual3 + 1) % portugues.length;
                renderCarousel(inicioAtual3);
            }
            
            function anterior3() {
                inicioAtual3 = (inicioAtual3 - 1 + portugues.length) % portugues.length;
                renderCarousel(inicioAtual3);
            }
            
            document.getElementById("proximo3").addEventListener("click", proximo3);
            document.getElementById("anterior3").addEventListener("click", anterior3);
        })
        .catch(error => console.error("Erro ao carregar JSON:", error));
    }
    
    carregar3();
    
    /* ********************************************************************************* */
    /* SCRIPT DO CARROSSEL DE NOVELS 4*/
    let inicioAtual4 = 0;
    const itensMostrados4 = 3;
    
    function carregar4() {
        fetch('novels.json') // Caminho para o JSON
        .then(response => response.json())
        .then(data => {
            const promocoes = data.promocoes; // Acessa a seção 'promocoes' do JSON
            const container = document.querySelector("#novels-container4");
            
            function renderCarousel(inicio) {
                container.innerHTML = ""; // Limpa o container antes de renderizar
                
                // Renderiza os 3 itens principais e adiciona o item anterior4 e o próximo parcialmente visíveis
                for (let i = -1; i <= itensMostrados4; i++) {
                    const index = (inicio + i + promocoes.length) % promocoes.length; // Índice circular
                    const novel = promocoes[index]; // Acessa os itens de 'promocoes'
                    
                    const card = document.createElement("div");
                    card.classList.add("card");
                    
                    if (i === -1)
                    card.classList.add("anterior4");
                    else if (i === itensMostrados4)
                    card.classList.add("proximo4");
                    else if (i === 0)
                    card.classList.add("current");
                    
                    const link = document.createElement("a");
                    link.href = novel.url || "venda.html";
                    link.setAttribute("data-id", novel.id); // Adiciona o atributo data-id com o id do item

                    const img = document.createElement("img");
                    img.src = novel.imagem;
                    img.alt = novel.nome;
                    
                    const titulo = document.createElement("h3");
                    titulo.textContent = novel.nome;
                    
                    link.appendChild(img);
                    link.appendChild(titulo);
                    card.appendChild(link);
                    container.appendChild(card);
                }
                
                // Adiciona event listeners aos links
                container.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita a navegação padrão (opcional)
                        const novelId = this.getAttribute("data-id"); // Obtém o id do atributo data-id
                        localStorage.setItem("novelIdSelecionado", novelId); // Armazena no Web Storage
                        console.log(`ID armazenado: ${novelId}`); // Apenas para debug
                        window.location.href = this.href; // Redireciona para a URL
                    });
                });
            }
            
            renderCarousel(inicioAtual4);
            
            function proximo4() {
                inicioAtual4 = (inicioAtual4 + 1) % promocoes.length;
                renderCarousel(inicioAtual4);
            }
            
            function anterior4() {
                inicioAtual4 = (inicioAtual4 - 1 + promocoes.length) % promocoes.length;
                renderCarousel(inicioAtual4);
            }
            
            document.getElementById("proximo4").addEventListener("click", proximo4);
            document.getElementById("anterior4").addEventListener("click", anterior4);
        })
        .catch(error => console.error("Erro ao carregar JSON:", error));
    }
    
    carregar4();
});