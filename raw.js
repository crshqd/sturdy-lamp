(async () => {
  const response = await fetch("https://cdn.jsdelivr.net/gh/sealiee11/arctic@main/index.html?t=" + Date.now());
  const data = await response.text();
  const newTab = window.open("https://gimkit.com/question-image/ddd");
  newTab.onload = function() {
    newTab.document.open();
    newTab.document.write(data);
    newTab.document.close();
  }
})();
