import { useState } from 'react';

export const AddCategory = () => {

      const [inputValue, setInputValue] = useState('');
      
      const onInputChange = (event) => {
            // console.log(event.target.value);
            setInputValue(event.target.value);
      }

      const onSubmit = (event) => {
            
      };

      return (
            <form onSubmit={ (event) => onSubmit(event) }>
                  <input
                  type="text"
                  placeholder="Buscar gifs"
                  value={ inputValue }
                  onChange={ onInputChange }
                  />
            </form>
            
      )
}
