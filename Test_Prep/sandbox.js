const myArray = [1,2,1,2,7,3,3,5,6,7,8,6,4];
const myString = 'Good Morning Ghana';
const myInt = 24457;


// Add to the beginning of an array
const AddToBeginning = (myString, myArray) => {
    return myArray.unshift(myString);
    //or 
    return [myString,...myArray];
}


const AddToEnd = (myString, myArray) => {
    return myArray.push(myString);
    //or 
    return [...myArray,myString];
}


// Show Distinct Values in a List
const DistinctValues = (input) => {
     return [...new Set(input)];
}


// Count Distinct pairs in a list 
// Input Array elements are 0-9
const DistinctPair = (inputArray) => {
    let output = [];

    // During the loop if the value at an index is already negative
    // Return that number
    // Else
    // Negate the value stored at the index of each number
    for(let i = 0;i < inputArray.length; i++)
    {
        if(inputArray[Math.abs(inputArray[i])-1] < 0)
        {
            output.push(Math.abs(inputArray[i]));
        }
        inputArray[Math.abs(inputArray[i])-1] = - inputArray[Math.abs(inputArray[i])-1]; 
    }

    // // Get the frequency of each digit in the array
    // let tempArray = new Array(10).fill(0);

    // for(let i = 0; i< inputArray.length; i++)
    // {
    //     tempArray[inputArray[i]]++;    
    // }

    // for (let i = 0; i < tempArray.length; i++)
    // {
    //     if (tempArray[i] === 2)
    //     {
    //         output.push(i);
    //     }
    // }

    return output;
}

// Reverse a string
const ReverseString = (myInput) =>{
    return myInput.split('').reverse().join('');
}

// Reserve a sentence
const ReverseSentence = (myInput) =>{
    return myInput.split(' ').reverse().join(' ');
}

// Maximum value of a list
const MaximumValue = (myInput) => {
    return Math.max.apply(null, myInput);
}

// Minimum value of a list
const MinimumValue = (myInput) => {
    return Math.min.apply(null, myInput);
}


// Distinct Value and their frequency
const DistinctValuesAndFrequency = (inputArray) => {

    let output = [];

    // Get the frequency of each digit in the array
    let tempArray = new Array(10).fill(0);

    for(let i = 0; i< inputArray.length; i++)
    {
        tempArray[inputArray[i]]++;    
    }

    for (let i = 0; i < tempArray.length; i++)
    {
        if (tempArray[i] > 0)
        {
            output.push({value: i, count: tempArray[i]})
        }
    }

    return output;
}

// Reverse an Integer
const ReverseInteger = (myInput) =>{
    myInput = myInput.toString().split('').reverse().join('');
    return parseInt(myInput);
}

// Fizzbuzz
const Fizzbuzz = (number) => {
    
    for (let i = 1; i <= number; i++)
    {
        let output = '';

        if( i % 3 === 0)
        output += 'Fizz';

        if( i % 5 === 0)
        output += 'Buzz';

        if( output === '')
        output += i.toString();

        console.log(output);
    }

}

const Fibonacci = (number, memo) => {
    // Recursive ( Dynamic Programming)
    memo = new Array(number+1).fill(null);
    if(memo[number] != null)
        return memo[number];
    if (number === 0 || number === 1){
        return (number)
    }
    else{
        const result =  Fibonacci(number-1) + Fibonacci(number-2);
        memo[number]  = result;
        return result;
    }
    // Buttom Up Approach
    // let output = [0,1];
    // for (let i  = 0; i < number-1; i++)
    // {
    //     output.push(output[i] +output[i+1]);
    // }

    // return output[number];
}

/*
 First Duplicate in an Array
 - numbers are in the range 1 to array.length
 - Find the first dulicate for which the second
 occurrence has the minimal index
- Values in array 1<N<lengthOfArray
- if there are no such elements return -1
*/
const FirstDuplicateNumber = (inputArray) => {
    // During the loop if the value at an index is already negative
    // Return that number
    // Else
    // Negate the value stored at the index of each number
    for(let i = 0;i < inputArray.length; i++)
    {
        if(inputArray[Math.abs(inputArray[i])-1] < 0)
        {
            return Math.abs(inputArray[i]);
        }
        inputArray[Math.abs(inputArray[i])-1] = - inputArray[Math.abs(inputArray[i])-1]; 
    }

    return -1;

}


// First Duplicate Character in an Array
const FirstRepeatingChar = (inputString) =>{
 let myArray = [];
  for (let i = 0; i < inputString.length; i++ )
  {
      if (myArray.includes(inputString[i]))
      {
          return inputString[i]
      }
      else myArray.push(inputString[i]);
  }

    return 'None';
}

const FirstNonRepeatingChar = (inputString) =>{

    // Get the frequency of characters in the string
    // create an Array of size 26 with zeros in each index
    tempArray = new Array(26).fill(0);

    for (let i = 0 ; i < inputString.length; i++)
    {
        const offset = inputString[i].charCodeAt() - 'a'.charCodeAt();
        tempArray[offset]++
    }
    
    // loop over string and return the first character with frequency 1
    for (let i = 0; i < inputString.length; i++)
    {
        const offset = inputString[i].charCodeAt() - 'a'.charCodeAt();
        if(tempArray[offset] === 1)
        {
            return inputString[i];
        }
    }
    return null;
}

 /*
 Given an array of integers, find the frequency of the digits the return the digit with the highest 
 frequency. If number with maximum frequency is more than 1 return the lowest number of the 2
 Example [1,1,2,2,2,3,3,4,4,4] = Maximum value 2 and 4 with 3 occurrences. return 2 because it is the lowest.
 */

 const SmallestNumberHighestFreq = (inputArray) =>{

    let tempArray = new Array(10).fill(0);

    for(let i = 0; i< inputArray.length; i++)
    {
        tempArray[inputArray[i]]++;    
    }

    return ReturnSmallestIndexAndMaxValue(tempArray) ;
 }

 const ReturnSmallestIndexAndMaxValue = (inputArray) => {

    let currHighestVal = 0;
    let currIndex = 0

    for (let i= 0; i< inputArray.length; i++)
    {
        // Check if the value in array is greater than currHighestVal
          // if so => replace HighestVal and index
        // else if value in the array == currentHighest value
          // -- compare both index and select the smallest
        if (inputArray[i] > currHighestVal)
        {
            currHighestVal = inputArray[i];
            currIndex = i;
        }
        else if ((inputArray[i] === currHighestVal) && (i < currIndex))
        {
            currIndex = i;
        }
    }

    return { number : currIndex ,
            value: currHighestVal};

 }


 /*
 Given two strings (lowercase a -> z), how many characters do we need
 to remove (from either) to make them anagrams
 Example: hello, billion ---> Answer : 6 ( 'he' from hello & 'biin' from billion) 
 */

 const NumberToRemoveInAnagram = (first, second) => {

    // Count the frequency of char in each string
    firstArray = GetCharFrequency(first);
    secondArray = GetCharFrequency(second);
    // Return the sum of the difference between the arrays
    return getDelta(firstArray,secondArray);
 }

 /*
 Given two strings, 
 write a function to determine whether they are anagrams
 Inputs are going to be small letter 
 (If they are not convert everything to lowercase)
 */
 const TwoStringsAreAnagram = (first, second) => {
     if (first.length !== second.length)
        return false;
    
    // Convert to lowercase
    first = first.toLowerCase();
    second = first.toLowerCase();

    // create an Array of size 26 with zeros in each index
    tempArray = new Array(26).fill(0);
    
    // Use first string to increase frequency
    for (let i = 0 ; i < first.length; i++)
    {
        const offset = first[i].charCodeAt() - 'a'.charCodeAt();
        tempArray[offset]++;;
    }

    // Use second string to decrease frequency
    for (let i = 0 ; i < second.length; i++)
    {
        const offset = second[i].charCodeAt() - 'a'.charCodeAt();
        tempArray[offset]--;
    }

    for(let i = 0; i < tempArray.length; i++){
        if(tempArray[i] !== 0)
        return false;
    }

    return true;

 }


 const GetCharFrequency = (input) =>{
    // create an Array of size 26 with zeros in each index
    tempArray = new Array(26).fill(0);

    for (let i = 0 ; i < input.length; i++)
    {
        const offset = input[i].charCodeAt() - 'a'.charCodeAt();
        tempArray[offset]++;
    }
    return tempArray;
 }

 const getDelta = (firstArray, secondArray) =>{
    let difference = 0;
    for (let i = 0; i < 26; i++ )
    {
        difference += Math.abs(firstArray[i]-secondArray[i]);    
    }

    return difference;
 }

 /*
 Find the Kth smallest element in an unsorted array. If the Kth element
 is not present return null.
 Example: input: [0,1,0,1,1,1,0,0,1] k = 3 output = Null since [0,1]
          input: [9,3,2,7,2,5,3,8] k = 4 output = 7 since [2,3,5,7,8,9]
 */

 const ReturnKthSmallest = (inputArray, Kth) => {
    // Find the distinct numbers in the array
    distinctArray = [...new Set(inputArray)];
    // Sort the array
    distinctArray = distinctArray.sort();
    // Return index of K-1, if index does not exist return null
    if(Kth === 0 || Kth > distinctArray.length)
        return null;
    else
        return distinctArray[Kth-1];
 }

/*
 An integer is provided as input from the console. The input 
 sequence shoud follow an order Even->Odd...If subsequent numbers are
 even insert '*'+ number. if odd '-'+ number 
 */
 const ReturnEvenOdd = (inputInt) => {
    let output = '';
    // if index of input is Even, value should be even
    // If index of input is Odd, value shout be odd
    for (let i = 0; i < inputInt.length;i++)
    {
        // Even Condition
        if( i%2 === 0){
            if(parseInt(inputInt[i])%2 === 0)
                output += inputInt[i];
            else 
                output += '-' + inputInt[i];
        }

        // Odd Condition
        if( i%2 === 1){
            if(parseInt(inputInt[i])%2 === 1)
                output += inputInt[i];
            else 
                output += '*' + inputInt[i];
        }
    }

    return output;
 }


/*
Given an array of integers, find the maximum possible sum you can get from
one of its contiguous(next to each other) sub-arrays.
The sub-array from which this sum comes must contain at least 1 element 
Example inputArray [-2,2,5,-11,6] = [2,5] = 7
*/
 const MaxSumOfContiguousSubArray = (inputArray) => {
    // Use Kadane's Algorithm
    // Loop through array and find the maximum sum of contiguous indexes
    // If the current sum is greater than the maximum sum replace maximum
    // sum with current sum
    
    let maxSum = inputArray[0];
    let currSum = maxSum;
    
    for (let i = 1; i < inputArray.length; i++)
    {
        currSum = Math.max(inputArray[i] + currSum, inputArray[i]);
        maxSum = Math.max(currSum,maxSum)
    }

    return maxSum;
 }

 /*
 Given a Sum and an array find the Longest sub-array that will sum
 up to the Sum
Output will be the start and end index of our subarray
 eg. arr = [1,2,3,4,5,6,7,8,9,10] sum = 15
 output  = [1,2,3,4,5] = 15
 wrong answer = [4,5,6] or [1,2,4,8]or [1,2,3,9] 
 */
 const LongestSubArrayBySum = (givenSum, inputArray) =>{
/*
This problem is going to be solved with a sliding window approach
We will have 2 points left & right
The right will expand rightward till we reach the sum needed
We will than store this value.
If the next rightwardward value causes the sum to be exceeded we move 
the left pointer right to subtract the value from our sum and repeat the
process till we get the sum. We then compare it to our stored value to
to see if it is a larger subarray if not we continue.  
*/

result = [-1];

let left = 0;
let right = 0;
let sum = 0;

while(right < inputArray.length)
{
    sum += inputArray[right];
    while (left < right && sum > givenSum)
    {
        sum -= inputArray[left++];
    }

    if (sum === givenSum && (result.length ===1 || result[1] - result[0] < right - left))
    {
        result = [left+1, right+1]
    }
    right++;
}


return result;
 }

 /*
 Given a string s, find the longest palindromic substring in s. 
 You may assume that the maximum length of s is 1000
 A palindrome is a word or sequence of characters 
 which reads the same backward as forward

 eg. input => "babad" Output "bab or aba"
    input => "cbbd" Output "bb"
 */
 const LongestPalindromeInString = (inputString) => {
    if ( inputString === null || inputString.length < 1) 
        return '';
    
    let start = 0;
    let end  = 0;

    for(let i = 0;i < inputString.length; i++){
        // Case 1 eg. rac|e|car
        let len1  = ExpandFromMiddle(inputString, i,i);
        // Case 2 eg. aa|bb|aa
        let len2  = ExpandFromMiddle(inputString, i,i+1);

        let len = Math.max(len1,len2);
        // Find the boundaries
        if (len > end - start){
            start = i - ((len-1)/2);
            end = i + (len/2);
        }
    }

    return inputString.substring(start,end+1);

 }

 const ExpandFromMiddle = (inputString, left, right) => {
    /*
    We are going to start form the middle of the string
    and  move in both directions ie. left and right.
    if the values are the same we expand left and right
    */ 

    // Return zero is the string is null or the string is not split in equal halves 
    if (inputString === null || left > right)
        return 0;

        while (left >= 0 && right < inputString.length 
            && inputString[left] === inputString[right])
        {
            left--;
            right++;
        }
        return right - left - 1;
 }


 /*
 Given a sorted array of integers
 Write a function that returns a sorted array containing the squares of those integers
 */
 const SortedSquaredArray = (inputArray) => {
    tempArray = new Array(inputArray.length).fill(0);;
    let left = 0;
    let right = inputArray.length -1;

    for(let i = inputArray.length -1 ; i >= 0; i--)
    {
        if (Math.abs(inputArray[left]) >= Math.abs(inputArray[right]))
        {
            tempArray[i] = (Math.pow(inputArray[left],2));
            left++;
        }
        else if (Math.abs(inputArray[right]) >= Math.abs(inputArray[left]))
        {
            tempArray[i] = (Math.pow(inputArray[right],2));
            right--;
        }
    }
    return tempArray;
 }

/*
Compress the alphabets stored in a string
eg. aaabbccccc = a3b2c5
*/
 const StringCompression = (inputString) => {

     let output = '';
     let count = 1;

     for (let i = 0; i < tempArray.length; i++)
     {
         if(inputString[i] === inputString[i+1])
         {
             count++
         }
         else
         {
             output += inputString[i]+count;
             count = 1; 
         }
     }
     return output;
}

/*
Find the index in the array such that its prefix sum equals its suffix sum
Example
Array = [-1,3,-4,5,1,-6,2,1]
Output: P = 1 because -1 = -4+5+1-6+2+1
        P = 3 because -1+3-4 = 1-6+2+1
        P = 7 because -1+3-4+5+1-6+2+1 = 0
*/
const EquilibriumIndex = (inputArray) =>{
    output = [];
    // Find the total of the elements in the array
    let total = inputArray.reduce((a,b) => a + b, 0);

    let prefixTotal = 0;
    let suffixTotal = total;

    for(let i = 0; i< inputArray.length; i++)
    {
        if (i === 0)
        {
            prefixTotal = 0;
            suffixTotal = total - inputArray[i];
        }
        else if (i === inputArray.length - 1)
        {
            prefixTotal = total - inputArray[i];
            suffixTotal = 0;
        }
        else
        {
            prefixTotal += inputArray[i-1];
            suffixTotal -= inputArray[i];
        }

        if( prefixTotal === suffixTotal)
        {
            output.push(i);
        }
       
    }
    return output;

}

/* 
Given set of distinct integers, return all possible subsets (the power set).
*/
const Subsets = (inputArray) =>{

    let myArray = inputArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

    return myArray;

}


/*
Given an Array of integers, find total number of combination that sum up to a given number. 
*/
const TotalCombinationsOfSum = (inputArray, num) =>
{
    let tempArray = inputArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

    let count = 0;
    tempArray.forEach( item => {

         // Find sum of elements in array
        const sum = item.reduce(function(a, b){
            return a + b;
        }, 0);
        
        // If the sum of the array is equal to num increase the count
        if(sum === num)
            count++;
    }); 

    return count;
}



/*
Given an array, perform a number of right/left circular rotations by a factor "k" and return 
the array  
Note 0 = left; 1 = right
*/

const CircularRotation = (inputArray, k, LoR) => {
    
    const aL = inputArray.length;
    let tArray = new Array(aL).fill(0); 

    // right
    if(LoR === 0)
    {
        for(let i = 0; i < aL; i++)
        {
            if (i+k >= aL)
            {
                tArray[(i+k)%aL] = inputArray[i];

            }
            else 
            {
                tArray[i+k] = inputArray[i];
            }
        }   
    }

    // left
    if(LoR === 1)
    {
        for(let i = 0; i < aL; i++)
        {
            if (i-k < 0)
            {
                // Implement Modulo Operator
                let r = (i-k) % aL;
                r = r < 0 ? r + aL : r;
                tArray[r] = inputArray[i];
            }
            else 
            {
                tArray[i-k] = inputArray[i];
            }
        }
    }

    return tArray;

}

console.log(DistinctValues(myArray));
console.log(DistinctPair(myArray));
console.log(ReverseString(myString));
console.log(ReverseSentence(myString));
console.log(MaximumValue(myArray));
console.log(MinimumValue(myArray));
console.log(DistinctValuesAndFrequency(myArray));
console.log(ReverseInteger(myInt));
console.log(Fizzbuzz(20));
console.log(Fibonacci(2));
console.log(FirstDuplicateNumber([2,1,5,5,2,3,5,3,2]))
console.log(FirstRepeatingChar('ABCDSD'));
console.log(FirstNonRepeatingChar('aasssskkbkkaaak'));
console.log(SmallestNumberHighestFreq([0,0,1,1,1,2,3,4,5,7,8,9,3,5,6,7,3]));
console.log(NumberToRemoveInAnagram("hello","hello"));
console.log(ReturnKthSmallest([1,2,0,0,3,4,1,2,3],0));
console.log(ReturnEvenOdd("21462675756"));
console.log(MaxSumOfContiguousSubArray([-2,2,5,-11,6]))
console.log(LongestSubArrayBySum(15, [1,2,3,4,5,6,7,8,9,10]));
console.log(LongestPalindromeInString("babad"));
console.log(TwoStringsAreAnagram('BAAA','aaba'));
console.log(StringCompression('aabbcbb'));
console.log(SortedSquaredArray([-5,-3,-1,2,3,4,5]));
console.log(EquilibriumIndex([-1,3,-4,5,1,-6,2,1]));
console.log(CircularRotation([1,2,3,4,5],1,1));
console.log('a'.charCodeAt());
console.log(String.fromCharCode(97));
console.log(Subsets([1,2,3]))
console.log(TotalCombinationsOfSum([1,2,3,4,5,6,7,8,9,10],10));



