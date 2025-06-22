document.getElementById('search').addEventListener('input', function() {
  const query = this.value.trim();
  document.getElementById('result').innerText = query ? 'Buscando por: ' + query : 'Digite algo para buscar.';
});
