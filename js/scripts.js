// Efeito de Header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        // Sombra mais visível no fundo branco
        header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)';
        header.style.padding = '0.5rem 0'; // Encolhe levemente o header
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '1rem 0'; 
    }
});

// Suavização do Scroll para links internos (Cross-browser)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Ignora links vazios

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validação básica e feedback do formulário
const form = document.getElementById('leadForm');
const submitBtn = form.querySelector('.btn-main');

form.addEventListener('submit', (e) => {
    // Você não pode prevenir o padrão se quiser que o Formspree funcione
    // e.preventDefault(); 

    // Mudar o estado do botão para feedback visual
    submitBtn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.style.opacity = '0.7';
    submitBtn.style.pointerEvents = 'none';

    // O Formspree cuidará do redirecionamento após o envio
    console.log("Formulário submetido. Aguardando Formspree.");
});

