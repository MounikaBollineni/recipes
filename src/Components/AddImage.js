import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function AddImage() {
  const[image,setImage]=React.useState(null);

  const headers={
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data',
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        data.append("file",image);
        axios.get("http://localhost:8080/recipes/upload",image)
            .then(res => {
                    console.log(res.status);
                    alert("File uploaded successfully.");
            })
      };

      const onFileChangeHandler = (e) => {
            setImage(e.target.files[0]);
    };

      const closeLogin=()=>{
        document.getElementById("image").style.display="none";
      }
        return(
            <ThemeProvider theme={theme}>
      <Container id="image" component="main" maxWidth="xs">
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
            label="Steps"
            multiline
            rows={5}
        />
        <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
            </div>
            <div className="buttons">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={{width:"15vh"}}
              // onClick={(e)=>{handleSubmit(e)}}
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