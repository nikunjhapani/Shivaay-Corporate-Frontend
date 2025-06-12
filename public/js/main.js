(function () {
  "use strict";
  window.App = {};
  App.config = {
    cursorFollower: {
      enabled: true,
      disableBreakpoint: "992", // cursor will be disabled on this device width
    },
  };

  App.html = document.querySelector("html");
  App.body = document.querySelector("body");

  window.onload = function () {
    if (App.config.cursorFollower.enabled) {
      Cursor.init();
    }

    document.fonts.ready.then(function () {
      initialReveal();
    });
    function initialReveal() {
      const preloader = document.querySelector(".js-preloader");

      if (!preloader) {
        //RevealAnim.init();
        initComponents();
        return;
      }

      setTimeout(() => {
        preloader.classList.add("-is-hidden");
        initComponents();
        // RevealAnim.init();
      }, 600);
    }

    function initComponents() {
      initAOS();
      initParallax();
    }
    
  };
})();
