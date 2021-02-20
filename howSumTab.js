//tabulation of how sum

const sum=(target,numbers)=>{
    const numArray=Array(target+1).fill(null);
    // console.log(numArray);
    numArray[0]=[];
    for(let i=0;i<=target;i++){
        if(numArray[i] !== null){
            for(let num of numbers){
                numArray[i+num]=[...numArray[i],num];
            }
        }
    }
    return numArray[target];
};
console.log(sum(5,[4,2]));