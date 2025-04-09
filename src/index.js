$("document").ready(function() {
  initNavDropdownMobile();
  initSwipers();
});

function initNavDropdownMobile() {
  const navDropdown = $(".nav_dropdown");
  const mobileBreakpoint = 768;

  if (window.innerWidth <= mobileBreakpoint) {
    navDropdown.each(function() {
      const $dropdown = $(this);
      const $dropdownList = $dropdown.find(".nav_dropdown-list");
      const $chevron = $dropdown.find(".dropdown-chevron");
      
      $dropdown.on("click", function() {
        const isActive = $dropdownList.toggleClass("active").hasClass("active");
        $dropdown.attr("data-dropdown-open", isActive);
        $chevron.css("transform", isActive ? "rotate(180deg)" : "rotate(0deg)");
      });
    });
  }
}
$(window).on('resize', initNavDropdownMobile);


function initSwipers() {
  const dienstenSwiper = new Swiper(".swiper.is-diensten", {
    navigation: {
      nextEl: "[data-diensten-swiper='next']", 
      prevEl: "[data-diensten-swiper='prev']"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  })
  const reviewsSwiper = new Swiper(".swiper.is-reviews", {
    centeredSlides: true,
    loop: true, // Laat de slides continu herhalen
    autoplay: {
      delay: 3000, // Automatisch afspelen met een vertraging van 3 seconden
      disableOnInteraction: false, // Automatisch afspelen hervatten na interactie
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}