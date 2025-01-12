const removeFromArray = function(array, ...excluded) {
    console.log(array)
    let newArray =[];
    for( a of array){
        //console.log(a);
        while(!(excluded.forEach((element) => return(a === element)))){
            newArray.push(a);
            //console.log(newArray);
        }
    }
    //console.log(newArray);
    return newArray;
};

removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
