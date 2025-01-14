const sumAll = function(int1, int2) {
    let sum = 0

    if(!Number.isInteger(int1) || !Number.isInteger(int2)) { return "ERROR" } //check type is int

    if(int1 <= 0 || int2 <= 0){ return "ERROR"; } //no negative #s

    if(int1 >= int2){ let i = int2; int2 = int1; int1 = i; } //smaller first

    for(let i = int1; i <= int2; i++){
        sum += i;
    }
    console.log(sum);
    return sum;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
