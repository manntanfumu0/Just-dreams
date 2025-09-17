document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('aluno-cadastro-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const age = document.getElementById('student-age').value;
        if (age < 6 || age > 8) {
            alert('A idade deve ser entre 6 e 8 anos.');
            return;
        }
        alert('Cadastro do aluno efetuado com sucesso! Redirecionando para o login.');
        window.location.href = 'aluno_login.html'; // Redireciona para a tela de login
    });
});