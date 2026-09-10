import { cv, toJsonLd } from './data/cv';
import { initMobileMenu } from './ui/menu';
import { initBackToTop } from './ui/scroll';
import './styles/main.css';

function injectJsonLd(): void {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = toJsonLd(cv);
  document.head.append(script);
}

function init(): void {
  injectJsonLd();
  initMobileMenu();
  initBackToTop();
}

init();
