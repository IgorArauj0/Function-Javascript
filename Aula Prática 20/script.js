// Sessão 1 — mostrar / ocultar conteúdo simples
function mostrarConteudoSimples(botao) {

    // A partir do botão clicado (botao),
    // acessa o elemento pai da sessão e,
    // dentro dele, localiza o elemento com a classe ".conteudo"
    // Isso garante que cada botão controle apenas o conteúdo da sua própria sessão
    const conteudo = botao.parentElement.querySelector('.conteudo');

    // Alterna a visibilidade do conteúdo
    conteudo.classList.toggle('ativo');

    // Atualiza o texto do botão
    botao.textContent = conteudo.classList.contains('ativo')
        ? 'Ocultar conteúdo'
        : 'Mostrar conteúdo';
}


// Sessão 2 — exibir mais / exibir menos
function mostrarConteudoAvancado(botao) {

    // A partir do botão clicado, busca o conteúdo extra
    // apenas dentro da sessão correspondente
    const conteudoExtra = botao.parentElement.querySelector('.conteudo-extra');

    // Alterna a exibição do conteúdo extra
    conteudoExtra.classList.toggle('ativo');

    // Atualiza o texto do botão
    botao.textContent = conteudoExtra.classList.contains('ativo')
        ? 'Exibir menos'
        : 'Exibir mais';
}
