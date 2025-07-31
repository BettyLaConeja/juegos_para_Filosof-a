
const quiz = [
    {
        question: "¿Qué estudia la teoría del conocimiento según Johannes Hessen?",
        options: [
            "La historia de la filosofía",
            "El conocimiento humano y su estructura",
            "La moral y la ética",
            "El comportamiento social"
        ],
        answer: 1
    },
    {
        question: "¿Qué dos elementos están involucrados en el conocimiento?",
        options: [
            "Razón e intuición",
            "Verdad y mentira",
            "Sujeto y objeto",
            "Conciencia e inconsciente"
        ],
        answer: 2
    },
    {
        question: "¿Qué es la 'imagen' en el proceso del conocimiento?",
        options: [
            "Una fotografía del objeto",
            "Un símbolo del sujeto",
            "Una copia exacta del objeto",
            "Una representación del objeto en la conciencia"
        ],
        answer: 3
    },
    {
        question: "¿Cuál es la función de la imagen según Hessen?",
        options: [
            "Reemplazar al objeto",
            "Separar al sujeto del objeto",
            "Intermediar entre sujeto y objeto",
            "Eliminar la percepción"
        ],
        answer: 2
    },
    {
        question: "¿Qué significa que el conocimiento es objetivo?",
        options: [
            "Es siempre verdadero",
            "Tiene las características del objeto",
            "No depende del sujeto",
            "Está basado en la experiencia"
        ],
        answer: 1
    },
    {
        question: "¿Qué rol cumple el sujeto en el conocimiento?",
        options: [
            "Es completamente pasivo",
            "Sólo observa sin intervenir",
            "Es receptivo pero también activo",
            "Genera el objeto"
        ],
        answer: 2
    },
    {
        question: "¿Qué afirma Hessen sobre la receptividad del sujeto?",
        options: [
            "Implica debilidad",
            "Es incompatible con la actividad",
            "Significa pasividad total",
            "Es compatible con la espontaneidad"
        ],
        answer: 3
    },
    {
        question: "¿Qué define al conocimiento verdadero según Hessen?",
        options: [
            "Su antigüedad",
            "Su complejidad",
            "Su concordancia con el objeto",
            "Su popularidad"
        ],
        answer: 2
    },
    {
        question: "¿Cómo define Hessen al error?",
        options: [
            "Como una forma de conocimiento",
            "Como conocimiento diferente",
            "Como conocimiento no racional",
            "Como ilusión o conocimiento falso"
        ],
        answer: 3
    },
    {
        question: "¿Cuál es la relación central en el conocimiento?",
        options: [
            "Entre imágenes y símbolos",
            "Entre sujeto y objeto",
            "Entre lenguaje y pensamiento",
            "Entre ciencia y arte"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const resultEl = document.getElementById('result');

function showQuestion() {
    const q = quiz[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';
    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = quiz[currentQuestion].answer;
    if (selected === correct) {
        feedbackEl.textContent = '¡Correcto!';
        score++;
    } else {
        feedbackEl.textContent = 'Incorrecto.';
    }
    nextButton.style.display = 'inline-block';
}

nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        showQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    resultEl.textContent = `Puntaje final: ${score} de ${quiz.length}`;
    resultEl.classList.remove('hidden');
}

showQuestion();
