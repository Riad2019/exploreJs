function isPrime(n){

    for(var i=1; i<n;i++ ){

        if(n%i==0){

            return "Its not prime number.";
        }
       
    }

    return "Its a prime number.";

}
var result = isPrime(128);
console.log(result);