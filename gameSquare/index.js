const $start = document.querySelector('#start')
$start.addEventListener('click', startGame)
const $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let score = 0
let isGameStarted = false

function startGame() {
    console.log('startGame')

    isGameStarted = true

    console.log('Start')
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'

    const interval = setInterval(function() {
        let time = parseFloat($time.textContent)
        
        if (time === 0) {
            console.log('fin')
            clearInterval(interval);
            isGameStarted = false
            $start.classList.remove('hide')
            $game.style.backgroundColor = '#ccc'
            $game.innerHTML = ""
            

        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

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
   

   box.addEventListener('click', () => {
    console.log(isGameStarted)
        if(!isGameStarted) {return}
       
       score++
       renderBox()

   })

   
//    $game.insertAdjacentElement('afterbegin', box)
   $game.appendChild(box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}