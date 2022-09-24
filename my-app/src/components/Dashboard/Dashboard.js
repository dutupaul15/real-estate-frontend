import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../utils/customThemes";
import ActionCard from "./ActionCard";

const DashboardPage = () => {
  const navbarColor = createTheme({
    palette: {
      secondary: {
        main: "#C4A484",
      },
    },
  });

  const classes = useStyles();
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `newPath`;
    navigate(path);
  };

  return (
    <Grid container className={classes.mainContainer}>
      <CssBaseline />
      <Grid item padding="2px" xs={12} className={classes.navBar}>
        <ThemeProvider theme={navbarColor}>
          <AppBar position="sticky" color="secondary">
            <Toolbar>
              <Typography className={classes.paulIMob} sx={{ flexGrow: 1 }}>
                PaulImob
              </Typography>
              <ThemeProvider theme={theme}>
                <Button color="inherit">Buy</Button>
                <Button color="inherit">Rent</Button>
                <Button color="inherit">Sell</Button>
                <Button color="custombrown">Help</Button>
              </ThemeProvider>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Grid>

      <Grid item xs={12} className={classes.bottomContainer}>
        <CssBaseline />
        <Grid container wrap="nowrap" xs={6} className={classes.leftContainer}>
          <Grid item>
            <Typography className={classes.categoriesTypo} variant="h6">
              Categories
            </Typography>
          </Grid>
          <Grid item paddingTop="3rem">
            <Typography fontStyle="italic">Single-floor house</Typography>
          </Grid>
          <Grid item paddingTop="1rem">
            <Typography fontStyle="italic">Multi-floor house</Typography>
          </Grid>
          <Grid item paddingTop="1rem">
            <Typography fontStyle="italic">Apartment</Typography>
          </Grid>
        </Grid>
        <Grid container xs={6} className={classes.rightContainer}>
          <ActionCard/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
