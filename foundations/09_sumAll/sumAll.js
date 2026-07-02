const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || !Number.isInteger(a)){
        return "ERROR";
    }else if(b < 0 || !Number.isInteger(b)){
        return "ERROR";
    }else{
        let c = a - b;

        if(c > 0){
            for(let i = b; i <= a; i++){
                sum += i;
            }
        }else if(c < 0){
            for(let i = a; i <= b; i++){
                sum += i;
            }
        }else if(c = 0){
            sum = a;
        }
        
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
