// Lista de frases motivadoras e inspiradoras
const phrases = [
    { quote: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito.", author: "Albert Schweitzer" },
    { quote: "El fracaso no es una opción. Todos tienen que tener éxito.", author: "Arnold Schwarzenegger" },
    { quote: "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje de continuar.", author: "Winston Churchill" },
    { quote: "El éxito no es la llave de la felicidad. La felicidad es la llave del éxito. Si amas lo que haces, tendrás éxito.", author: "Herman Cain" },
    { quote: "Lo que importa no es si fallas o no, es si te levantas o no.", author: "Vince Lombardi" },
    { quote: "La pasión es lo que te hace levantarte por la mañana sin quejarte.", author: "Lou Holtz" },
    { quote: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", author: "Robert Collier" },
    { quote: "El mundo cambia con tu ejemplo no con tu opinión.", author: "Paulo Coelho" },
    { quote: "Creo que la suerte es la oportunidad que se encuentra con la preparación.", author: "Scarlett Johansson" },
    { quote: "Si haces lo que siempre has hecho, llegarás donde siempre has llegado.", author: "Tony Robbins" },
    { quote: "Ahora veo que las circunstancias de nuestro nacimiento no importan. Es lo que hacemos con el regalo de la vida lo que nos define.", author: "MewTwo - Pokemon" },
    { quote: "La lógica te llevará desde A hasta B. La imaginación te llevará a cualquier parte.", author: "Albert Einstein" },
    { quote: "El pasado puede doler, pero según lo veas puedes huir de él o aprender de él.", author: "Rafiki - El Rey León" },
    { quote: "La gloria no consiste en no caer nunca, sino más bien en levantarse las veces que sea necesario.", author: "Mario Benedetti" },
    { quote: "Empieza donde estás.", author: "Chris Gardner" },
    { quote: "La gente que no puede hacer algo por sí misma, quiere decirte que no puedes hacerlo. Si quieres algo, ve a buscarlo. Punto.", author: "Chris Gardner" },
    { quote: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" },
    { quote: "Aprender a dudar es aprender a pensar.", author: "Octavio Paz" },
    { quote: "La vida no nos da un propósito. Nosotros le damos propósito a la vida.", author: "Flash - The Flash" },
    { quote: "Todo es imposible hasta que alguien lo hace.", author: "Batman" }
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

// Imagenes
function imagesShow() {
    const images = [
        "../images/web1.jpg",
        "../images/web2.jpg",
        "../images/web3.jpg",
        "../images/web4.jpg",
        "../images/web5.jpg"
    ];

    const imgElement = document.getElementById("course__img");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.classList.remove("fade-in");
        imgElement.classList.add("fade-out");
        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.classList.remove("fade-out");
            imgElement.classList.add("fade-in");
        }, 500);
    }, 6500);
}

imagesShow();

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