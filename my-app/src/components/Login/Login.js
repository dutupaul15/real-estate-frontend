import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../utils/customThemes";

const LoginPage = () => {
  const classes = useStyles();
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
    <Grid container className={classes.mainContainer}>
      <CssBaseline />
      <Grid
        container
        className={classes.bigContainer}
        flexDirection="column"
        alignItems={"center"}
      >
        <Grid item>
          <Grid container>
            <Typography className={classes.paulIMob}>PaulImob</Typography>
          </Grid>
        </Grid>
        <Grid item paddingTop={"100px"}>
          <Grid container className={classes.credentialsTextField}>
            <Grid container className={classes.credentialsTypo}>
              <Typography>Username</Typography>
            </Grid>
            <TextField
              required
              className={classes.filledTextFiled}
              size="small"
              variant="filled"
              name="username"
              placeholder="Enter your username.."
              onChange={updateInputFields}
            ></TextField>
          </Grid>
          <Grid
            container
            className={classes.credentialsTextField}
            paddingTop={"50px"}
          >
            <Grid container className={classes.credentialsTypo}>
              <Typography>Password</Typography>
            </Grid>
            <TextField
              required
              className={classes.filledTextFiled}
              type="password"
              size="small"
              variant="filled"
              name="password"
              placeholder="Enter your password.."
              onChange={updateInputFields}
            ></TextField>
          </Grid>
          <Grid item>
            <Grid container className={classes.questionTypo}>
              <Typography>You don't have an account?</Typography>
            </Grid>
            <Grid container>
              <a href="http://localhost:3000/register">Register</a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
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
    </Grid>
  );
};

export default LoginPage;
