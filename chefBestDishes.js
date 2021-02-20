//target is the number of dishes the chef is going to prepare each taking time
//as 1,2,3... numbers is the rating of the dishes.
//find the maximum total time*rating of target number of dishes
//if 3 dishes and rating is [1,4,-7,13], then output=1*1+2*4+3*13
const tab=(target, numbers) => {
    const table=Array(target+1).fill(0);
    let sum=0;
    let totalRating=0;
    for(let i=0; i < 1<<numbers.length; i++)
    {
        let arr=[];
        let arrDish=[];
        for(let j=0;j<numbers.length;j++){
            if((i & 1<<j) > 0){
                arr=[...arr,numbers[j]];
                if(arr.length != 0  && arr.length === target){
                    arrDish = arr;
                }
            }
        }
        console.log(arrDish)
        // for(let k=0;k < target; k++){
        //     sum=sum+(k+1)*arrDish[k];
        // }
        // console.log(sum);
        // if(sum > totalRating){
        //     totalRating = sum;
        // }
    }
    // return totalRating;

};
tab(3,[-1,2,-7,13]);
// console.log(tab(3,[-1,2,4,6,-6]));