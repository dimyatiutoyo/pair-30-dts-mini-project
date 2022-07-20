import { Box, Paper } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Layout({ children, ml = '20px', mr = '20px' }) {
  return (
    <>
      <Paper square sx={{ minHeight: '100vh' }} >
        <ResponsiveAppBar />

        <Box sx={{
          marginLeft: ml,
          marginRight: mr,
        }}>

          {children}
        </Box>
      </Paper>
    </>
  );
}

export default Layout;