document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregamento da página
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    alert(`Login realizado com sucesso! Bem-vindo(a), ${email}`);
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
