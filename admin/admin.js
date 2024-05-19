document.addEventListener('DOMContentLoaded', function() {
    // Carrega e exibe produtos
    loadAndDisplayItems('produtos');

    // Carrega e exibe serviços
    loadAndDisplayItems('servicos');
});

function loadAndDisplayItems(itemType) {
    var items = JSON.parse(localStorage.getItem(itemType)) || [];
    var container = itemType === 'produtos'? document.getElementById('lista-produtos') : document.getElementById('lista-servicos');

    items.forEach(function(item, index) {
        var itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <h3>${item.nome}</h3>
            <p>Descrição: ${item.nome}</p>
            <button onclick="editItem('${itemType}', ${index})">Editar</button>
            <button onclick="deleteItem('${itemType}', ${index})">Deletar</button>
        `;
        container.appendChild(itemElement);
    });
}

function editItem(itemType, index) {
    var items = JSON.parse(localStorage.getItem(itemType));
    var newName = prompt("Digite o novo nome:");
    var newImageURL = prompt("Digite a nova URL da imagem:");

    if (newName && newImageURL) {
        items[index].nome = newName;
        items[index].imagem = newImageURL;
        localStorage.setItem(itemType, JSON.stringify(items)); // Atualiza o localStorage
        alert(`${items[index].nome} foi editado com sucesso.`);
        loadAndDisplayItems(itemType); // Recarrega a lista após a edição
        location.reload();
    } else {
        alert("Por favor, insira ambos os campos.");
    }
}

function deleteItem(itemType, index) {
    // Implemente a lógica para deletar um item
    console.log(`Deletando item tipo ${itemType} na posição ${index}`);
}

function deleteItem(itemType, index) {
    var items = JSON.parse(localStorage.getItem(itemType));
    items.splice(index, 1); // Remove o item do arrayitems
    localStorage.setItem(itemType, JSON.stringify(items)); // Atualiza o localStorage
    loadAndDisplayItems(itemType); // Recarrega a lista após a exclusão
    alert(`O elemento foi deletado`);
    location.reload(); // Recarrega a página
}
