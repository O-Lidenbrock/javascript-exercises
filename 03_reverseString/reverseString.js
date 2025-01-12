const reverseString = function(inputString) {
    let inputArray = Array.from(inputString)
    console.log("first array: " + inputArray);

    outputString = "";
    for(let a = 1; a <= inputArray.length; a++){
        outputString += inputArray[(inputArray.length - a)];
        //console.log(outputString)
    }
    return outputString;

};

// Do not edit below this line
module.exports = reverseString;
