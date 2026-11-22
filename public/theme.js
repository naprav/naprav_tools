(function () {
  var KEY = "naprav-theme";
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  apply(saved() === "light" ? "light" : "dark");

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".theme-toggle") : null;
    if (!btn) return;
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (err) {}
  });
})();
