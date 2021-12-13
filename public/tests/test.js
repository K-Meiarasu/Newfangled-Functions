describe('Slicing Array',function()
{
    it('should return the sliced array',function()
    {
        const foods=['burger','biriyani','pizza','noodles','pazta'];
        expect(slice(foods)).toBe(['biriyani','pizza','noodles','pazta']);
    });
})

describe('Prime',function(){
    it('should return array of prime numbers',function(){
        const numberArray = [12,324,213,4,2,3,45,4234]; 
        expect(isPrime(numberArray)).toBe([2,3]);
    });
    it('should return the same array',function(){
        const numberArray = [2,3,5,7,11]; 
        expect(isPrime(numberArray)).toBe([2,3,5,7,11]);
    });
})

describe('Non-Prime',function(){
    it('should return array of non-prime numbers',function(){
        const numberArray = [12,324,213,4,2,3,45,4234]; 
        expect(isNonPrime(numberArray)).toBe([12,324,213,4,45,4234]);
    });
})

describe('Even',function(){
    it('should return array of even numbers',function(){
        const numberArray = [12,324,213,4,2,3,45,4234]; 
        expect(isEven(numberArray)).toBe([12,324,4,2,4234]);
    });
    it('should return the same array',function(){
        const numberArray = [12,24,36,48,60]; 
        expect(isEven(numberArray)).toBe([12,24,36,48,60]);
    });
})

describe('Square',function(){
    it('should return array of squared numbers',function(){
        const numberArray = [1,2,3,4,5]; 
        expect(square(numberArray)).toBe([1,4,9,16,25]);
    });
})

describe('Multiplication',function(){
    it('should return the product of array elements',function(){
        const numberArray = [1,2,3,4,5]; 
        expect(multiply(numberArray)).toBe(120);
    });
})