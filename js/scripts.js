/* ===== Loader =====*/
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
});

const elements = document.querySelectorAll('.animate-on-scroll');

function animateOnScroll() {
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
}

animateOnScroll();

window.addEventListener('scroll', () => {
    animateOnScroll();
});

function menu() {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });
};

menu();

function questionsShow() {
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
};

questionsShow();

const images = [
    "../images/computer.png",
    "../images/programmer.png",
    "../images/code.png",
    "../images/code-image3.png"
];

const imgElement = document.getElementById("knowledge-img");
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
}, 5000);

function sliderTestimonios() {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let currentTestimony = 1;
    let timerId;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        clearInterval(timerId);
        const currentTestimonyEl = document.querySelector('.testimony__body--show');
        currentTestimonyEl.classList.remove('testimony__body--show');
        currentTestimony += add;
        if (currentTestimony > sliders.length) {
            currentTestimony = 1;
        }
        if (currentTestimony < 1) {
            currentTestimony = sliders.length;
        }
        sliders[currentTestimony - 1].classList.add('testimony__body--show');
        timerId = setInterval(nextTestimony, 6500);
    };

    function nextTestimony() {
        clearInterval(timerId);
        const current = document.querySelector('.testimony__body--show');
        current.classList.remove('testimony__body--show');
        currentTestimony++;
        if (currentTestimony > sliders.length) {
            currentTestimony = 1;
        }
        sliders[currentTestimony - 1].classList.add('testimony__body--show');
        timerId = setInterval(nextTestimony, 6500);
    }

    timerId = setInterval(nextTestimony, 6500);
}

sliderTestimonios();

function highlightCard(element) {
    let activeCard = document.querySelector(".course__element--active");

    if (activeCard && activeCard !== element) {
        activeCard.classList.remove("course__element--active");
    }

    element.classList.add("course__element--active");
}