document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.scrollTop = card.scrollHeight;
    });
  });
  