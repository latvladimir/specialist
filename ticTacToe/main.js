const game = document.querySelector('#game');
const fields = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]
let count = 0

let isXTurn = true;
function turn(ev) {
  let char = isXTurn ? 'x' : 'o';
  
  let i = ev.target.dataset['i']
  let j = ev.target.dataset['j']
  
  if (fields[i][j] != '') return
  
  fields[i][j] = char
  count++
 
  draw(fields);
  
  isXTurn = !isXTurn
  
}

function checkWinner(){
  if (count === 9) {return winner('ТАНОС')}
  if (fields[0][0] + fields[0][1] + fields[0][2] === 'xxx' ||
      fields[1][0] + fields[1][1] + fields[1][2] === 'xxx' ||
      fields[2][0] + fields[2][1] + fields[2][2] === 'xxx' ||
      fields[0][0] + fields[1][0] + fields[2][0] === 'xxx' ||
      fields[0][1] + fields[1][1] + fields[2][1] === 'xxx' ||
      fields[0][2] + fields[1][2] + fields[2][2] === 'xxx' ||
      fields[0][0] + fields[1][1] + fields[2][2] === 'xxx' ||
      fields[0][2] + fields[1][1] + fields[2][0] === 'xxx'   )    {return winner('x')} 
  if (fields[0][0] + fields[0][1] + fields[0][2] === 'ooo' ||
      fields[1][0] + fields[1][1] + fields[1][2] === 'ooo' ||
      fields[2][0] + fields[2][1] + fields[2][2] === 'ooo' ||
      fields[0][0] + fields[1][0] + fields[2][0] === 'ooo' ||
      fields[0][1] + fields[1][1] + fields[2][1] === 'ooo' ||
      fields[0][2] + fields[1][2] + fields[2][2] === 'ooo' ||
      fields[0][0] + fields[1][1] + fields[2][2] === 'ooo' ||
      fields[0][2] + fields[1][1] + fields[2][0] === 'ooo'   )    {return winner('o')} 
}

function winner (a) {
  
  alert('ПОБЕДИЛ ' + a); 
   for (let i = 0; i < 3; i++) {for (let j = 0; j < 3; j++) {fields[i][j] = ''}};
   count = 0;
   draw (fields);
  }

function draw (fields) {
  game.innerHTML = "";
  for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerHTML = fields[i][j]
          
            cell.setAttribute('data-i', i)
            cell.setAttribute('data-j', j)
            
            game.appendChild(cell);
            
            if (count > 4) {setTimeout(checkWinner, 1000)};

          
            cell.addEventListener('click', turn)
          
          
  }  
 }
}

draw(fields)
