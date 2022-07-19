import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Link as ButtonLink,
  Container,
} from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';

function Login() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleVisibility = () => {
    setVisible(!visible);
  }

  const handleLogin = async () => {
    setLoading(true);
    if (email === '' || password === '') {
      setError('Please fill all fields');
      return;
    }
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper sx={{ height: '100vh', paddingTop: 20 }} square>
      <Container maxWidth='xs'>
        <Card elevation={2} sx={{ borderRadius: 3, padding: 2 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} align="center" fontWeight={600} color="text.secondary" gutterBottom>
              Login
            </Typography>
            <TextField
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="Email"
              variant="outlined"
              margin='dense'
              size='medium' />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              fullWidth
              label="Password"
              variant="outlined"
              margin='dense'
              type={visible ? 'text' : 'password'}
              size='medium'
              InputProps={{

                endAdornment: (
                  <InputAdornment position="end" >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleVisibility}
                      onMouseDown={handleVisibility}
                      edge="end"
                    >
                      {visible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              fullWidth
              variant="contained"
              color="error"
              size='large'
              onClick={handleLogin}
              disabled={loading}
            >
              Login
            </Button>
            {/* <Typography sx={{ fontSize: 14, marginTop: 2, marginBottom: 2 }} align="center" color="text.secondary" gutterBottom>
            atau masuk dengan
          </Typography> */}
            {/* <Button fullWidth variant="outlined" color="primary" size='large' startIcon={<Google />} sx={{ textTransform: 'capitalize' }}>Google</Button> */}

            <Typography sx={{ fontSize: 14, marginTop: 2, marginBottom: 2 }} align="center" color="text.secondary" gutterBottom>
              Belum punya akun? <Link to='/register'><ButtonLink>Buat akun</ButtonLink></Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Paper>
  );
}

export default Login;