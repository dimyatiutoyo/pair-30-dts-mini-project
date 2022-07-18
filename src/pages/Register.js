import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Card, CardContent, Container, IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function Register() {
  const [visible, setVisible] = useState(false);


  const handleVisibility = () => {
    setVisible(!visible);
  }
  return (
    <Paper sx={{ height: '100vh', paddingTop: 20 }} square>
      <Container maxWidth='xs'>
        <Card elevation={2} sx={{ borderRadius: 3, padding: 2 }}>
          <CardContent>
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
            <TextField
              id="confirm_password"
              fullWidth
              label="Confirm Password"
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
          </CardContent>
        </Card>
      </Container>
    </Paper>
  );
}