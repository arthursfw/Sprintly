// login.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const senhaInput = document.querySelector('#senha');

    form.addEventListener('submit', (event) => {
        let hasError = false;

        // Limpar mensagens de erro anteriores
        document.querySelectorAll('.error-message').forEach((error) => error.remove());

        // Validar e-mail
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Por favor, insira seu e-mail.');
            hasError = true;
        }

        // Validar senha
        if (!senhaInput.value.trim()) {
            showError(senhaInput, 'Por favor, insira sua senha.');
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
});