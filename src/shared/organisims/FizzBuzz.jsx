import React from 'react';

// background colors
const styles = {
  greenBg: {
    backgroundColor: '#50bd47',
  },
  redBg: {
    backgroundColor: '#912400',
  },
  yellowBg: {
    backgroundColor: '#e5b11c',
  },
  defaultBg: {
    backgroundColor: '#2c3f85',
  }
}

// determine if number should be FizzBuzz'ed
// returns an object holding the background and
// value of the number
const updateValue = (num) => {
  return num % 3 === 0 && num % 5 === 0
    ? {bgClass: styles.greenBg, value: 'Fizz Buzz'} /* Green */
    : (num % 3 === 0) 
    ? {bgClass: styles.redBg, value: 'Fizz'} /* Red */
    : (num % 5 === 0) 
    ? {bgClass: styles.yellowBg, value: 'Buzz'} /* Yellow */
    : {bgClass: styles.defaultBg, value: num}; /* Default */
};

const FizzBuzz = ({arr}) => {
  // Traverse array and substitute required element
  const numbers = arr.map((_, idx) => {
    const {bgClass, value} = updateValue(idx + 1);
    return <li key={idx + 1} style={bgClass}> {value} </li>
  });
  // return array of li elements
  return (
    <React.Fragment>
      {numbers}
    </React.Fragment>
  )
}

const StartFizzBuzz = ({limit}) => {
  // create an array of length 'limit' filled with 1s
  const arr = new Array(limit).fill(1);
  return (
    <ul className="counter"> 
      <FizzBuzz 
        arr={arr}
      />
    </ul>
  );
}

export default StartFizzBuzz;
