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
import axios from 'axios'
import swal from "sweetalert";

const theme = createTheme();

export default function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const values={
          email:data.get("email"),
          password: data.get("password")
        }
        axios.post("http://localhost:8080/recipes/login",values).then((res)=>{
          if(res.status==200){
            swal({
              title: "Good job!",
              text: "You are successfully logged in!",
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
        }).catch((err)=>{
          if(err.response.status==500){
            swal({
              text: err.response.data.message,
              icon: "warning",
              dangerMode: true
            })
          }
        })
      };
      const closeLogin=()=>{
        document.getElementById("login").style.display="none";
      }
        return(
            <ThemeProvider theme={theme}>
      <Container id="login" component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div className="text">
            <TextField
              margin="normal"
              required
            //   fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
            //   fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            </div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div className="buttons">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={{width:"15vh"}}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={{width:"15vh"}}
              onClick={closeLogin}
            >
              Cancel
            </Button>
            </div>
            <Grid> 
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
        )
}