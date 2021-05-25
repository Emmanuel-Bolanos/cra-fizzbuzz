import React from 'react';

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

const updateVal = (value) => {
  return value % 3 === 0 && value % 5 === 0
    ? [styles.greenBg, 'Fizz Buzz'] /* Green */
    : (value % 3 === 0) 
    ? [styles.redBg, 'Fizz'] /* Red */
    : (value % 5 === 0) 
    ? [styles.yellowBg, 'Buzz'] /* Yellow */
    : [styles.defaultBg, value]; /* Default */
};

const FizzBuzz = ({arr}) => {
  const numbers = arr.map((_, idx) => {
    const [bgClass, value] = updateVal(idx + 1);
    return <li key={idx + 1} style={bgClass}> {value} </li>
  })
  return (
    <React.Fragment>
      {numbers}
    </React.Fragment>
  )
}


const StartFizzBuzz = ({limit}) => {
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
