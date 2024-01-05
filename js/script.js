// (function (Drupal) {
//   'use strict';

//   Drupal.behaviors.myCustomNavbarBehavior = {
//     attach: function (context, settings) {
//       var navbar = context.getElementById('navbar');
//       if (navbar && !navbar.getAttribute('data-navbar-processed')) {
//         navbar.setAttribute('data-navbar-processed', true);

//         var lastScrollTop = 0; // Variable to store the last scroll position.

//         window.addEventListener('scroll', function () {
//           var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//           // Check if scrolling up or down
//           if (currentScroll > lastScrollTop) {
//             // Scrolling down
//             navbar.style.opacity = Math.max(0, 1 - currentScroll / 200);
//           } else {
//             // Scrolling up
//             navbar.style.opacity = '1';
//           }
//           lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update lastScrollTop
//         });
//       }
//     }
//   };

// })(Drupal);
