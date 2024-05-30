window.onload = function() {
  updateLineNumbersHtml();
  updateLineNumbersCss();
  updateLineNumbersJs();
};

let imgBtn = document.querySelector("[data-id='img-btn']");
let contain = document.querySelector(".container-editor");
let nav = document.querySelector(".nav");
let leftBar = document.querySelector(".left-bar");
let rightBar = document.querySelector(".right-bar");

let images = [
  "url('../images/background-index.jpg')",
  "url('../images/background-courses.jpg')",
  "url('../images/background-course-html-css-js.jpg')",
  "url('../images/background-course-python.jpg')",
  "url('../images/background-editor.jpg')",
  "url('../images/background-about.jpg')",
  "url('../images/background-contact.jpg')"
];

let currentImage = 0;

function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
  output.contentWindow.eval(jsCode);

  document.body.style.backgroundImage = images[currentImage];
}

function rotate() {
  contain.classList.toggle("container-flex");
  nav.classList.toggle("rotate-nav");
  leftBar.classList.toggle("rotate-leftBar");
  rightBar.classList.toggle("rotate-rightBar");
}

imgBtn.onclick = function() {
  imgBtn.classList.toggle("img-btn-on");

  currentImage = (currentImage + 1) % images.length;
  document.body.style.backgroundImage = images[currentImage];

  localStorage.setItem("theme", images[currentImage]);

}

if (localStorage.getItem("theme") === images[currentImage]) {
  imgBtn.classList.add("img-btn-on");
  document.body.style.backgroundImage = images[currentImage];
} else if (localStorage.getItem("theme")) {
  let index = images.indexOf(localStorage.getItem("theme"));
  if (index !== -1) {
    currentImage = index;
    document.body.style.backgroundImage = images[currentImage];
    imgBtn.classList.add("img-btn-on");
  }
}

window.addEventListener("load", run);

const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');

// Lineas HTML

const updateLineNumbersHtml = () => {
  const lineNumberDivCss = document.getElementById('line-numbers-html');
  const lines = htmlCode.value.split('\n');
  const lineNumbers = Array.from(Array(lines.length).keys()).map(i => i + 1);
  lineNumberDivCss.innerHTML = lineNumbers.join('<br>');
};

const lineNumberDivHtml = document.getElementById('line-numbers-html');

htmlCode.addEventListener('scroll', () => {
  lineNumberDivHtml.scrollTop = htmlCode.scrollTop;
});

htmlCode.addEventListener('input', () => {
  const lines = htmlCode.value.split('\n');
  const lineNumbers = Array.from(Array(lines.length).keys()).map(i => i + 1);
  lineNumberDivHtml.innerHTML = lineNumbers.join('<br>');
});

// Lineas CSS

const updateLineNumbersCss = () => {
  const lineNumberDivCss = document.getElementById('line-numbers-css');
  const lines = cssCode.value.split('\n');
  const lineNumbers = Array.from(Array(lines.length).keys()).map(i => i + 1);
  lineNumberDivCss.innerHTML = lineNumbers.join('<br>');
};

const lineNumberDivCss = document.getElementById('line-numbers-css');

cssCode.addEventListener('scroll', () => {
  lineNumberDivCss.scrollTop = cssCode.scrollTop;
});

cssCode.addEventListener('input', () => {
  const lines = cssCode.value.split('\n');
  const lineNumbers = Array.from(Array(lines.length).keys()).map(i => i + 1);
  lineNumberDivCss.innerHTML = lineNumbers.join('<br>');
});

// Lineas JS

const updateLineNumbersJs = () => {
  const lineNumberDivJs = document.getElementById('line-numbers-js');
  const lines = jsCode.value.split('\n');
  const lineNumbers = Array.from(Array(lines.length).keys()).map(i => i + 1);
  lineNumberDivJs.innerHTML = lineNumbers.join('<br>');
};

const lineNumberDivJs = document.getElementById('line-numbers-js');

jsCode.addEventListener('scroll', () => {
  lineNumberDivJs.scrollTop = jsCode.scrollTop;
});

jsCode.addEventListener('input', () => {
  const lines = jsCode.value.split('\n');
  const lineNumbers = Array.from(Array(lines.length).keys()).map(i => i + 1);
  lineNumberDivJs.innerHTML = lineNumbers.join('<br>');
});

// Asignar el evento 'keydown' a cada sección
htmlCode.addEventListener('keydown', handleKeyDown);
cssCode.addEventListener('keydown', handleKeyDown);
jsCode.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
  const start = this.selectionStart;
  const end = this.selectionEnd;
  const tab = ' '.repeat(4);

  if (e.key === 'Tab') {
    e.preventDefault();
    this.value = this.value.substring(0, start) + tab + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + tab.length;
  } else if (e.key === '<') {
    e.preventDefault();
    this.value = this.value.substring(0, start) + '<>' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  } else if (e.key === '>') {
    const nextChar = this.value.charAt(end);
    if (nextChar === '>') {
      e.preventDefault();
      this.selectionEnd++;
    }
  } else if (e.key === '"') {
    e.preventDefault();
    this.value = this.value.substring(0, start) + '""' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  } else if (e.key === '\'') {
    e.preventDefault();
    this.value = this.value.substring(0, start) + '\'\'' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  } else if (e.key === '(') {
    e.preventDefault();
    this.value = this.value.substring(0, start) + '()' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  } else if (e.key === ')') {
    const nextChar = this.value.charAt(end);
    if (nextChar === ')') {
      e.preventDefault();
      this.selectionEnd++;
    }
  } else if (e.key === '{') {
    e.preventDefault();
    this.value = this.value.substring(0, start) + '{}' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  } else if (e.key === '}') {
    const nextChar = this.value.charAt(end);
    if (nextChar === '}') {
      e.preventDefault();
      this.selectionEnd++;
    }
  } else if (e.key === '[') {
    e.preventDefault();
    this.value = this.value.substring(0, start) + '[]' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  } else if (e.key === ']') {
    const nextChar = this.value.charAt(end);
    if (nextChar === ']') {
      e.preventDefault();
      this.selectionEnd++;
    }
  }
}

