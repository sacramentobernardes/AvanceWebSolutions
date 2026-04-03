// Efeito de Header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 20px rgba(15, 23, 42, 0.08)';
        header.style.padding = '0.55rem 0';
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '1rem 0';
    }
});

// Suavização do scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Atualiza ano automaticamente no rodapé
const currentYear = document.getElementById('currentYear');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Máscara simples para WhatsApp
const whatsappInput = document.getElementById('whatsapp');
if (whatsappInput) {
    whatsappInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 11);

        if (value.length > 10) {
            value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{0,4})/, '($1) $2 $3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/(\d{0,2})/, '($1');
        }

        e.target.value = value.trim();
    });
}

// Feedback visual do formulário
const form = document.getElementById('leadForm');
const submitBtn = form ? form.querySelector('.btn-main') : null;

if (form && submitBtn) {
    form.addEventListener('submit', () => {
        submitBtn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.style.opacity = '0.85';
        submitBtn.style.pointerEvents = 'none';
    });
}
