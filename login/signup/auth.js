function login() {
    const usuario = document.getElementById('usuarioLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    const usuarioExistente = usuarios.find(u => u.usuario === usuario);
  
    if (usuarioExistente && usuarioExistente.senha === senha) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioExistente));
      window.location.href = '../../index.html'; // Redireciona para a página de perfil
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }
  
  function cadastrar() {
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const senhaUsuario = document.getElementById('senhaUsuario').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    const usuarioExistente = usuarios.find(u => u.usuario === nomeUsuario);
  
    if (!usuarioExistente) {
      usuarios.push({ usuario: nomeUsuario, senha: senhaUsuario });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Usuário cadastrado com sucesso!');
      $('#cadastroModal').modal('hide'); // Fecha o modal de cadastro
    } else {
      alert('Usuário já existe.');
    }
  }
  