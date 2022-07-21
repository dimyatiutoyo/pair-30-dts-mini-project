import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Layout from "./Layout";
import "./Profil.css";

function Profil() {
  return (
    <Layout>
      <div className="profile">
        <div className="wrapper">
          <div className="container">
            <h1>WE ARE PAIR 30</h1>
          </div>
        </div>
        <div className="user">
          <div className="row">
            <Card sx={{ maxWidth: 500, marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://3.bp.blogspot.com/-Jzs-Tc7DVh4/WNnFKKSYdaI/AAAAAAAAAQY/dDIIv3B2QPgsnHj6nvonlGSYj-dBdNAQACLcB/w1200-h630-p-k-no-nu/13402577_906270372835458_1778564801_n.jpg"
                  alt="Dimyati Utoyo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dimyati Utoyo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lebih dari tiga tahun lebih sebagai web programmer yang
                    berpengalaman di PHP, JavaScript, dan MySQL.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83YJLJWetF-wOdakDEpNf5ELCiu1KRhMZwQ&usqp=CAU"
                  alt="Endrial Meidy Putra"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Endrial Meidy Putra
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lebih dari tiga tahun lebih sebagai UI Developer yang
                    berpengalaman di HTML5 dan CSS3.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profil;
