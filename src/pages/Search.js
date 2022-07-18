import { Container, Paper, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useParams } from "react-router-dom";

function Search() {

  const params = useParams();
  return (
    <>
      <Paper square sx={{ minHeight: '100vh' }} >
        <ResponsiveAppBar />
        <Container maxWidth='lg' sx={{ marginTop: '20px' }}>
          <Typography fontSize={36} >Cari.. "{params.title}"</Typography>
        </Container>
      </Paper>
    </>
  );
}

export default Search;