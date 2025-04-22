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
      setImages(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  };


    useEffect(() => {
        fetchImagesAlbum()
    }, []);
    

    return (
      <Box
        sx={{
          width: '100%',         
          height: '100vh',       
          overflowY: 'auto',     
          p: 2,                  
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((image, i) => (
            <ImageListItem key={i}>
              <img
                srcSet={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.url}?w=248&fit=crop&auto=format`}
                alt={`image-${i}`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
}

export default ImagesAlbum;


  