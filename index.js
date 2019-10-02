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

function getDice() {
    let dice = Math.floor(Math.random()*6)+1;
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

function rollDice() {
    document.querySelector('.unsortedDice').innerHTML = getDice() + getDice() + getDice() + getDice() + getDice();
}