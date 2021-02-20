const tab=(target, wordBank) => {
    const arr=Array(target.length+1)
        .fill()
        .map(() => []);
    arr[0] =[[]];
    for(let i=0; i<=target.length;i++){
        for(let word of wordBank){
            if(target.slice(i,i+word.length) === word){
                const combi = arr[i].map(subArray => [...subArray,word]);
                arr[i+word.length].push(...combi);
            }
        }
    }
    return arr[target.length];
};


console.log(tab("purple",["purp","p","ur","le","purpl"]));
console.log(tab("abcdef",["ab","abc","cd","def","abcd"]));
console.log(tab("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
console.log(tab("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
console.log(tab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["eee","e","ee","eeeeee","eeeeeeeeeee","eeeeeeeeee","eeeeeeeeeeeeeeeee"]));