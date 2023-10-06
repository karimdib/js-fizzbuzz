for (let index = 0; index < 100; index++){
    n = index + 1

    if(n % 3 === 0 && n % 5 === 0){
        n ='FizzBuzz'
    }
    else if(n % 3 ===0){
        n = 'Fizz'
    }else if (n % 5 === 0){
        n = 'Buzz'
    }
    console.log(n)
}