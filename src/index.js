initNavDropdownMobile();

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
