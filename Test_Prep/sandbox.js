// Show Distinct Values in a List

const myArray = [1,2,1,2,7,3,5,6,7,8,6,4];
const myString = 'Good Morning Ghana';
const myInt = 24457;

const DistinctValues = (input) => {
     return [...new Set(input)];
}


// Count Distinct pairs in a list
const DistinctPair = (input) => {
    let output = [];
    const distinctArray =  [...new Set(input)];
    distinctArray.forEach((itemInDistinctArray) =>{
        let count = 0;
        input.forEach((itemInInputArray) => {
            if( itemInInputArray === itemInDistinctArray )
            {
                count++;
            }
        })
        if (count === 2){
            output.push(itemInDistinctArray)
        }
    })

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
const DistinctValuesAndFrequency = (input) => {
    const distinctValues = [...new Set(input)];
    let output = [];
    for (let i = 0; i< distinctValues.length; i++){
        let count = 0;
        for (let j = 0; j < input.length; j++)
        {
            if(distinctValues[i] === input[j])
            {
                count++;
            }
        }
        output.push({value: distinctValues[i], count: count})
    }
    return output;
    // output.forEach((itemInOutput) => {
    //     console.log(`Value: ${itemInOutput.value} Output: ${itemInOutput.length}`);
    // });
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

const Fibonacci = (number) => {
    // Recursive
    // if (number === 0 || number === 1){
    //     return (number)
    // }
    // else{
    //     return Fibonacci(number-1) + Fibonacci(number-2);
    // }
    let output = [0,1];
    for (let i  = 0; i < number-1; i++)
    {
        output.push(output[i] +output[i+1]);
    }

    return output[number];
}

const FirstRecurringChar = (inputString) =>{
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


 /*
     For an array of numbers given, return the smallest number with the highest frequency in the list.
 */

 const SmallestNumberHighestFreq = (inputArray) =>{

    let tempArray = [];
    for (let i = 0; i< 10; i++){
        tempArray.push(0);
    }

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


console.log(DistinctValues(myArray));
console.log(DistinctPair(myArray));
console.log(ReverseString(myString));
console.log(ReverseSentence(myString));
console.log(MaximumValue(myArray));
console.log(MinimumValue(myArray));
console.log(DistinctValuesAndFrequency(myArray));
console.log(ReverseInteger(myInt));
console.log(Fizzbuzz(20));
console.log(Fibonacci(0));
console.log(FirstRecurringChar('ABCD'));
console.log(SmallestNumberHighestFreq([0,0,1,1,1,2,3,4,5,7,8,9,3,5,6,7,3]));