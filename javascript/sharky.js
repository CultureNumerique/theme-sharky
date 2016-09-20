
console.log("changing iframe ??");
iframes = document.getElementsByTagName('iframe');
for (i = 0; i < iframes.length; i++) {
    ifr = iframes[i]
    ifr.allowFullscreen = true;
  }
// is = i.src;
// i.src = '';
// i.src = i.src;
console.log(" AA changed iframe attribute", iframes)
