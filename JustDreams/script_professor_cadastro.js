document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('professor-cadastro-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cadastro do professor efetuado com sucesso! Redirecionando para o login.');
        window.location.href = 'professor_login.html'; // Redireciona para a tela de login
    });
});