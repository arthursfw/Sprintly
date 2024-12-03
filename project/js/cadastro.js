// cadastro.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email');
    const senhaInput = document.querySelector('#senha');
    const confirmarSenhaInput = document.querySelector('#confirmar-senha');

    form.addEventListener('submit', (event) => {
        let hasError = false;

        // Limpar mensagens de erro anteriores
        document.querySelectorAll('.error-message').forEach((error) => error.remove());

        // Validar nome
        if (!nomeInput.value.trim()) {
            showError(nomeInput, 'Por favor, insira seu nome completo.');
            hasError = true;
        }

        // Validar e-mail
        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um e-mail válido.');
            hasError = true;
        }

        // Validar senha
        if (!senhaInput.value.trim()) {
            showError(senhaInput, 'Por favor, insira uma senha.');
            hasError = true;
        }

        // Validar confirmação de senha
        if (senhaInput.value !== confirmarSenhaInput.value) {
            showError(confirmarSenhaInput, 'As senhas não coincidem.');
            hasError = true;
        }

        // Impedir envio se houver erro
        if (hasError) {
            event.preventDefault();
        }
    });

    // Função para exibir mensagem de erro
    function showError(input, message) {
        const error = document.createElement('span');
        error.textContent = message;
        error.classList.add('error-message');
        error.style.color = 'red';
        error.style.fontSize = '14px';
        input.parentNode.appendChild(error);
    }

    // Função para validar e-mail
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});