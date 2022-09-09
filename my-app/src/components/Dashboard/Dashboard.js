import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../utils/customThemes";

const DashboardPage = () => {
  const navbarColor = createTheme({
    palette: {
      secondary: {
        main: "#C4A484",
      },
    },
  });

  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={navbarColor}>
          <AppBar position="static" color="secondary">
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
      </Box>
    </Grid>
  );
};

export default DashboardPage;
