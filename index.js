const getVal = (number)
const getDice = (end) => {
    const getRandomDice = () => ({
        number: Math.floor(Math.random() * 6) + 1,
    });
    let dice = [];
    for (let i = 0; i < end; i++) dice.push(getRandomDice());
    return dice;
}

var log = [];
let dice = [];
const selection = (ryan) => {
   let min = 0;
   while (min < ryan.length-1){
       for(let i = min+1; i < ryan.length-1; i++) {
         if (ryan[min].num > ryan[i].num) {
           let store = ryan[min]; ryan[min] = ryan[i]; ryan[i] = store;
           log.push(ryan.slice(0));
         }
       }
       min++;
   }
        return ryan;
};

const showMeTheCube = (cube) => `<div class="cube"><span>${getVal(cube.num)}</span></div>`;

document.querySelector('#roll').addEventListener('click', () => {
    dice = getDice(document.querySelector('#diceAmount').value);
 document.querySelector('.unsortedDice').innerHTML = dice.map(cube => showMeTheCube(cube)).join('');
 document.querySelector('.sortPath').innerHTML = '';
});
document.querySelector('#sort').addEventListener('click', () => {
 selection(dice);
 document.querySelector('.sortPath').innerHTML = log.map((iter,path) => `<li><i>${path}</i><div class="cube">${iter.map(cube => showMeTheCube(cube)).join('')}</div></li>`).join('');
});