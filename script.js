'use strict';

// ---- MODAL ----
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const modalCloseFunc = function () { modal.classList.add('closed'); }

if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);

// Show modal after 3s
setTimeout(() => { if (modal) modal.classList.remove('closed'); }, 3000);


// ---- TOAST ----
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
  });
}

// Auto-show toast after 2s, auto-hide after 6s
setTimeout(() => {
  if (notificationToast) notificationToast.classList.remove('closed');
  setTimeout(() => {
    if (notificationToast) notificationToast.classList.add('closed');
  }, 6000);
}, 2000);


// ---- MOBILE MENU ----
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  if (mobileMenuCloseBtn[i]) {
    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  }
  overlay.addEventListener('click', mobileMenuCloseFunc);
}


// ---- ACCORDION ----
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let j = 0; j < accordion.length; j++) {
      if (clickedBtn) break;
      if (accordion[j].classList.contains('active')) {
        accordion[j].classList.remove('active');
        accordionBtn[j].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}


// ---- SEARCH PILLS ----
const searchPills = document.querySelectorAll('.search-pill');
searchPills.forEach(pill => {
  pill.addEventListener('click', function () {
    searchPills.forEach(p => p.classList.remove('active'));
    this.classList.add('active');
  });
});


// ---- ADD TO CART (demo) ----
const addCartBtns = document.querySelectorAll('.add-cart-btn');
const cartCount = document.querySelectorAll('.count');

let cartTotal = 0;

addCartBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    cartTotal++;
    cartCount.forEach(el => {
      if (el.closest('.action-btn[title="Carrito"], .action-btn[title="carrito"]') ||
          el.parentElement.querySelector('[name="bag-handle-outline"]')) {
        el.textContent = cartTotal;
      }
    });

    // Visual feedback
    const original = this.innerHTML;
    this.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon> ¡Agregado!';
    this.style.background = '#24a148';
    setTimeout(() => {
      this.innerHTML = original;
      this.style.background = '';
    }, 1500);
  });
});


// ---- WISHLIST (demo) ----
document.querySelectorAll('.card-action-btn[title="Favorito"]').forEach(btn => {
  btn.addEventListener('click', function () {
    const icon = this.querySelector('ion-icon');
    if (icon.getAttribute('name') === 'heart-outline') {
      icon.setAttribute('name', 'heart');
      this.style.background = '#fef2f2';
      this.style.color = '#ef4444';
    } else {
      icon.setAttribute('name', 'heart-outline');
      this.style.background = '';
      this.style.color = '';
    }
  });
});