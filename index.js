

/****************************
      GLOBAL VARIABLES
 ****************************/
let arrayOfDice;
var store = [];






function getHTML(dice) {
    //return `<h1>${dice}</h1>`
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

function generateList(n) {
    let arr = []
    for (let i=0; i<n; i++)
        arr.push(Math.floor(Math.random()*6)+1)
    return arr;
}



function rollDice() {

    arrayOfDice = generateList(6);

    let htmlArray = arrayOfDice.map(e => getHTML(e)).join('');

    document.querySelector('.unsortedDice').innerHTML = htmlArray;

    //document.querySelector('.unsortedDice').innerHTML = arrayOfDice.map(e => getHTML(e)).join('');


    // let str = '';
    // for (let i=0; i<arrayOfDice.length; i++)
    //     str += getHTML(arrayOfDice[i])


    // for (let x of arrayOfDice)
    //     str += getHTML(x);
    // document.querySelector('.unsortedDice').innerHTML = str;


    // for (let x in arrayOfDice)
    //     str += getHTML(arrayOfDice[x]);
    // document.querySelector('.unsortedDice').innerHTML = str;


    // str = arrayOfDice.map(e => getHTML(e));
    // document.querySelector('.unsortedDice').innerHTML = str;
}


function sortDice(){
    selectSort(arrayOfDice);

    let fullStoreDisplay = '';

    for (let list of store) {
        fullStoreDisplay += '<li class="d-flex justify-content-around">' + list.map(e => getHTML(e)).join('') + '</li>';
    }


    // for (let list of store){
    //     fullStoreDisplay += '<li>'
    //     for (let e of list) {
    //         fullStoreDisplay += getHTML(e);
    //     }
    //     fullStoreDisplay += '</li>'
    // }


    // let fullStoreDisplay = store.map(list => `<li>${list.map(e => getHTML(e))}</li>`)

    document.querySelector('.sortPath').innerHTML = fullStoreDisplay;
}

// Input Values Change

//document.querySelector('#roll').addEventListener('click', () => {
//	dice = getHTML(document.querySelector('#diceAmount').value);
//  document.querySelector('.unsortedDice').innerHTML = dice.map(c => getHTML(c)).join('');
//  document.querySelector('.sortPath').innerHTML = '';
//});


function selectSort(array) {
    let arr = array.slice();
    let len = arr.length;
    let min;

    for (i = 0; i < len; i++) {
        min = i;

        // Check the rest of the array
        for (j = i + 1; j < len; j++)
            if (arr[j] < arr[min]) {

                min = j;

                let copyArr = arr.slice();
                store.push(copyArr);
            }

        if (i != min)
            swap(arr, i, min);
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}




// Example Selection Sort

// const selectSort = (arr) => {
//     let min = 0;
//     while (min < arr.length-1){
//         for(let i = min+1; i < arr.length-1; i++) {
//           if (arr[min].num > arr[i].num) {
//             let aux = arr[min];
//             arr[min] = arr[i];
//             arr[i] = aux;
//             store.push(arr.slice());
//           }
//         }
//         min++;
//     }
// 	return arr;
// };

