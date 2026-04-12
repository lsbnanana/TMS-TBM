const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');

const BALL_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#2AB7CA', '#F0CF65', '#FFD166', '#06D6A0', '#118AB2'];

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    lottoNumbersContainer.innerHTML = '';
    let delay = 0;
    for (const number of numbers) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.textContent = number;
        
        const randomColor = BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)];
        numberElement.style.backgroundColor = randomColor;
        numberElement.style.animationDelay = `${delay}s`;
        delay += 0.1;

        lottoNumbersContainer.appendChild(numberElement);
    }
}

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
});

// Initial generation
displayNumbers(generateLottoNumbers());
