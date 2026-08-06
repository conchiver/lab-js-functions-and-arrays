// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numero1, numero2) {
    if (numero1 > numero2){
        return(numero1)
    }
    else return(numero2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(words) {

    if (words.length === 0) {
        return null;
    }

    let pivote = words[0];

    for(let i =0; i<words.length; i++){
        
            if (words[i].length > pivote.length ){
                pivote = words[i];
            }
    }
    return pivote;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if  (numbers == [])
        return 0;

    if (numbers.length == 1 )
        return numbers[0];

    let suma=0;

    for (let i=0; i < numbers.length; i++){
        suma += numbers[i];
    }
    return suma;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let suma=0;
    if (numbers2.length==0){
        return 0
    }
    if (numbers2.length==1){
        return numbers2[0];
    }
    for(let i=0; i < numbers2.length; i++){
        suma += numbers2[i];
    }
    return suma/numbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, palabra) {
    if (words2.length==0){
        return null;
    }
    for(let i=0; i<words2.length; i++){
        if(palabra == words2[i]){
            return true;
        }
    }
    return false;
}

//terminado