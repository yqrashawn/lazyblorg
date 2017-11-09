document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector(".menu-closer");

  menu.onclick = function(e) {
    toggleClass(document.querySelector(".menu-espanso"), "expand");
    toggleClass(document.querySelector(".menu-in"), "over");
    toggleClass(document.querySelector(".linea1"), "overL1");
    toggleClass(document.querySelector(".linea2"), "overL2");
    toggleClass(document.querySelector(".linea3"), "overL3");
    toggleClass(document.querySelector(".voci-menu"), "overvoci");
  };

  function toggleClass(div, className) {
    div.classList.toggle(className);
  }

  var css = document.createElement("style");
  css.innerText =
    ".hljs {display: block; overflow-x: auto; padding: 0.5em; background: #F0F0F0;} .hljs, .hljs-subst {color: #444;} .hljs-comment {color: #888888;} .hljs-keyword, .hljs-selector-tag, .hljs-meta-keyword, .hljs-doctag, .hljs-name {font-weight: bold;} .hljs-attribute {color: #0E9A00;} .hljs-function {color: #99069A;} .hljs-builtin-name {color: #99069A;} .hljs-type, .hljs-string, .hljs-number, .hljs-selector-id, .hljs-selector-class, .hljs-quote, .hljs-template-tag, .hljs-deletion {color: #880000;} .hljs-title, .hljs-section {color: #880000; font-weight: bold;} .hljs-regexp, .hljs-symbol, .hljs-variable, .hljs-template-variable, .hljs-link, .hljs-selector-attr, .hljs-selector-pseudo {color: #BC6060;} .hljs-literal {color: #78A960;} .hljs-built_in, .hljs-bullet, .hljs-code, .hljs-addition {color: #0C9A9A;} .hljs-meta {color: #1f7199;} .hljs-meta-string {color: #4d99bf;} .hljs-emphasis {font-style: italic;} .hljs-strong {font-weight: bold;}";

  hljs.initHighlightingOnLoad();
  document.body.appendChild(css);
});
