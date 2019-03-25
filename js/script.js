'use strict'
if(window.innerWidth > 580) {
  const nav = document.querySelector('#navigation');
  const triggers = document.querySelectorAll('[data-dropdown]');
  const dropdownBG = document.querySelector('.dropdown-bg');

  function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter--active'), 200);
    dropdownBG.classList.add('active');
    
    const dropdown = this.querySelector('.dropdown');
    const pos = dropdown.dataset.position;
    const coordsDropdown = dropdown.getBoundingClientRect();
    const coordsNav = nav.getBoundingClientRect();
    
    const coords = {
      width: coordsDropdown.width,
      height: coordsDropdown.height,
      top: coordsDropdown.top - coordsNav.top,
      left: coordsDropdown.left
    }
    
    dropdownBG.style.setProperty('width', `${coords.width}px`);
    dropdownBG.style.setProperty('height', `${coords.height}px`);
    dropdownBG.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    (pos) && dropdownBG.classList.add(pos); 
  }

  function handleLeave(e) {
   /*if (e.target.matches('html')) {
      triggers.forEach(trigger => trigger.classList.remove('trigger-enter', 'trigger-enter--active'));
    } else {
      this.classList.remove('trigger-enter', 'trigger-enter--active');
    }  */
    triggers.forEach(trigger => trigger.classList.remove('trigger-enter', 'trigger-enter--active'));
    dropdownBG.classList.remove('active');
    dropdownBG.classList.contains('left') && dropdownBG.classList.remove('left');
    dropdownBG.classList.contains('right') && dropdownBG.classList.remove('right');
  }

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
  window.addEventListener('touchstart', handleLeave);
}