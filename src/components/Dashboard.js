import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import WoolenCap from "../Assets/WoolenCap.jfif";
import Tshirt from "../Assets/T-shirt.jfif";
import Cap from "../Assets/Cap.jfif";
import Jackets from "../Assets/Jackets.jfif";
import Popup from "./Popup";

export default function Dashboard() {
  const [CheckoutPopup, setCheckoutPopup] = React.useState(false);
  const [products, setProdcuts] = React.useState([]);
  const [countCap, setCountCap] = React.useState(0);
  const [countJacket, setJacket] = React.useState(0);
  const [countWoolen, setWoolen] = React.useState(0);
  const [countTshirt, setTshirt] = React.useState(0);

  const onHandleClick = () => {
    setCheckoutPopup(true);
  };
  const onAddingtoCart = (item) => {
    let product;
    switch (item) {
      case "Jackets":
        product = {
          price: 99,
          productName: "Jackets",
          Quantity: countJacket,
        };
        setJacket((prevCount) => prevCount + 1);
        setProdcuts((item) => [...item, product]);
        break;
      case "Cap":
        product = {
          price: 20,
          productName: "Cap",
          Quantity: countCap,
        };
        setCountCap((prevCount) => prevCount + 1);
        setProdcuts((item) => [...item, product]);
        break;
      case "Tshirt":
        product = {
          price: 50,
          productName: "Tshirt",
          Quantity: countTshirt,
        };
        setTshirt((prevCount) => prevCount + 1);
        setProdcuts((item) => [...item, product]);
        break;
      case "woolenCap":
        product = {
          price: 50,
          productName: "woolenCap",
          Quantity: countWoolen,
        };
        setWoolen((prevcount) => prevcount + 1);
        setProdcuts((item) => [...item, product]);
        break;
      default:
    }
  };
  return (
    <>
      <Container maxWidth="">
        <label
          style={{
            fontFamily: "cursive",
            font: "bold",
            fontSize: "2.5em",
            margin: "2em",
          }}>
          Welcome to VasyStore
        </label>
        <Grid container spacing={1}>
          <Grid item sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={Cap}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cap
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CAP to Look cool with logo
                </Typography>
                <Typography>$ 45</Typography>
                <Typography>In Stock (500)</Typography>
              </CardContent>
              <CardActions
                onClick={() => onAddingtoCart("Cap")}
                style={{ cursor: "pointer" }}>
                Add to cart&nbsp;{countCap}
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={Jackets}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jackets
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy 1 get 1 free
                </Typography>
                <Typography>$ 99</Typography>
                <Typography>In Stock (20)</Typography>
              </CardContent>
              <CardActions
                onClick={() => onAddingtoCart("Jackets")}
                style={{ cursor: "pointer" }}>
                {" "}
                Add to cart&nbsp;{countJacket}
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={WoolenCap}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Woolen Cap
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cap to keep baby body warm
                </Typography>
                <Typography>$ 25</Typography>
                <Typography>In Stock (300)</Typography>
              </CardContent>
              <CardActions
                onClick={() => onAddingtoCart("woolenCap")}
                style={{ cursor: "pointer" }}>
                {" "}
                Add to cart&nbsp;{countWoolen}
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={Tshirt}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  T-Shirt{" "}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Boy Looks Dashing after wearing
                </Typography>
                <Typography>$ 35</Typography>
                <Typography>In Stock (400)</Typography>
              </CardContent>
              <CardActions
                onClick={() => onAddingtoCart("Tshirt")}
                style={{ cursor: "pointer" }}>
                {" "}
                Add to cart&nbsp;{countTshirt}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Button
          onClick={() => onHandleClick()}
          variant="outlined"
          style={{ margin: "2em" }}>
          Checkout
        </Button>
      </Container>
      <Popup
        title="Checkout"
        openPopup={CheckoutPopup}
        setOpenPopup={setCheckoutPopup}>
        <div>
          <label>Bill System </label>
        </div>
      </Popup>
    </>
  );
}
