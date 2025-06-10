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
      verticalSlider();
      hoverImageInteraction();
    }
    function verticalSlider() {
      const swiper = new Swiper(".js-verticalSlider", {
        direction: "vertical",
        autoHeight: true,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        speed: 400,
        slidesPerView: 1,
        mousewheel: {
          enabled: true,
        },
        breakpoints: {
          991: { slidesPerView: 3, spaceBetween: 100 },
          767: { slidesPerView: 1, spaceBetween: 30 },
          574: { slidesPerView: 1, spaceBetween: 30 },
        },
        lazy: {
          loadPrevNext: true,
        },
        pagination: {
          el: document.querySelector(".js-verticalSlider-pagination"),
          bulletClass: "pagination__item",
          bulletActiveClass: "is-active",
          bulletElement: "div",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
            );
          },
        },
        navigation: {
          prevEl: document.querySelector(".js-slider-auto-prev"),
          nextEl: document.querySelector(".js-slider-auto-next"),
        },
      });

      const section = document.querySelector(".verticalSlider-images");
      if (!section) return;

      swiper.on("slideChangeTransitionEnd", (e) => {
        const images = section.querySelectorAll(
          ".verticalSlider-images__images > *"
        );

        images.forEach((el) => {
          if (el.classList.contains("is-active")) {
            el.classList.remove("is-active");
          }
        });

        images[swiper.realIndex].classList.add("is-active");
      });
    }

    function hoverImageInteraction() {
      const target = document.querySelector(".hoverTitleInteraction");
      if (!target) return;

      const images = target.querySelectorAll(
        ".hoverTitleInteraction__images > *"
      );
      const links = target.querySelectorAll(
        ".hoverTitleInteraction__links > *"
      );

      links.forEach((el, i) => {
        el.addEventListener("mouseover", () => {
          images.forEach((el) => {
            if (el.classList.contains("is-active")) {
              el.classList.remove("is-active");
            }
          });
          images[i].classList.add("is-active");
        });
      });
    }
  };
})();
