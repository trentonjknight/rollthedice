function getRandom(){

    let dice = Math.floor(Math.random()*6)+1;


    document.querySelector('.cube').innerHTML= `
        <div class="front side"><h1>${dice}</h1></div>
        <div class="back side"><h1>${dice}</h1></div>
        <div class="left side"><h1>${dice}</h1></div>
        <div class="right side"><h1>${dice}</h1></div>`


    document.querySelector('.unsortedDice').innerHTML= `
        <div class="wrap">
        <div class="cube">
        <div class="front side"><h1>${Math.floor(Math.random()*6)+1}</h1></div>
        <div class="back side"><h1>${Math.floor(Math.random()*6)+1}</h1></div>
        <div class="left side"><h1>${Math.floor(Math.random()*6)+1}</h1></div>
        <div class="right side"><h1>${Math.floor(Math.random()*6)+1}</h1></div>
        </div>
        </div>`
}

function getDice(dice) {
 //   let dice = Math.floor(Math.random()*6)+1;
//    return `<div><h1>${xdice}</h1></div>`
    return `
        <div class="wrap">
            <div class="cube">
                <div class="front side"><h1>${dice}</h1></div>
                <div class="back side"><h1>${dice}</h1></div>
                <div class="left side"><h1>${dice}</h1></div>
                <div class="right side"><h1>${dice}</h1></div>
            </div>
        </div>`

}
function sortCubes() {
let tem = []
    for (let i = 0; i <6; i++) {
    let dice = Math.floor(Math.random()*6)+1;
    tem.push(dice);
    console.log("$$$$$",getDice(dice))

}
return tem
}

console.log(sortCubes())
function rollDice() {
    document.querySelector('.unsortedDice').innerHTML = sortCubes()
}
let test = [3,5,1,7,9,5,67]

const bubbleSort = arr => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;


};
console.log("######",bubbleSort(test))