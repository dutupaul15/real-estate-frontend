import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Search } from "@material-ui/icons";

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
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath`;
    navigate(path);
  };

  const SearchBar = ({ setSearchQuery }) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <Search style={{ fill: "brown" }} />
      </IconButton>
    </form>
  );

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };

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
        <Grid item marginTop="50px">
          <SearchBar />
        </Grid>
      </Box>
    </Grid>
  );
};

export default DashboardPage;
