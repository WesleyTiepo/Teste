// ======================================================
// LOCALIZANDO OS ELEMENTOS DO HTML
// ======================================================


// Procura no HTML o elemento que possui id="modal".
const modal = document.getElementById("modal");


// Procura no HTML o elemento que possui id="modal-title".
// Esse elemento mostrará o título dentro da janela modal.
const modalTitle = document.getElementById("modal-title");


// Procura no HTML o elemento que possui id="modal-text".
// Esse elemento mostrará o texto dentro da janela modal.
const modalText = document.getElementById("modal-text");


// Procura todos os botões que possuem a classe "btn-modal".
// Como existem dois botões "Saiba mais", usamos querySelectorAll().
const botoesSaibaMais = document.querySelectorAll(".btn-modal");


// Procura o botão X utilizado para fechar o modal.
const botaoFechar = document.querySelector(".close-btn");



// ======================================================
// ABRINDO O MODAL
// ======================================================


// Percorre todos os botões "Saiba mais".
botoesSaibaMais.forEach(function(botao) {

    // Adiciona um evento de clique ao botão.
    botao.addEventListener("click", function() {

        /*
            O botão está dentro de um elemento com classe "card".

            O comando closest(".card") procura o card
            ao qual aquele botão pertence.
        */
        const card = botao.closest(".card");


        /*
            Dentro desse card, procuramos o elemento <h2>.

            textContent pega o texto existente no elemento.
        */
        const titulo = card.querySelector("h2").textContent;


        /*
            Dentro do mesmo card, procuramos o primeiro <p>.
        */
        const texto = card.querySelector("p").textContent;


        // Coloca o título do card dentro do modal.
        modalTitle.textContent = titulo;


        // Coloca o texto do card dentro do modal.
        modalText.textContent = texto;


        /*
            Mostra o modal.

            display = "flex" faz o modal aparecer
            utilizando o Flexbox definido no CSS.
        */
        modal.style.display = "flex";

    });

});



// ======================================================
// FECHANDO O MODAL
// ======================================================


// Adiciona um evento de clique ao botão X.
botaoFechar.addEventListener("click", function() {

    /*
        display = "none" esconde completamente
        o elemento da página.
    */
    modal.style.display = "none";

});