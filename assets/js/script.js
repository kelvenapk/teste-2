// Alternância claro/escuro + salvamento
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Animação ao rolar
AOS.init({ offset: 80, duration: 600 });

// Form → WhatsApp
document.getElementById('form-orcamento').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = this.nome.value.trim();
  const tel = this.telefone.value.trim();
  const msg = this.mensagem.value.trim() || 'Quero um orçamento';
  const text = `Olá, sou ${nome}. Telefone: ${tel}. ${msg}`;
  window.open(`https://wa.me/5533999571994?text=${encodeURIComponent(text)}`, '_blank');
});