//let num;
function isLeapYear(num){
    return((num%4==0 && num%100!=0)||(num%400==0));
}
const leapYear = isLeapYear(2000);
console.log(leapYear);