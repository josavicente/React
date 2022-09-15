import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ( { value } ) => {


      const [ counter, setCounter] = useState(0);

      const handleAdd = () => {
            // setCounter (counter + 1);
            setCounter( (c) => c + 1)
      };

      const handleSubstract = () => {
            // setCounter (counter - 1);
            setCounter( (c) =>  c - 1 )
      };

      const handleReset = () => {
            // setCounter (0);
            setCounter( (c) => 0)
      };

      return ( 
      <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            {/* <button onClick = { (event) => handleEvent(event) }>
                  +1
            </button> */}
            <button onClick = { handleAdd }>
                  +1
            </button>
            <button onClick = { handleSubstract }>
                  -1
            </button>
            <button onClick = { handleReset }>
                  Reset
            </button>

      </>
)};


CounterApp.propTypes = {
      value: PropTypes.number
};

CounterApp.defaultProps = {
      value: 100
}