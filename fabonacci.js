var fibo =[0,1];
function fibonacci(n){
    for(var i=0; i<=10;i++ ){

        fibo[i] = fibo[i-1]+fibo[i-2];

    }

    return fibo;
}
 console.log(fibo);
 