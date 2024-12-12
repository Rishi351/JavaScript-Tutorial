function kitchen(){
var pack = 'apple';
function bag(){
    console.log('bite of apple');
}
return bag;
}

var packet = kitchen()
// console.log(packet());



function counter(){
    var count = 0;
    return function(){
        count +=1;
        return count
    }

}
var count = counter();
console.log(count());  //Closure means innerfunction will remember the information of outerFunction;
console.log(count());
