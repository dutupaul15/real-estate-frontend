import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Button, Box, Link } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../utils/customThemes";
import image from "../../photos/backgroundImage.jpg";

const LoginPage = () => {
  const [inputFields, setInputFields] = useState([
    {
      username: "",
      password: "",
    },
  ]);

  const updateInputFields = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    console.log(inputFields);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };
  return (
    <Grid
      container
      display="flex"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      flexDirection="column"
    >
      <Grid
        item
        sx={{
          width: "30%",
          backgroundColor: "#d49c5d",
          p: 2,
          borderRadius: "25px",
          border: "1px solid rgba(217, 217, 217, 0.5)",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        display="flex"
        xs={7}
        flexDirection="column"
        justifyContent="space-around"
      >
        <Typography
          align="center"
          sx={{
            fontFamily: "Lucida Console",
            fontSize: "50px",
            fontWeight: "700",
            color: "#663300",
            textShadow: "0px 2px 2px rgba(3, 90, 124, 0.5)",
          }}
        >
          LOGIN
        </Typography>
        <TextField
          required
          label="Username"
          size="small"
          variant="filled"
          name="username"
          placeholder="Enter your username.."
          onChange={updateInputFields}
        ></TextField>
        <TextField
          required
          type="password"
          label="Password"
          size="small"
          variant="filled"
          name="password"
          placeholder="Enter your password.."
          onChange={updateInputFields}
        ></TextField>
        <Box display="flex" justifyContent="space-between">
          <Typography sx={{fontStyle: "italic"}}>You don't have an account?</Typography>
          <Link
            underline="none"
            sx={{ color: "#663300", fontWeight: "700" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            {"Register"}
          </Link>
        </Box>
        {inputFields.username && inputFields.password ? (
          <ThemeProvider theme={theme}>
            <Button
              onClick={routeChange}
              variant="contained"
              color="custombrown"
            >
              <Typography color={"whitesmoke"}>Sign in</Typography>
            </Button>
          </ThemeProvider>
        ) : (
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="custombrown" disabled>
              <Typography color={"whitesmoke"}>Sign in</Typography>
            </Button>
          </ThemeProvider>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginPage;
