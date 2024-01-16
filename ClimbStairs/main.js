var stairs = 50;

var climbStairs = function(n, cases = {}) {
    if(n in cases) return cases[n];
    if(n == 0 ) return 1;
    if(n < 0 ) return 0;
    
    cases[n] =  climbStairs(n - 1, cases) + climbStairs(n - 2, cases);
    return cases[n] ;
};

console.log(climbStairs(stairs));