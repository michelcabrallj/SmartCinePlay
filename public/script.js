document.getElementById("search").addEventListener("input", function(e) {
  const val = e.target.value.toLowerCase();
  document.getElementById("result").textContent = val ? "Você pesquisou por: " + val : "Digite algo para buscar.";
});