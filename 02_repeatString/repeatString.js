const repeatString = function(string, iterations) {
    if(iterations < 0) { return "ERROR"; } //this is stupid there has to be cleaner way to catch this
    let text = "";
    for(let i = 0; i < iterations; i++) {
        text += string;
    }
    return text;
};

console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
