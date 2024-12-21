export function initHoverEffects() {
  document.querySelectorAll('.link-external').forEach(link => {
    link.addEventListener('mouseenter', function() {
      const arrow = this.querySelector('.icon-arrow');
      if (arrow) {
        arrow.style.transform = 'translate(2px, -2px)';
        arrow.style.transition = 'transform 0.2s';
      }
    });
    
    link.addEventListener('mouseleave', function() {
      const arrow = this.querySelector('.icon-arrow');
      if (arrow) {
        arrow.style.transform = 'none';
      }
    });
  });
}