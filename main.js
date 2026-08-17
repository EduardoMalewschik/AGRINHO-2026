document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email').value.trim();

            if (nameInput === '' || emailInput === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Simulação de envio bem-sucedido
            formMessage.textContent = `Obrigado, ${nameInput}! Sua mensagem sobre o futuro sustentável foi enviada com sucesso.`;
            formMessage.classList.remove('hidden');

            contactForm.reset();

            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }

    console.log('Site Agrinho 2026 carregado e interativo com sucesso!');
});
