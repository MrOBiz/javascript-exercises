const removeFromArray = function(array, ...args) {
    
    return array.filter(x => !args.includes(x));

    //ONLY ONE VAL
    /*for(let i =0; i < array.length; i++){
        if(array[i] == val){
            array.splice(i, 1);
            i--;
        }
    }*/

    //return array;
};

// Do not edit below this line
module.exports = removeFromArray;
