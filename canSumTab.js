//Tabulation method to find if we can find the target sum from a given arrray

const tab=(target, numbers)=>{
    const tab=Array(target+1).fill(false);
    tab[0]=true;
    for(let i=0;i<=target;i++){
        if(tab[i]===true){
            for(let num of numbers){
                if(i+num <= target) tab[i+num]=true;
            }
        }
    }
    // console.log(tab);
    return tab[target];
};
console.log(tab(5,[7,3,2]));