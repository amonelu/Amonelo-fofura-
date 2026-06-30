
let totalCarrinhoItens = 0;

// Função para abrir o carrinho e mostrar o PIX automaticamente
function abrirPixModal(nomeItem, precoItem) {
    // Altera as informações internas do modal baseadas no sticker clicado
    document.getElementById('nome-item-pix').innerText = nomeItem;
    document.getElementById('valor-pix').innerText = `R$ ${precoItem.toFixed(2).replace('.', ',')}`;
    
    // Mostra a janela flutuante
    const modal = document.getElementById('pixModal');
    modal.style.display = 'flex';
    
    // Incrementa discretamente o contador de itens no topo da barra
    totalCarrinhoItens++;
    document.getElementById('cart-count').innerText = totalCarrinhoItens;
    
    // Reseta o texto de feedback de cópia antiga caso exista
    document.getElementById('feedback-copiado').style.display = 'none';
}

// Função para fechar a janela do PIX
function fecharPixModal() {
    document.getElementById('pixModal').style.display = 'none';
}

// Fecha o modal caso o usuário clique fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('pixModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Função de copiar a chave PIX Automaticamente
function copiarChavePix() {
    const inputChave = document.getElementById('pixChave');
    inputChave.select();
    inputChave.setSelectionRange(0, 99999); // Para telas de celular
    
    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(inputChave.value);
    
    // Mostra a mensagem de sucesso bonitinha
    const feedback = document.getElementById('feedback-copiado');
    feedback.style.display = 'block';
}
