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
import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function AddImage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
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
          className="add-form"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <RamenDiningRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Recipe
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
              id="Name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
            //   fullWidth
              name="description"
              label="Description"
              id="description"
              autoComplete="description"
            />
            <TextField
              margin="normal"
              required
            //   fullWidth
              name="ingredients"
              label="Ingredients"
              id="ingredients"
              autoComplete="ingredients"
            />
            <TextField
            margin="normal"
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={5}
        />
            </div>
            <div className="buttons">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={{width:"15vh"}}
            >
              Add
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
        )
}