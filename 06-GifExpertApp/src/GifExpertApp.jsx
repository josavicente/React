

//  const apiKey = '0SQ78YHAvJ2yMgLzOGGpwnMJ0N8cV95t';
//  const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//  const { data } = await resp.json(); 

import { useState } from "react";
import { AddCategory } from "./components/addCategory";

export const GifExpertApp = () => {

      const [ categories, setCategories ] = useState([ 'Naruto', 'Demon Slayer']);

      const onAddCategory = (newCategory) => {
            console.log(newCategory)
            // const nuevoElemento = 'Test';
            setCategories( [...categories, nuevoElemento]);
      }

      return (
            <>
            {/* Título */}
            <h1>GifExpertApp</h1>
            {/* Entrada de datos */}
            <AddCategory 
                  onNewCategory={ (value) =>  onAddCategory (value) }
                  // setCategories={ setCategories } 
            />

            {/* Listado de Gif's */}
            <ol>
                  { categories.map( cat => {
                        return <li key={ cat }> { cat }</li>
                  } ) }
            </ol>
                  {/* GifItem */}
            </>
      )
};