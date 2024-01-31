// Simulando usuários (em um ambiente real, você usaria um banco de dados e um servidor)
const usuarios = [
    { username: 'usuario1', senha: 'senha123' },
    { username: 'usuario2', senha: 'senha456' }
];

function autenticar() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar se o usuário e a senha correspondem a algum usuário simulado
    const usuarioAutenticado = usuarios.find(user => user.username === username && user.senha === password);

    if (usuarioAutenticado) {
        document.getElementById('mensagem').textContent = 'Autenticação bem-sucedida!';
        // Aqui você pode redirecionar para outra página ou executar outras ações após a autenticação
    } else {
        document.getElementById('mensagem').textContent = 'Usuário ou senha incorretos. Tente novamente.';
    }
}