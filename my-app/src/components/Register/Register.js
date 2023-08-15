import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import image from "../../photos/backgroundImageRegister.jpg";
import theme from "../../utils/customThemes";

const RegisterPage = () => {
  const [inputFields, setInputFields] = useState([
    {
      email: "",
      username: "",
      password: "",
    },
  ]);

  const updateInputFields = (e) => {
    console.log(e.target);
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
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
      flexDirection="column"
    >
      <Grid
        item
        sx={{
          width: "30%",
          backgroundColor: "#ffe4c5",
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
          sx={{
            fontFamily: "Lucida Console",
            fontSize: "50px",
            color: "#663300",
            fontWeight: "700",
            textShadow: "0px 2px 2px rgba(3, 90, 124, 0.5)",
            alignSelf: "center",
          }}
        >
          Register
        </Typography>
        <TextField
          required
          size="small"
          variant="filled"
          label="Email"
          name="email"
          placeholder="Enter your email.."
          onChange={updateInputFields}
        ></TextField>
        <TextField
          required
          size="small"
          variant="filled"
          label="Username"
          name="username"
          placeholder="Enter your username.."
          onChange={updateInputFields}
        ></TextField>
        <TextField
          type="password"
          required
          size="small"
          variant="filled"
          label="Password"
          name="password"
          placeholder="Enter your password.."
          onChange={updateInputFields}
        ></TextField>
        {inputFields.email && inputFields.username && inputFields.password ? (
          <ThemeProvider theme={theme}>
            <Button
              onClick={routeChange}
              variant="contained"
              color="custombrown"
            >
              <Typography color={"whitesmoke"}>Sign up</Typography>
            </Button>
          </ThemeProvider>
        ) : (
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="custombrown" disabled>
              <Typography color={"whitesmoke"}>Sign up</Typography>
            </Button>
          </ThemeProvider>
        )}
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
