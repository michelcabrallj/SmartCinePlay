document.getElementById("search").addEventListener("input", function(e) {
  const value = this.value.trim();
  document.getElementById("result").innerTex = value
    ? `Buscando por: ${value}`
    : "Digite algo para buscar.";
});
