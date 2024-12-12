//CHECH STRING IS PALINDROME OR NOT

function check_palindrome(s){
    var rev = "";
for(var i=s.length -1; i >=0; i--){
    rev = rev + s[i]
}
if(rev === s){
    return 'it is palindrome';
}else{
    return 'it is not palindrome';
}

}

var s = 'madam';
var answer = check_palindrome(s)
console.log(answer);
