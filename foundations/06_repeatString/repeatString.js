const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }else{
        let str = "";
        while(num > 0){
            str = str + string;
            num--;
        }
        return str;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
