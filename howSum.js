const howSum=(target,numbers,memo={})=>{
    if(target in memo) return memo[target];
    if(target===0) return [];
    if(target<0) return null;

    for(num of numbers){
        const rem=target-num;
        const remResult=howSum(rem,numbers,memo);
        if(remResult!=null){
            memo[target]=[...remResult,num];
            return memo[target];
        }
    }
    memo[target]=null;
    return null;
};

console.log(howSum(4,[2,1,3]));
console.log(howSum(7,[2,4]));
console.log(howSum(300,[7,15]));
//m=target sum
//n=numbers.length
//time:0(n^m+m)
//space:0(m);