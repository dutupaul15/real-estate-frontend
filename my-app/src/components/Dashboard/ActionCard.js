import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import buy from "../../photos/buy.jpg";
import rent from "../../photos/rent.jpg";
import sell from "../../photos/sell.jpg";
import theme from "../../utils/customThemes";

const ActionCard = (action) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={buy}
        alt="beautiful house to buy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Buy a home
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Find your place and bring some color to this drawn house
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Browse homes</Button>
      </CardActions>
    </Card>
  );
};

export default ActionCard;
