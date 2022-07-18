import { Container, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import Carousel from "../components/Carousel";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Home() {

  return (
    <>
      <Paper square sx={{ minHeight: '100vh' }} >
        <ResponsiveAppBar />
        {/* <div style={{ marginLeft: '20px', marginRight: '20px' }}>
        </div> */}
        <Container maxWidth='lg' sx={{ marginTop: '20px' }}>
          <Carousel />
          <Typography sx={{ fontSize: 100 }} >asas</Typography>
        </Container>
      </Paper>
    </>
  );
}

export default Home;