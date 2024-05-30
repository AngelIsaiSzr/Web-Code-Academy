// Lista de frases motivadoras e inspiradoras
const phrases = [
    { quote: "El conocimiento es poder. Siempre busca aprender más.", author: "Chris Ducker" },
    { quote: "La programación es el futuro, y el futuro es ahora.", author: "Linda Liukas" },
    { quote: "No te rindas. Los comienzos son siempre difíciles.", author: "Terry Pratchett" },
    { quote: "La única forma de hacer un gran trabajo es amando lo que haces.", author: "Steve Jobs" },
    { quote: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", author: "Herman Cain" },
    { quote: "La programación te permite pensar en grande y resolver problemas complejos.", author: "Adele Goldberg" },
    { quote: "El aprendizaje nunca termina. Siempre hay algo nuevo que descubrir.", author: "Hannah Arendt" },
    { quote: "El fracaso no es el final, es una oportunidad para aprender y crecer.", author: "Robert Kiyosaki" },
    { quote: "La creatividad es la inteligencia divirtiéndose.", author: "Albert Einstein" },
    { quote: "La programación es una habilidad que puede abrir muchas puertas.", author: "Reshma Saujani" },
    { quote: "La tecnología se alimenta de sí misma. La tecnología hace posible más tecnología.", author: "Alvin Toffler" },
    { quote: "La programación es una de las pocas disciplinas que puedes empezar a aprender por tu cuenta y llegar a ser un experto.", author: "Solomon Hykes" },
    { quote: "La tecnología no es nada. Lo importante es que tengas fe en la gente, que sean básicamente buenas e inteligentes, y si les das herramientas, harán cosas maravillosas con ellas.", author: "Steve Jobs" },
    { quote: "La programación es la forma de dar vida a tus ideas.", author: "Eric Allam" },
    { quote: "No te compares con los demás. Cada uno tiene su propio ritmo y proceso de aprendizaje.", author: "John Wooden" },
    { quote: "La tecnología y la programación son las herramientas del futuro.", author: "Mark Zuckerberg" },
    { quote: "La pasión es la energía que te mueve hacia adelante.", author: "Oprah Winfrey" },
    { quote: "La programación es una herramienta indispensable para cualquier persona que quiera tener éxito en el mundo digital.", author: "Marissa Mayer" },
    { quote: "La tecnología no es nada. Lo importante es que tengas fe en la gente, que sean básicamente buenas e inteligentes, y si les das herramientas, harán cosas maravillosas con ellas.", author: "Steve Jobs" },
    { quote: "Queda prohibido no sonreír a los problemas, no luchar por lo que quieres, abandonarlo todo por tener miedo, no convertir en realidad tus sueños.", author: "Alfredo Cuervo Barrero" }
];

// Función para generar un número aleatorio entre 0 y el número máximo dado
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Función para mostrar una frase y un autor aleatorios en la página
function displayPhrase() {
    const randomIndex = getRandomNumber(phrases.length);
    const phrase = phrases[randomIndex];
    const phraseElement = document.querySelector('.hero__phrase');
    const authorElement = document.querySelector('.hero__author');
    phraseElement.textContent = `"${phrase.quote}"`;
    authorElement.textContent = `- ${phrase.author}`;
}

// Mostrar una frase y un autor aleatorios al cargar la página
displayPhrase();

// Temario
function syllabusShow() {
    const titleSyllabus = [...document.querySelectorAll('.syllabus__title')];
    let currentOpen = null;
  
    titleSyllabus.forEach(syllabus => {
      syllabus.addEventListener('click', () => {
        let height = 0;
        let answer = syllabus.nextElementSibling;
        let addPadding = syllabus.parentElement.parentElement;
  
        addPadding.classList.toggle('syllabus__padding--add');
        syllabus.children[0].classList.toggle('syllabus__arrow--rotate');
  
        if (answer.clientHeight === 0) {
          height = answer.scrollHeight;
        }
  
        answer.style.height = `${height}px`;
  
        if (currentOpen && currentOpen !== answer) {
          currentOpen.style.height = '0';
          currentOpen.parentElement.parentElement.classList.remove('syllabus__padding--add');
          currentOpen.previousElementSibling.children[0].classList.remove('syllabus__arrow--rotate');
        }
  
        currentOpen = answer;
      });
    });
  };
  
  syllabusShow();