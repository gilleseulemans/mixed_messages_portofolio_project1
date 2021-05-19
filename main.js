// -create a string object that is build from 3 different types of data
//the output of the object Is a string created of 3 datas from 3 different arrays
var quote = {
    firstData: "",
    secondData: "",
    thirdData: "",
    fullQuote: function(){
        return returnQuote();
    }
}

const firstArray = ['star', 'moon', 'sun', 'comet'];
const secondArray = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'];
const thirdArray = ['go out and eat', 'not read this', 'play more', 'trust no one'];

//- create a function that gives a random number based on the length of the array 
//and outputs a data on the given random numbers index
function randomIndex(array){

    var randomInt = Math.floor(Math.random() * array.length) + 1;  // returns a random integer from 1 to 10
    return randomInt;
}

function returnQuote(){
    quote.firstData = firstArray[randomIndex(firstArray)];
    quote.secondData = secondArray[randomIndex(secondArray)];
    quote.thirdData = thirdArray[randomIndex(thirdArray)];
    return quote.firstData + " " + quote.secondData + " " + quote.thirdData;
}

console.log(quote.fullQuote());