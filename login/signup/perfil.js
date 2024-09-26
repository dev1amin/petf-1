document.addEventListener('DOMContentLoaded', function() {
    const usuariosJSON = localStorage.getItem('usuarios');
    const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        const usuario = usuarios.find(u => u.usuario === usuarioLogado.usuario);

        if (usuario) {
            document.getElementById('nomeUsuarioInput').value = usuario.usuario;
            document.getElementById('emailUsuarioInput').value = usuario.email;
        } else {
            console.error('Usuário não encontrado.');
        }
    } else {
        console.error('Nenhum usuário está logado.');
        window.location.href = '../../index.html';
    }
});

document.getElementById('formPerfil').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeUsuario = document.getElementById('nomeUsuarioInput').value;
    const emailUsuario = document.getElementById('emailUsuarioInput').value;
    const senhaUsuario = document.getElementById('senhaUsuario').value;

    const usuariosJSON = localStorage.getItem('usuarios');
    const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    const usuarioIndex = usuarios.findIndex(u => u.usuario === usuarioLogado.usuario);
    if (usuarioIndex !== -1) {
        usuarios[usuarioIndex].usuario = nomeUsuario;
        usuarios[usuarioIndex].email = emailUsuario;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Dados do usuário atualizados!');
    } else {
        alert('Usuário não encontrado para atualização.');
    }
});

document.getElementById('deslogarButton').addEventListener('click', function() {
    console.log('Logout realizado');

    localStorage.removeItem('usuarioLogado');

    window.location.href = '../../index.html';
});
