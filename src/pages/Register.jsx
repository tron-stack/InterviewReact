import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from '../images/logo/logo-no-background.png'
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Interview Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Register() {

  const navigate = useNavigate();
  const userState = useSelector((state)=> state.user.user);

  const handleClick = () =>{
    navigate('/');
  }

  useEffect(()=>{
    if(userState.username !== ""){
      navigate('/landing')
    }
  },)


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };

  return (
   
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img onClick={handleClick} src={logo} alt="logo" style={{height: '60px', borderRadius: '40px'}} />
           <a href="/" alignItems='center' style={{textDecoration: 'none'}}>
           
            <Typography component="h1" variant="h2" style={{color: 'orangered'}}>
              Register
            </Typography>
           </a>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
                <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                tabIndex={1}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="firstname"
                label="First Name"
                autoComplete="first name"
                tabIndex={2}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="Last Name"
                autoComplete="last name"
                tabIndex={3}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                tabIndex={4}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password - please use more than 8 characters"
                type="password"
                id="password"
                autoComplete="current-password"
                tabIndex={5}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                tabIndex={6}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                tabIndex={7}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 , bgcolor: 'tomato', height: '50px', fontSize: "20px", borderRadius: '35px'}}
                tabIndex={8}
              >
                Create Account
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2" fontSize={14} tabIndex={9}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2" fontSize={14} tabIndex={10}>
                    {"Already have an account? Log In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
  );
}

export default Register;
