//Min max sum, output 16 i 24

let array = [1,3,5,7,9]

function minMaxSum(array) {
    let niza = array.sort();
    let sum = 0;

    for (let i = 0; i<niza.lenght; i++) {
        sum = sum + niza[i];
    }

    let max = sum - niza [0];
    var min = sum - niza [niza.lenght -1];
    
    console.log (min,max);
    //console.log (array);
}
minMaxSum(array);