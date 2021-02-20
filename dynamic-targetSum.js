//memoize
const targetSum=(target,numbers, memo={})=>{
    if(target in memo) return memo[target];
    if(target===0) return true;
    if(target<0) return false;

    for(let num of numbers){
        const rem=target-num;
        if(targetSum(rem,numbers,memo)===true){
            memo[target]=true;
            return true;
        } 
    }
    memo[target]=false;
    return false;
};

console.log(targetSum(4,[2,1,3]));
console.log(targetSum(7,[2,4]));
console.log(targetSum(300,[7,14]));