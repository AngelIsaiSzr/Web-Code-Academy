// Lista de frases motivadoras e inspiradoras
const phrases = [
    { quote: "La acción es la llave fundamental de todo éxito.", author: "Pablo Picasso" },
    { quote: "No dejes que alguien defina tus límites sólo por el lugar de donde vienes. Tu único límite es tu alma.", author: "Chef Gusteau - Ratatouille" },
    { quote: "El trabajo duro es inútil para aquellos que no creen en sí mismos.", author: "Naruto Uzumaki" },
    { quote: "No confíes en las personas cuyos sentimientos cambian con el tiempo. Confía en las personas cuyos sentimientos siguen siendo los mismos incluso cuando el tiempo cambie.", author: "Bob Marley" },
    { quote: "Aquellos suspiros a tu lado fueron los más piadosos que los sueños pudieron regalar a la vida de una simple mortal.", author: "L . M ." },
    { quote: "El secreto de la felicidad no está en obtener lo que anhelamos sino en amar lo que tenemos...", author: "Carlos Balaguer" },
    { quote: "La victoria se consigue apelando a la inteligencia, nunca por pura fuerza.", author: "Ludwig von Mises" },
    { quote: "Es tu responsabilidad perseguir lo que importa.", author: "Chris Gardner" },
    { quote: "Lo intentaste. Fracasaste. No importa. Inténtalo de nuevo. Fracasa otra vez. Fracasa mejor.", author: "Samuel Beckett" },
    { quote: "La mejor preparación para mañana es hacer lo mejor que puedas hoy.", author: "H. Jackson Brown, Jr." },
    { quote: "No hay nada imposible para un corazón valiente.", author: "El Rey León" },
    { quote: "¡Es peligroso ir solo! Toma esto.", author: "The Legend of Zelda" },
    { quote: "La vida es como una caja de chocolates, nunca sabes lo que te va a tocar.", author: "Forrest Gump" },
    { quote: "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.", author: "Charles R. Swindoll" },
    { quote: "El éxito no es final, el fracaso no es fatal: lo que cuenta es el coraje para continuar.", author: "Winston Churchill" },
    { quote: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { quote: "No te rindas, cada fracaso es una oportunidad para empezar de nuevo con más experiencia.", author: "Henry Ford" },
    { quote: "Si no compartes el dolor de alguien, nunca podrás entender a los demás.", author: "Nagato" },
    { quote: "En el mundo ninja, aquellos que rompen las reglas son escoria, es cierto. Pero aquellos que abandonan a un amigo son peor que escoria.", author: "Obito Uchiha" },
    { quote: "Dices que tienes corazón, pero sólo lo dices porque sientes sus latidos. Eso no es corazón, es una máquina que, al compás que se mueve, hace ruido.", author: "Gustavo Adolfo Bécquer" }
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