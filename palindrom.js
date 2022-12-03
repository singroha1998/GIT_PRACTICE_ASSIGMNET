function palindrome(str){
    let bag=str.split().reverse();
    if(bag==str){
        console.log("Palindrome");
    }
    else{
        console.log("Not palindrome");
    }
}
palindrome("naman");