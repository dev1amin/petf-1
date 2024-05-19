document.addEventListener('DOMContentLoaded', function() {
    // Tenta recuperar o usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    // Verifica se o usuário foi encontrado
    if (usuarioLogado) {
      // Define o valor do campo de entrada com o nome do usuário
      // Note que usamos usuarioLogado.usuario para acessar o nome do usuário
      document.getElementById('nomeUsuarioInput').value = usuarioLogado.usuario;
      
      // Verifica se o usuário é "admin" e adiciona o botão do painel de admin
      if (usuarioLogado.usuario === "admin") {
        const adminPanelButton = document.createElement("button");
        adminPanelButton.id = "adminPanelButton";
        adminPanelButton.className = "btn btn-success";
        adminPanelButton.textContent = "Painel de Admin";
        adminPanelButton.onclick = function() {
          window.location.href = "../../admin/admin.html";
        };
        document.getElementById('formPerfil').appendChild(adminPanelButton);
      }
    } else {
      console.error('Usuário não encontrado no localStorage.');
    }
  });
  
  document.getElementById('formPerfil').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeUsuario = document.getElementById('nomeUsuarioInput').value;
    const senhaUsuario = document.getElementById('senhaUsuario').value;
  
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    usuarioLogado.usuario = nomeUsuario; // Atualiza o nome do usuário
    usuarioLogado.senha = senhaUsuario; // Atualiza a senha do usuário
  
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
  
  });
  
  document.getElementById('deslogarButton').addEventListener('click', function() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '../../index.html';
  });
  