const isPrime = (number) => {
    let isPrime = true;

    if (number == 0 || number == 1) {
        isPrime = false;
    }
    else if (number == 2 || number == 3) {
        isPrime = true;
    }
    else if (number > 3) {
        if(number % 2 == 0){isPrime = false;}
        else if(number % 3 == 0){isPrime = false;}
        else{
            for (let i = 5; i*i <= number; i = i+6) {
                if (number % (i) == 0 || number % (i+2) == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
    }
    return isPrime;
};

function primes (number1, number2) {
    if(number1 > number2){
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    if(number1 < 1){number1 = 1;}
    if(number2 < 1){number2 = 1;}
    let arr = [];
    for(let i = number1; i<=number2; i++){
        if(isPrime(i)){arr.push(parseInt(i));}
    }
    return arr;
}

module.exports = primes;

//we use better optimized method to check ptime 
//we will swap numbers if 1 is larger than 2 for logic to function well as the input is asking between so it can be both ways