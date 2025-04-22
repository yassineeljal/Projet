import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function ImagesAlbum({selectedAlbum}) {

    const [images, setImages] = useState([])
    
  const fetchImagesAlbum = async () => {
    try {
      const response = await axios.post(`http://localhost:8888/image/getImageInAlbum/${selectedAlbum}`);
      setImages(response.url);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  };


    useEffect(() => {
        fetchImagesAlbum()
    }, []);
    

    return (
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.map((image, i) => (
              <ImageListItem key={i}>
                <img
                  srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${image}?w=248&fit=crop&auto=format`}
                  alt="image"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      );
}

export default ImagesAlbum;


// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//   },
  