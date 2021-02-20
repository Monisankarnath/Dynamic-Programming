//tabulation method to find
const tab=(target, wordArr)=>{
    const arr = Array(target.length+1).fill(false);
    arr[0]=true;
    for(let i=0; i<=target.length; i++){
        if(arr[i] === true){
            for(let word of wordArr){
                if(target.slice(i,i+word.length) === word){
                    arr[i+word.length] = true;
                }
            }
        }
    }
    return arr[target.length];
};
console.log(tab("abcdef",["ab","abc","cd","def","abcd"]));
console.log(tab("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
console.log(tab("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
console.log(tab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["eee","e","ee","eeeeee","eeeeeeeeeee","eeeeeeeeee","eeeeeeeeeeeeeeeee"]));