import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../utils/customThemes";

const RegisterPage = () => {
  const classes = useStyles();
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
  const routeChange = () =>
  {
    let path = `/dashboard`;
    navigate(path);
  }

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
              <Typography>Email</Typography>
            </Grid>
            <TextField
              required
              className={classes.filledTextFiled}
              size="small"
              variant="filled"
              name="email"
              placeholder="Enter your email.."
              onChange={updateInputFields}
            ></TextField>
          </Grid>
          <Grid
            container
            className={classes.credentialsTextField}
            paddingTop={"50px"}
          >
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
              type="password"
              required
              className={classes.filledTextFiled}
              size="small"
              variant="filled"
              name="password"
              placeholder="Enter your password.."
              onChange={updateInputFields}
            ></TextField>
          </Grid>
          <Grid container className={classes.buttonContainer}>
            <ThemeProvider theme={theme}>
              <Button onClick={routeChange} variant="contained" color="custombrown">
                <Typography color={"whitesmoke"}>Sign up</Typography>
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
