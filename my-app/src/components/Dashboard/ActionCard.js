import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import buy from "../../photos/buy.jpg";
import rent from "../../photos/rent.jpg";
import sell from "../../photos/sell.jpg";
import theme from "../../utils/customThemes";

const ActionCard = (props) => {
  const action = props.action;
  if (action === "buy") {
    return (
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={buy}
          alt="Cannot display the image!"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Buy a home
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Find your place and bring some color to this drawn house.
          </Typography>
        </CardContent>
        <CardActions>
          <ThemeProvider theme={theme}>
            <Button size="small" color="custombrown" variant="contained">
              Browse homes
            </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    );
  } else if (action === "rent") {
    return (
      <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={rent}
          alt="Cannot display the image!"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rent a home
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The best rental offers are waiting for you.
          </Typography>
        </CardContent>
        <CardActions>
          <ThemeProvider theme={theme}>
            <Button size="small" color="custombrown" variant="contained">
              Find rentals
            </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
        <CardMedia
          component="img"
          height="130"
          image={sell}
          alt="Cannot display the image!"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sell a home
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Make the best deal with your house, we can help you navigate a
            successful sale.
          </Typography>
        </CardContent>
        <CardActions>
          <ThemeProvider theme={theme}>
            <Button size="small" color="custombrown" variant="contained">
              See your options
            </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    );
  }
};

export default ActionCard;
