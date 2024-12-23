import TypingGame from "./TypingGame.mjs"

const quotes = [
    { quote: "Era el mejor de los tiempos, era el peor de los tiempos, la edad de la sabiduría y la locura.", author: "Charles Dickens, Historia de dos ciudades" },
    { quote: "No todo lo que es oro reluce, ni toda la gente errante anda perdida; lo viejo que es fuerte no se marchita.", author: "J.R.R. Tolkien, El Señor de los Anillos" },
    { quote: "Y cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti.", author: "Friedrich Nietzsche, Más allá del bien y del mal" },
    { quote: "Todos los animales son iguales, pero algunos animales son más iguales que otros.", author: "George Orwell, Rebelión en la granja" },
    { quote: "La felicidad sólo es real cuando se comparte.", author: "Jon Krakauer, Hacia rutas salvajes" },
    { quote: "No se puede matar al tiempo sin herir la eternidad.", author: "Henry David Thoreau, Walden" },
    { quote: "No es la fuerza, sino la perseverancia, la madre de todo éxito.", author: "Samuel Johnson" },
    { quote: "Hay lugares que recordaremos por siempre, aunque otros hayan cambiado.", author: "John Lennon" },
    { quote: "No podemos cambiar el pasado, pero podemos comenzar hoy a escribir un futuro completamente diferente.", author: "Carl Bard" },
    { quote: "El momento más oscuro de la noche es justo antes del amanecer.", author: "Thomas Fuller" },
    { quote: "Las palabras son, en mi no tan humilde opinión, nuestra fuente inagotable de magia.", author: "J.K. Rowling, Harry Potter y las Reliquias de la Muerte" },
    { quote: "Los que sueñan de día son conscientes de muchas cosas que escapan a los que sueñan solo de noche.", author: "Edgar Allan Poe" },
    { quote: "No es la carga lo que te rompe, sino la forma en que la llevas.", author: "Lou Holtz" }
]

const game = new TypingGame(quotes[0])
const buttonNewGame = document.getElementById('new-game');
const inputUser = document.getElementById('input-user')

buttonNewGame.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    game.restarGame(quotes[randomNumber])
})

document.addEventListener('click', (e) => {
    if (e.target !== buttonNewGame) {
        inputUser.focus();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        inputUser.focus();
    }
})