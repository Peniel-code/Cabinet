document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('wa-name').value;
  const email = document.getElementById('wa-email').value;
  const message = document.getElementById('wa-message').value;
  const phone = '22890123456'; // Remplace par ton numéro WhatsApp

  const text = `Nom: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});
// Animation fade-in au scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3,
});

faders.forEach(fader => {
  observer.observe(fader);
});

document.getElementById('burger-menu').addEventListener('click', function() {
  document.getElementById('main-nav').classList.toggle('show');
});
