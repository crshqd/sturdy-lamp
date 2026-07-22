(async () => {
  let bingbing = document.createElement("iframe");
  
  const response = await fetch("https://cdn.jsdelivr.net/gh/sealiee11/arctic@main/index.html?t=" + Date.now());
  const data = await response.text();
  
  bingbing.srcdoc = data;
  Object.assign(bingbing.style, {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
    border: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    zIndex: "999999"
  });
  document.documentElement.innerHTML = "";
  document.documentElement.appendChild(bingbing);
})();
