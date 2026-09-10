export function initBackToTop(): void {
  const button = document.querySelector<HTMLAnchorElement>('[data-back-to-top]');

  if (!button) {
    return;
  }

  const syncVisibility = (): void => {
    const scrolled = window.scrollY > 400;
    button.classList.toggle('is-visible', scrolled);
  };

  syncVisibility();
  window.addEventListener('scroll', syncVisibility, { passive: true });
}
