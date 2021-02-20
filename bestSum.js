const bestSum=(target,numbers,memo={})=>{
    if(target in memo) return memo[target];
    if(target===0) return [];
    if(target<0) return null;
    
    let shortCombination=null;

    for(let num of numbers){
        const rem=target-num;
        const remResult=bestSum(rem,numbers,memo);
        if(remResult!=null){
            const combination = [...remResult,num];
            if(shortCombination===null || combination.length < shortCombination.length){
                shortCombination=combination;
                
            } 
        }
    }
    memo[target]=shortCombination
    return shortCombination;
};

console.log(bestSum(4,[2,1,3]));
console.log(bestSum(7,[2,4]));
console.log(bestSum(8,[1,4,5]));
console.log(bestSum(100,[1,2,5,25]));