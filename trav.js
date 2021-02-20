// const trav=(m,n)=>{
//     if(m===1 && n===1) return 1;
//     if(m===0 || n===0) return 0;
//     return trav(m-1,n)+trav(m,n-1);
// };
const trav=(m,n,memo={})=>{
    const key=m+','+n;
    if(key in memo) return memo[key];
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;
    memo[key]=trav(m-1,n,memo)+trav(m,n-1,memo);
    return memo[key];
}
console.log(trav(2,3));
console.log(trav(6,7));
console.log(trav(18,18));