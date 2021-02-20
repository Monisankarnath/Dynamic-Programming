const insertionSort=(numbers)=>{
    for(let i=1;i<numbers.length;i++){
        let a=numbers[i];
        for(let j=i-1;j>=0;j--){
            if(numbers[j]>a){
                numbers[j+1]=numbers[j];
                numbers[j]=a;
            }
        }
    }
    return numbers;
};
console.log(insertionSort([2,3,1,5,7,6]));
