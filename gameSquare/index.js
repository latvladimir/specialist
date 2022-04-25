const $start = document.querySelector('#start')
$start.addEventListener('click', startGame)
const $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let score = 0

function startGame() {

    console.log('Start')
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'

    setInterval(function() {
        let time = parxeFloat($time.textContent)
        console.log('1')}, 1000)

    renderBox()

}

function renderBox() {
    $game.innerHTML = ""
   const box = document.createElement('div')
   box.style.height = box.style.width = `${getRandom(40, 80)}px`
   box.style.position = 'absolute'
   box.style.backgroundColor = `#${getRandom(100, 200)}`
   box.style.top = `${getRandom(40, 200)}px`
   box.style.left = `${getRandom(40, 200)}px`
   box.style.cursor = 'pointer'
   console.log('finish')
   score++

   box.addEventListener('click', renderBox)

   
//    $game.insertAdjacentElement('afterbegin', box)
   $game.appendChild(box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}