document.addEventListener('DOMContentLoaded', () => {
  const chexboxs = document.querySelectorAll('.check__input');

  chexboxs.forEach(item => {

    item.addEventListener('keyup', (e) => {
      if (e.which === 13) {
        e.target.checked = !e.target.checked;
      }
    })
  })
});
