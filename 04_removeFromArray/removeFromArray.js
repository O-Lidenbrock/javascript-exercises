const removeFromArray = function(array, ...excluded) {
    // console.log(array);
    // console.log(excluded);
    let newArray =[];
    for( a of array){
        // console.log(a);
        if(!excluded.some(element => (a === element))){ //the sum method checks each array element and returns as soon as one is true
            newArray.push(a);
            //console.log(newArray);
        }
    }
    //console.log(newArray);
    return newArray;
};

// removeFromArray([1,2,3,4],3,2);

// Do not edit below this line
module.exports = removeFromArray;
