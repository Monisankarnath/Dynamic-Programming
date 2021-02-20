//tabulation method to fin dthe best sum of target

const sum=(target,numbers)=>{
    const table=Array(target+1).fill(null);
    table[0]=[];
    for(let i=0;i<=target;i++){
        if(table[i]!==null){
            for(let num of numbers){
                const combination=[...table[i],num];
                //if its null or length more than combination
                if(!table[i+num] || table[i+num].length>combination.length){
                    table[i+num]=combination;
                }
            }
        }
    }
    return table[target];
};
console.log(sum(25,[2,4,3,10,20]));