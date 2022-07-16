import { Google, VisibilityOff, Visibility } from '@mui/icons-material';
import { Button, Card, CardContent, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function Login() {
  const [visible, setVisible] = useState(false);


  const handleVisibility = () => {
    setVisible(!visible);
  }

  return (
    <Container maxWidth="xs" sx={{ marginTop: 20 }}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} align="center" fontWeight={600} color="text.secondary" gutterBottom>
            Login
          </Typography>
          <TextField
            id="email"
            fullWidth
            label="Email"
            variant="outlined"
            margin='dense'
            size='medium' />
          <TextField
            id="password"
            fullWidth
            label="Password"
            variant="outlined"
            margin='dense'
            type={visible ? 'text' : 'password'}
            size='medium'
            sx={{ marginBottom: 3 }}
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
          <Button fullWidth variant="contained" color="primary" size='large'>Login</Button>
          <Typography sx={{ fontSize: 14, marginTop: 2, marginBottom: 2 }} align="center" color="text.secondary" gutterBottom>
            atau masuk dengan
          </Typography>
          <Button fullWidth variant="outlined" color="primary" size='large' startIcon={<Google />} sx={{ textTransform: 'capitalize' }}>Google</Button>
        </CardContent>
      </Card>
    </Container >
  );
}

export default Login;