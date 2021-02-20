
const countConstruct=(target, wordBank)=>{
    if(target==="") return 1;
    let totalCount=0;
    for(let word of wordBank){       
        if(target.indexOf(word) === 0){
            const numRestWays = countConstruct(target.slice(word.length), wordBank);
            totalCount+=numRestWays;
        }
    }
    return totalCount;
};
const countMemoConstruct=(target, wordBank, memo={})=>{
    if(target in memo) return memo[target];
    if(target === "") return 1;

    let totalCount=0;
    for(let word of wordBank){
        if(target.indexOf(word)===0){
            const numRestWays=countMemoConstruct(target.slice(word.length),wordBank,memo);
            totalCount+=numRestWays;
        }
    }
    memo[target]=totalCount;
    return totalCount;
};
// console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]));
// console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(countConstruct("enterapotentpotcccdeeeeeeeeeee",["a","p","ent","enter","ot","o","t","ee","e","eeeeee","eeee","c","cc","ddddddddd","d"]));
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["eee","e","ee","eeeeee","eeeeeeeeeee","eeeeeeeeee","eeeeeeeeeeeeeeeee"]));

console.log(countMemoConstruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(countMemoConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
 console.log(countMemoConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["eee","e","ee","eeeeee","eeeeeeeeeee","eeeeeeeeee","eeeeeeeeeeeeeeeee"]));