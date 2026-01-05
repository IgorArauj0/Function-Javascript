// Sessão 1 — mostrar / ocultar conteúdo simples
function toggleConteudoSimples(botao) {

    // Busca o conteúdo da sessão
    const conteudo = botao.parentElement.querySelector('.conteudo');

    // Alterna a visibilidade do conteúdo
    conteudo.classList.toggle('ativo');

    // Atualiza o texto do botão
    botao.textContent = conteudo.classList.contains('ativo')
        ? 'Ocultar conteúdo'
        : 'Mostrar conteúdo';
}


// Sessão 2 — exibir mais / exibir menos
function toggleConteudoAvancado(botao) {

    // Busca o conteúdo extra da sessão
    const conteudoExtra = botao.parentElement.querySelector('.conteudo-extra');

    // Alterna a exibição do conteúdo extra
    conteudoExtra.classList.toggle('ativo');

    // Atualiza o texto do botão
    botao.textContent = conteudoExtra.classList.contains('ativo')
        ? 'Exibir menos'
        : 'Exibir mais';
}
