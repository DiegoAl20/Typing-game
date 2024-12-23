class TypingGame {
    constructor(objQuote) {
        this.index = 0;
        this.results = document.getElementById('results')
        this.inputUser = document.getElementById('input-user')
        this.textToWrite = document.getElementById('text')
        this.textAuthor = document.querySelector('.author')
        this.getParagraph(objQuote)
        this.lettersSpans = this.createLettersSpans()
        this.bindEvents()
        this.setCurrentLetter()
        this.startTime = null
        this.endTime = null
        this.isStart = false
    }

    startGame() {
        this.startTime = new Date()
    }

    createLettersSpans() {
        const originalText = this.textToWrite.textContent
        this.textToWrite.innerHTML = originalText.split('')
            .map(letter => `<span>${letter}</span>`)
            .join('');

        return Array.from(this.textToWrite.querySelectorAll('span'))
    }

    bindEvents() {
        this.inputUser.addEventListener('keydown', (e) => this.checkInputs(e))
    }

    setCurrentLetter() {
        if (this.index >= this.lettersSpans.length) {
            this.calculateResults()
            return
        }

        this.lettersSpans[this.index].className = 'letter current'
    }

    checkInputs(e) {
        if (!this.isStart) {
            this.startGame()
            this.isStart = true;
        }

        const validKeyPattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ .,;:¿?¡!]$/

        if (!validKeyPattern.test(e.key)) {
            return
        }

        let userInput = e.key;
        let currentSpan = this.lettersSpans[this.index]
        let currentLetter = currentSpan.textContent

        if (currentLetter === ' ') {
            currentSpan.className = ''
        } else if (userInput == currentLetter) {
            currentSpan.className = 'letter correct'
        } else {
            currentSpan.className = 'letter incorrect'
        }

        this.index++
        this.setCurrentLetter()
    }

    calculateResults() {
        this.endTime = new Date()
        const totalLetters = this.lettersSpans.filter(span => span.textContent != ' ').length;
        const correctLetters = this.lettersSpans.filter(span => span.classList.contains('correct')).length
        const incorrectLetters = this.lettersSpans.filter(span => span.classList.contains('incorrect')).length

        const accuracy = ((correctLetters / totalLetters) * 100).toFixed(2)
        const timeMinutes = (this.endTime - this.startTime) / 60000
        const wpm = (((totalLetters + 1) / 5) / timeMinutes).toFixed(0);

        this.results.innerHTML = `
        <h2>Results: </h2>
        <div>
            <p>wpm: <strong><span>${wpm}</span></strong></p>
            <p>Accuracy: <strong><span>${accuracy}%</span></strong></p>
        </div>
        <div>
            <p>Correct Letters: <strong><span>${correctLetters}</span</strong></p>
            <p>Errors: <strong><span>${incorrectLetters}</span></strong></p>
        </div>`
    }

    getParagraph(objQuote) {
        const { quote, author } = objQuote
        this.textToWrite.textContent = quote
        this.textAuthor.textContent = author
    }

    restarGame(objQuote) {
        this.isStart = false
        this.index = 0
        this.inputUser.value = ''
        this.inputUser.focus()

        this.lettersSpans.forEach(span => {
            span.classList.remove('correct', 'incorrect', 'current')
        })

        this.results.innerHTML = ''
        this.getParagraph(objQuote)
        this.lettersSpans = this.createLettersSpans()
        this.setCurrentLetter()
    }
}

export default TypingGame