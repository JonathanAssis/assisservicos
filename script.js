// EmailJS Configuration
// SUBSTITUA 'YOUR_PUBLIC_KEY' pela sua chave pública do EmailJS
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// Initialize EmailJS
(function() {
    // Inicializar EmailJS quando a chave for fornecida
    if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 70;
        const targetPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Header Background on Scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notification-message');
    
    messageElement.textContent = message;
    notification.className = `notification ${type}`;
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
        notification.classList.remove('hidden');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification();
    }, 5000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
    notification.classList.add('hidden');
}

// Close notification on click
document.getElementById('notification-close').addEventListener('click', hideNotification);

// Contact Form Handling with EmailJS
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const contactData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    // Basic validation
    if (!contactData.name || !contactData.phone || !contactData.email || !contactData.service || !contactData.message) {
        showNotification('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    // Phone validation (Brazilian format)
    const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    if (!phoneRegex.test(contactData.phone)) {
        showNotification('Por favor, insira um número de telefone válido.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
        showNotification('Por favor, insira um email válido.', 'error');
        return;
    }
    
    // Disable submit button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    try {
        // Check if EmailJS is configured
        if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            // Fallback to mailto if EmailJS is not configured
            const numero = "5521964049156";
            const subject = `Solicitação de Orçamento - ${contactData.service}`;
            const body = `Nome: ${contactData.name}\nTelefone: ${contactData.phone}\nEmail: ${contactData.email}\nServiço: ${contactData.service}\n\nDescrição:\n${contactData.message}`;
            const whatsappUrl = `https://wa.me/${numero}?text=${texto}`;
            window.open(mailtoUrl, '_blank');
            showNotification('Seu envio foi aberto no whatsapp. Complete o envio por lá.', 'success');
            contactForm.reset();
        } else {
            // Send with EmailJS
            const templateParams = {
                to_name: 'Assis Serviços Elétricos',
                from_name: contactData.name,
                from_email: contactData.email,
                phone: contactData.phone,
                service: contactData.service,
                message: contactData.message,
                reply_to: contactData.email
            };
            
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
            showNotification('Solicitação enviada com sucesso! Entraremos em contato em breve.', 'success');
            contactForm.reset();
        }
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Fallback to WhatsApp if email fails
        const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:\n\nNome: ${contactData.name}\nTelefone: ${contactData.phone}\nEmail: ${contactData.email}\nServiço: ${contactData.service}\n\nDescrição: ${contactData.message}`;
        const whatsappUrl = `https://wa.me/5521964049156?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        showNotification('Solicitação enviada com sucesso! Entraremos em contato em breve.', 'error');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Solicitação';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .skill-item');
animateElements.forEach(el => {
    observer.observe(el);
});

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                const suffix = counter.textContent.includes('+') ? '+' : counter.textContent.includes('%') ? '%' : '';
                counter.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                const suffix = counter.textContent.includes('+') ? '+' : counter.textContent.includes('%') ? '%' : '';
                counter.textContent = target + suffix;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Scroll to Top Button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Voltar ao topo');
    
    // Add styles for scroll button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #fbbf24;
            color: #0f172a;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(251, 191, 36, 0.3);
            z-index: 999;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background: #f59e0b;
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(251, 191, 36, 0.4);
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Console log for debug
console.log('ElétricoProBR Portfolio - Loaded successfully! ⚡');
console.log('Para configurar o envio de emails, configure o EmailJS em script.js');

// Instructions for EmailJS setup
if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.log(`
🔧 CONFIGURAÇÃO DO EMAILJS:

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Configure um serviço de email (Gmail, Outlook, etc.)
4. Crie um template de email
5. Substitua as seguintes variáveis no script.js:
   - EMAILJS_PUBLIC_KEY
   - EMAILJS_SERVICE_ID  
   - EMAILJS_TEMPLATE_ID

💡 Enquanto isso, o formulário usa mailto como fallback.
    `);
}