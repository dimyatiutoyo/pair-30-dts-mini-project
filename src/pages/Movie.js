import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from 'axios';
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { Star } from '@mui/icons-material';
import Popular from "../components/Popular";

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (id) => {
    try {
      const response = await axios.get(process.env.REACT_APP_IMDB_URL + '/movie/' + id, {
        params: {
          api_key: process.env.REACT_APP_IMDB_API_KEY
        }
      });

      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovie(params.id);
  }, []);

  return (
    <Layout ml="0px" mr="0px">

      {movie && (
        <Box sx={{
          backgroundImage: `url(${process.env.REACT_APP_IMDB_IMAGE_URL}/${movie?.backdrop_path})`,
          backgroundPositionX: 'center',
          backgroundPositionY: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'black',
          width: '100%',
          height: '800px',
        }}>

        </Box>
      )}
      <Container sx={{ marginTop: 5 }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Typography mr={2} fontSize={36} fontWeight='bold'>{movie?.title}</Typography>
          <Typography sx={{
            display: 'flex',
          }}><Star sx={{ marginRight: '5px', color: 'gold' }} /> {movie?.vote_average}/10</Typography>
        </Box>
        <Typography fontSize={18}>{movie?.overview}</Typography>
        <Popular />
      </Container>
    </Layout>
  );
}

export default Movie;