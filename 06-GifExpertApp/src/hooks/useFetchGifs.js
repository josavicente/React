
import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/getGifs';



export const useFetchGifs = (category) => {

      const [images, setImages] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      const getImages = async() => {
            const newImages = await getGifs(category);
            console.log(newImages);
            setImages(newImages);
            setIsLoading(false);
      }
      useEffect( () => {
            getImages();
            // getGifs(category)
            //       .then( newImages => setImages(newImages) );
      }, [] )

      return {
            images: images,
            isLoading: isLoading
      }
}


      