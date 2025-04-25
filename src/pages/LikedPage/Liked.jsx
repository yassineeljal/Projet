import React, { useEffect, useState } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import './Liked.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Liked({ auth, user }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!auth) {
      navigate("/Login");
    }
  }, [auth, navigate]);

  useEffect(() => {
    const fetchImagesLiked = async () => {
      try {
        const response = await axios.post(`http://localhost:8888/image/getImageInLiked/${localStorage.getItem("username")}`);
        setImages(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Liked:", error);
      }
    };

    if (auth) {
      fetchImagesLiked();
    }
  }, [auth, user]);

  return (
    <>
      <Nav />
      <div className="liked-container">
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            overflowY: 'auto',
            paddingBottom: '80px',
          }}
        >
          <ImageList variant="masonry" cols={3} gap={16}>
            {images.map((image, i) => (
              <ImageListItem key={i}>
                <img
                  srcSet={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${image.url}?w=248&fit=crop&auto=format`}
                  alt={`image-${i}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
}

export default Liked;
