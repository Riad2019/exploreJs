/**3!=1*2*3
4!=1*2*3*4
5!=1*2*3*4 */
function fac ( n){
    var factorial=1;
    for(var i=1 ; i<=n ; i++){
        factorial= factorial*i;
        
        
    }
    return factorial;
    
}
const result = fac(5);
console.log(result);
