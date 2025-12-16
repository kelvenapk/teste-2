document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.elements['nome']?.value || '';
    const telefone = form.elements['telefone']?.value || '';
    const mensagem = form.elements['mensagem']?.value || '';

    const texto =
      `Olá, sou ${nome} (${telefone}). Gostaria de um orçamento. Detalhes: ${mensagem}`;

    const encoded = encodeURIComponent(texto);
    const url = `https://wa.me/5533999571994?text=${encoded}`;
    window.open(url, '_blank');
  });
});
