/* ================================================================
   Estructura de Datos · E-ETD-2
   js/comun.js — utilidades compartidas por los objetos de
   aprendizaje. Aquí vive la interacción repetida en todas las
   páginas (antes cada página duplicaba su propio onclick).
   ================================================================ */
(function () {
  'use strict';

  // Quiz de autocomprobación: un solo listener delegado sustituye
  // el onclick="this.classList.toggle('open')" que se repetía en
  // cada tarjeta de cada página.
  document.addEventListener('click', function (e) {
    var item = e.target && e.target.closest ? e.target.closest('.quiz-item') : null;
    if (!item) return;
    var q = item.querySelector('.q');
    item.classList.toggle('open');
    if (q) {
      q.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
    }
  });

  // Accesibilidad: la pregunta se comporta como un botón
  // (navegable con Tab y activable con Enter o Espacio).
  function initQuizzes() {
    var questions = document.querySelectorAll('.quiz-item .q');
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      q.setAttribute('role', 'button');
      q.setAttribute('tabindex', '0');
      if (!q.getAttribute('aria-expanded')) {
        q.setAttribute('aria-expanded', 'false');
      }
      q.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          var item = this.closest('.quiz-item');
          if (item) {
            item.classList.toggle('open');
            this.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
          }
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuizzes);
  } else {
    initQuizzes();
  }
})();
