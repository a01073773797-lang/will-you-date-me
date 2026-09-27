let currentPage = 1;

function go(pageNumber) {
  const current = document.getElementById("page" + currentPage);
  const next = document.getElementById("page" + pageNumber);

  current.classList.remove("active");
  next.classList.add("active");
  currentPage = pageNumber;

  document.querySelectorAll(".dots i").forEach((dot, index) => {
    dot.classList.toggle("active", index === pageNumber - 1);
  });
}

function choose(food) {
  document.getElementById("result").textContent = food;
  go(4);
}

function restart() {
  go(1);
}
