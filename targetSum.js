const targetSum=(target,numbers)=>{
    if(target === 0) return true;
    if(target<0) return false;
    for(let num of numbers){
        const rem=target-num;
        if(targetSum(rem,numbers)===true){
            return true;
        }
    }
    return false;
};
console.log(targetSum(4,[2,1,3]));
console.log(targetSum(7,[2,4]));
console.log(targetSum(300,[7,14]));