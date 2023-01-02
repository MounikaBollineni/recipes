import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';
import swal from "sweetalert";

const theme = createTheme();

export default function Register() {
  const [fName,setFName]=React.useState("");
  const [lName,setLName]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");

  const body={
    firstName:fName,
    lastName:lName,
    email:email,
    password:password
  }
  const headers={
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/recipes/register",body,"no-cors",headers).then(res=>{
          if(res.status==200){
            swal({
              title: "Good job!",
              text: "You are successfully registered!",
              icon: "success",
            });
          }
          if(res.status==500){
            swal({
              text: res.response.data.message,
              icon: "warning",
              dangerMode: true
            })
          }
        }).catch(err=>{
          if(err.response.status==500){
            swal({
              text: err.response.data.message,
              icon: "warning",
              dangerMode: true
            })
          }
        })
      };
      const closeRegister=()=>{
        document.getElementById("register").style.display="none";
      };

      const handleFNameChange=(event)=>{
        setFName(event.target.value);
      }

      const handleLNameChange=(event)=>{
        setLName(event.target.value);
      }

      const handleEmailChange=(event)=>{
        setEmail(event.target.value)
      }

      const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
      }

        return(
            <ThemeProvider theme={theme}>
      <Container id="register" component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          className="form"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={fName}
                onChange={(event) => handleFNameChange(event)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lName}
                onChange={(event) => handleLNameChange(event)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(event) => handleEmailChange(event)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(event) => handlePasswordChange(event)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <div className="buttons">
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={{width:"15vh"}}
              onClick={(e)=>{handleSubmit(e)}}
            >
              Sign Up
            </Button>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={{width:"15vh"}}
              onClick={closeRegister}
            >
              Close
            </Button>
            </div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" style={{marginLeft:"10vh"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
        )
}