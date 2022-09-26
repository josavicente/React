
// import { useState, useEffect } from 'react';
// import {getGifs} from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';


export const GifGrid =  ({category}) => {

      const {  images, isLoading } = useFetchGifs ( category );

      // const [images, setImages] = useState([])

      // const getImages = async() => {
      //       const newImages = await getGifs(category);
      //       console.log(newImages);
      //       setImages(newImages);
      // }
      // useEffect( () => {
      //       getImages();
      //       // getGifs(category)
      //       //       .then( newImages => setImages(newImages) );
      // }, [] )

      return (
            <>
                  <h3>{category}</h3>
                  {
                        isLoading && ( <h2>Cargando...</h2> )
                  }
                  {/* {
                        isLoading 
                        ? (  <h2>Cargando...</h2> )
                        :  null
                  } */}

                  <div className="card-grid">
                  { images.map( (image) => (
                        <GifGridItem 
                              key={image.id}
                              {...image}
                              // title={image.title}
                              // image={image.url}
                              />
                        
                        )
                  )}
                  </div>
            </>
      )
}

GifGrid.propTypes = {
      category: PropTypes.string.isRequired,
}

