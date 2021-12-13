function slice(foods){
    const modifiedArray;
    modifiedArray=foods.slice(1,4);
    return modifiedArray
}

/* */

function isPrime(numberArray){
    var i,j;
    const modified=[]
    for(i=0,pos=0;i<numberArray.length;i++)
    {
        var count=1
        for(j=2;j<=numberArray[i];j++){
            if(numberArray[i]%j==0){
                count++;
            }
        }
        if(count==2){
            modified[pos]=numberArray[i];
            pos++
        }
    }
    return modified
}

/* */

function isNonPrime(numberArray){
    var i,j;
    const modified=[]
    for(i=0,pos=0;i<numberArray.length;i++)
    {
        var count=1
        for(j=2;j<=numberArray[i];j++){
            if(numberArray[i]%j==0){
                count++;
            }
        }
        if(count!=2){
            modified[pos]=numberArray[i];
            pos++
        }
    }
    return modified
}

/* */

function isEven(numberArray){
    var i;
    const even=[]
    for(i=0,pos=0;i<numberArray.length;i++)
    {
        if(numberArray[i]%2==0){
            even[pos]=numberArray[i]
            pos++
        }
    }
    return even
}

/* */

function square(myArray){
    for(let i=0;i<myArray.length;i++){
        myArray[i]=myArray[i]*myArray[i]
    }
    return myArray
}

/* */

function multiply(arr){
    var pdt=1;
    for(let i=0;i<arr.length;i++)
    {
        pdt=pdt*arr[i]
    }
    return pdt
}