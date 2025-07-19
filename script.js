// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const giftIcon = document.getElementById('giftIcon');
    const modal = document.getElementById('imageModal');
    const closeBtn = document.getElementById('closeModal');
    const body = document.body;

    // Función para abrir el modal
    function openModal() {
        modal.style.display = 'block';
        body.style.overflow = 'hidden'; // Prevenir scroll del body
        
        // Pequeña animación adicional para el icono
        giftIcon.style.transform = 'scale(0.8) rotate(360deg)';
        setTimeout(() => {
            giftIcon.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        body.style.overflow = 'auto'; // Restaurar scroll del body
    }

    // Event listeners
    giftIcon.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Animación para el icono de regalo después de unos segundos
    setTimeout(() => {
        giftIcon.style.animation = 'pulse 2s infinite, bounce 1s ease-out';
    }, 3000);

    // Animación de rebote para el icono
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
                transform: translate3d(0,0,0);
            }
            40%, 43% {
                transform: translate3d(0,-30px,0);
            }
            70% {
                transform: translate3d(0,-15px,0);
            }
            90% {
                transform: translate3d(0,-4px,0);
            }
        }
    `;
    document.head.appendChild(style);

    // Efecto de partículas cuando se abre el modal (opcional)
    function createConfetti() {
        const colors = ['#ff6b6b', '#ffa500', '#667eea', '#764ba2', '#4ecdc4'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                border-radius: 50%;
                pointer-events: none;
                z-index: 3000;
                animation: fall ${Math.random() * 3 + 2}s linear forwards;
            `;
            
            document.body.appendChild(confetti);
            
            // Remover después de la animación
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // CSS para la animación de confetti
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);

    // Agregar confetti cuando se abre el modal
    const originalOpenModal = openModal;
    openModal = function() {
        originalOpenModal();
        createConfetti();
    };

    // Actualizar el event listener con la nueva función
    giftIcon.removeEventListener('click', originalOpenModal);
    giftIcon.addEventListener('click', openModal);

    console.log('🎁 Sariti Gift cargado correctamente con YouTube - ¡Busca el regalo!');
}); 