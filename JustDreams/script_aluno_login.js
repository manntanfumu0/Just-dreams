document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('aluno-login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login do aluno efetuado com sucesso! (Funcionalidade de navegação simulada)');
        // Aqui você pode adicionar a lógica de redirecionamento real para a página do aluno
    });
});