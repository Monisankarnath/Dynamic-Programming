//Tabulation method
const tab=(n)=>{
    const table=Array(n).fill(0);
    table[1]=1;
    for(let i=0;i<n;i++){
        table[i+1]+=table[i];
        table[i+2]+=table[i];
        
    }
    console.log(table);
    return table[n-1];
};

console.log(tab(6));