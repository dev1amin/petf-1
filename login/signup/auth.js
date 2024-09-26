function cadastrarUsuario() {
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const emailUsuario = document.getElementById('emailUsuario').value;
    const senhaUsuario = document.getElementById('senhaUsuario').value;
    const tipoCadastro = document.querySelector('input[name="tipoCadastro"]:checked').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(u => u.usuario === nomeUsuario || u.email === emailUsuario);

    if (usuarioExistente) {
        alert('Usuário ou email já cadastrado!');
        return;
    }

    usuarios.push({ usuario: nomeUsuario, email: emailUsuario, senha: senhaUsuario, tipoCadastro: tipoCadastro });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
    window.location.href = "../../index.html";
}


function login() {
    const nomeUsuario = document.getElementById('usuarioLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(u => u.usuario === nomeUsuario && u.senha === senhaLogin);

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        alert('Login realizado com sucesso!');
        window.location.href = 'perfil.html'; // Redirect to profile page
    } else {
        alert('Usuário ou senha inválidos!');
    }
}
