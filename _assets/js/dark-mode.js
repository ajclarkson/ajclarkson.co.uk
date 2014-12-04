// Toggle dark theme
var d = document.documentElement,
    t = document.querySelectorAll(".js-dark-mode")[0],
    m = localStorage.getItem("darkmode");

if(m == "true") {
  d.classList.add("dark-mode");
}

t.addEventListener("click", function(){
  if(d.classList.contains("dark-mode")) {
    d.classList.remove("dark-mode");
    localStorage.setItem("darkmode", "false");
  } else {
    d.classList.add("dark-mode");
    localStorage.setItem("darkmode", "true");
  }
});