const tab=(target, wordArr)=>{
    const table = Array(target.length+1).fill(0);
    table[0] = 1;
    for(let i=0;i<=target.length;i++){
        // if(table[i] === 1){
            for(let word of wordArr){
                if(target.slice(i,i+word.length) === word){
                    table[i+word.length] += table[i];
                }
            }
        // }
    }
    return table[target.length];

};


console.log(tab("purple",["purp","p","ur","le","purpl"]));
console.log(tab("abcdef",["ab","abc","cd","def","abcd"]));
console.log(tab("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
console.log(tab("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
console.log(tab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["eee","e","ee","eeeeee","eeeeeeeeeee","eeeeeeeeee","eeeeeeeeeeeeeeeee"]));