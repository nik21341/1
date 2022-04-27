import { createPopper } from '@popperjs/core';

document.addEventListener('DOMContentLoaded', () => {
  const tooltips = document.querySelectorAll('.projects__tooltip');

  tooltips.forEach(el => {
    const button = el.querySelector('button');
    const tooltip = el.querySelector('span');

    button.addEventListener('click', () => {
      el.classList.toggle('is-active');

      tooltips.forEach(item => {
        if (item !== el) {
          item.classList.remove('is-active');
        }
      });
    })

    createPopper(button, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 9],
          },
        },
        {
          name: 'arrow',
        },
      ],
    });
  });


  document.addEventListener('click', (e) => {
    if (!e.target.closest('.projects__tooltip')) {
      tooltips.forEach(el => {
        el.classList.remove('is-active');
      });
    }
  });
});

