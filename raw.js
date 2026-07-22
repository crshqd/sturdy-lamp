(async () => {
  const response = await fetch("https://cdn.jsdelivr.net/gh/sealiee11/arctic@main/index.html?t=" + Date.now());
  const data = await response.text();
  document.open();
  document.write(data);
  document.close();
})();
