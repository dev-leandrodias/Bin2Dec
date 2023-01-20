const inputBinary = document.getElementById('inputBinary');
const inputDecimal = document.getElementById('inputDecimal');

const regex = '^[0-1]{0,8}$';


inputBinary.addEventListener('keyup', function (evt) {


    // get value input
    let value = inputBinary.value

    let retult = value.match(new RegExp(regex))
    
    if (!retult) {
        inputDecimal.value =0
        return;
    }


    // create variable
    let numberConver = 0;

    // get size value input
    let size = String(value).length;

    // accesses all values ​​of the variable
    for (let i = 0; i < size; i++) {
        
        // creates the base of power
        let base = size - i - 1;
    
        // increments the value of the operation on the variable
        numberConver += String(value)[i] * Math.pow(2, base);
    
    }
     
    // insert value into input
    inputDecimal.value = numberConver
});