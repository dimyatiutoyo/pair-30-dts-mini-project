// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CarouselItem from './CarouselItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './Carousel.css';
import { Typography } from '@mui/material';

export default function Carousel() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getTrendingMovies = async () => {
    let response = await axios.get(process.env.REACT_APP_IMDB_URL + '/trending/movie/day', {
      params: {
        api_key: process.env.REACT_APP_IMDB_API_KEY
      }
    });
    setTrendingMovies(response.data.results);
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <>
      <Typography fontSize={36} fontWeight='bold' sx={{ marginBottom: '15px' }}>
        Trending
      </Typography>
      <Swiper

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoplay={true}
        allowTouchMove
        spaceBetween={20}
        loop
        centeredSlides
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        style={{
          borderRadius: 10
        }}
      >
        {
          trendingMovies.length === 0
            ? console.log('loading')
            : trendingMovies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <CarouselItem backdropPath={movie.backdrop_path} title={movie.original_title} overview={movie.overview} />
                </SwiperSlide>
              );
            })
        }
      </Swiper>

    </>
  );
};