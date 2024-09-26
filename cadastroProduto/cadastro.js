document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    var nomeProduto = document.getElementById('nomeProduto').value;
    var urlImagem = document.getElementById('urlImagem').value;

    // Adicionando um campo 'id' fictício para o novo produto
    var novoProduto = { id: Date.now(), nome: nomeProduto, imagem: urlImagem };

    // Recuperando produtos existentes do localStorage
    var produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Adicionando o novo produto à lista
    produtos.push(novoProduto);

    // Armazenando a lista atualizada no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Produto cadastrado com sucesso. Agora, atualize a página principal.');

    // Limpa o formulário após o cadastro
    document.getElementById('formCadastro').reset();
});
