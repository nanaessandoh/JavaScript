// Show Distinct Values in a List

const myArray = [1,2,1,2,7,3,5,6,7,8,6,4];
const myString = 'Good Morning Ghana';
const myInt = 24457;

const DistinctValues = (input) => {
     return [...new Set(input)];
}


// Count Distinct pairs in a list
const DistinctPair = () => {
    return [...new Set(input)].length();
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
    
    for (let i = 0; i <= number; i++)
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

const Fibonnacci = (number) => {

    let output = [1,1];
    for (let i  = 0; i< number-2; i++)
    {
        output.push(output[i] +output[i+1]);
    }

    return output;
    //  output.forEach((itemInOutput) => {
    //      console.log(itemInOutput);
    //  });
}




console.log(DistinctValues(myArray));
console.log(ReverseString(myString));
console.log(ReverseSentence(myString));
console.log(MaximumValue(myArray));
console.log(MinimumValue(myArray));
console.log(DistinctValuesAndFrequency(myArray));
console.log(ReverseInteger(myInt));
console.log(Fizzbuzz(20));
console.log(Fibonnacci(10));