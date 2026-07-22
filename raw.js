(async () => {
  let bingbing = document.createElementNS("http://www.w3.org/1999/xhtml", "iframe")
  
  const response = await fetch("https://cdn.jsdelivr.net/gh/sealiee11/arctic@main/index.html?t=" + Date.now());
  const data = await response.text();
  
  bingbing.setAttribute("srcdoc", data);
  bingbing.setAttribute("style", "position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999;");
  bingbing.setAttribute("sandbox","allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols");
  bingbing.setAttribute("allow","accelerometer *; bluetooth *; camera *; clipboard-read *; clipboard-write *; display-capture *; encrypted-media *; geolocation *; gyroscope *; language-detector *; language-model *; local-network-access *; microphone *; midi *; rewriter *; serial *; summarizer *; translator *; web-share *; writer *; xr-spatial-tracking *");
  bingbing.setAttribute("allowfullscreen", "true");
  bingbing.setAttribute("allowtransparency", "true");
  bingbing.setAttribute("allowpaymentrequest", "true");

  document.documentElement.innerHTML = "";
  document.documentElement.appendChild(bingbing);
})();
