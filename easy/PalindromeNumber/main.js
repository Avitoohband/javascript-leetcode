const isPalindrome = (x) => {
    if(x < 0) return false;
    let reverse = 0 ; 
    let num = x;

    while(x>0){
        reverse = (reverse * 10) + (x%10);
        x = Math.floor(x/10);
    }

    return num === reverse;
};
