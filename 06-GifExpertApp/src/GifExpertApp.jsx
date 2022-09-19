

//  const apiKey = '0SQ78YHAvJ2yMgLzOGGpwnMJ0N8cV95t';
//  const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//  const { data } = await resp.json(); 

import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

      const [ categories, setCategories ] = useState([]);

      const onAddCategory = (newCategory) => {
            console.log(newCategory)
            // const nuevoElemento = 'Test';
            
            if (categories.includes (newCategory)) return;
            
            setCategories( [...categories, newCategory]);
            
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
                        { categories.map( (cat) => (
                                          <GifGrid 
                                                key={ cat } 
                                                category={ cat }/>
                                    )
                              // return <li key={ cat }> { cat }</li>
                              ) 
                        }
                        {/* GifItem */}
            </>
      )
};