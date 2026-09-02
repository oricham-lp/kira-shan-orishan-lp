(() => {
  const root = document.querySelector('.きら☆シャン-lp-root');
  if (!root) return;

  const revealItems = root.querySelectorAll('.きら☆シャン-lp-reveal');
  root.classList.add('きら☆シャン-lp-motion');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('きら☆シャン-lp-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('きら☆シャン-lp-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -28px' });

  revealItems.forEach((item) => observer.observe(item));
})();
