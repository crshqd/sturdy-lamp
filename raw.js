(async () => {
  const response = await fetch("https://cdn.jsdelivr.net/gh/sealiee11/arctic@main/index.html?t=" + Date.now());
  const data = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");
  document.querySelector("svg").innerHTML = doc.querySelector("html").innerHTML;
})();
