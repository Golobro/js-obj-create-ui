// Color Arrays
var colors1 = ["salmon","yellow","pink","magenta","orange","darkviolet","deepskyblue"],
    colors2 = ["#da47ff","#47f5ff","#47ff90","#ffc147","#ff7847","#e2ff78","#ff2f7f"],
    colors3 = ["fuchsia","lime","teal","aqua","silver","palegreen","coral"],
    colors4 = ["lightcoral","mediumvioletred","chocolate","indigo","goldenrod","chartreuse","sandybrown"],
    gridColors = ["lightseagreen","aquamarine","paleturquoise","darkviolet","darkcyan","mediumslateblue","steelblue"];

// setInterval Changes Bg Color
setInterval("Animate()", 1000);
function Animate() {
  var randColor;
  do {
    randColor = colors4[Math.floor(Math.random() * colors4.length)];
  } while (colors4 == randColor);
  let box = $('box')
  css(box, 'bg', randColor);
  css(box, 'transish', 'All 0.5s ease-in-out .8s');
  
  // When window loads fire up functions
  window.onload = Animate;
}