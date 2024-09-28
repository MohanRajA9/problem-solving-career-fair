let n = 11

function checkPrime(num) {
    //Get the userInput    
    let number = num

    //Initialize the variable to count number of factors
    let numberOfFactors = 0

    //Generate the numbers to divide
    for (let start = 1;start <= number ; start++) {
        if(number % start == 0 ){
            //Increment the value 
            numberOfFactors++
        }
    }

    //Check the number of factors
    if(numberOfFactors>2){
        return "Not a Prime"
    }else{
        return "Prime"
    }

}

console.log(checkPrime(n))


