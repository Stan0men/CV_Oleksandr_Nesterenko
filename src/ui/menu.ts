const OPEN_CLASS = 'is-open';

export function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  const closeButtons = document.querySelectorAll<HTMLElement>('[data-menu-close]');

  if (!toggle || !menu) {
    return;
  }

  const setOpen = (open: boolean, restoreFocus = true): void => {
    menu.classList.toggle(OPEN_CLASS, open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

    if (open) {
      const firstLink = menu.querySelector<HTMLAnchorElement>('a');
      firstLink?.focus();
    } else if (restoreFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener('click', () => {
    setOpen(!menu.classList.contains(OPEN_CLASS));
  });

  closeButtons.forEach((node) => {
    node.addEventListener('click', () => setOpen(false));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false, false));
  });

  menu.addEventListener('click', (event: MouseEvent) => {
    if (event.target === menu) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && menu.classList.contains(OPEN_CLASS)) {
      setOpen(false);
    }
  });
}
