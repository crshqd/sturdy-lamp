let bingbing = document.createElement("iframe");

const response = await fetch("https://cdn.jsdelivr.net/gh/sealiee11/arctic@main/index.html?t=" + Date.now());
const data = await response.text();

bingbing.srcdoc = data;

document.documentElement.innerHTML = "";
document.documentElement.appendChild(bingbing);
