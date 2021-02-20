//memoization
//js object, keys will be arg to fn, value will be return value

const fib=(n, memo={})=>{
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n]= fib(n-1,memo)+fib(n-2,memo);
    return memo[n];
};
console.log(fib(2));
console.log(fib(20));
console.log(fib(40));
console.log(fib(50));
