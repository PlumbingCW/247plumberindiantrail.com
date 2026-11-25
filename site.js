(function () {
  var BP = 768;
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.querySelector(".mob-overlay");
  var toggle = document.querySelector(".nav-toggle");
  var closeBtn = document.querySelector(".mob-close");
  if (!drawer || !toggle) return;
  function open() {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
    closeBtn.focus();
  }
  function close() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  }
  toggle.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);
  drawer.addEventListener("click", function (e) {
    if (e.target.closest("a")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BP) close();
  });
})();
