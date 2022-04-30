document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  const closeAccordion = (item) => {
    const control = item.querySelector('.accordion__control');
    const content = item.querySelector('.accordion__content');

    item.classList.remove('open');
    control.setAttribute('aria-expanded', false);
    content.setAttribute('aria-hidden', true);
    content.style.maxHeight = null;
  }

  const openAccordion = (item) => {
    const control = item.querySelector('.accordion__control');
    const content = item.querySelector('.accordion__content');

    control.setAttribute('aria-expanded', true);
    content.setAttribute('aria-hidden', false);
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  accordions.forEach((el, index) => {
    const control = el.querySelector('.accordion__control');

    if (el.querySelector('.accordion-empty__link')) {
      const link = el.querySelector('.accordion-empty__link');

      link.addEventListener('click', () => {
        closeAccordion(el);
      })
    }

    if (el.classList.contains('open')) {
      openAccordion(el)
    }

    control.addEventListener('click', () => {
      el.classList.toggle('open');

      if (el.classList.contains('open')) {
        openAccordion(el)
      } else {
        closeAccordion(el);
      }
    })

    document.addEventListener('click', (e) => {
      if (!el.contains(e.target)) {
        closeAccordion(el);
      };
    });

    if (index === 0) {
      openAccordion(el)
    }
  });
});
