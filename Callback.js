function addNumber(a,b){
    return a + b;
}
function calculate(a,b,Callback){
    var result = Callback(a,b);
    console.log(result);
    
}
calculate(2,3,addNumber)