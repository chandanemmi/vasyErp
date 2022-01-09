import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup(props) {
  const [open, setOpen] = React.useState(false);
  const {
    title,
    openPopup,
    setOpenPopup,
    setProdcuts,
    setCountCap,
    setJacket,
    setWoolen,
    setTshirt,
    product,
  } = props;
  console.log(product);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setProdcuts([]);
    setCountCap(0);
    setJacket(0);
    setWoolen(0);
    setTshirt(0);
    setOpenPopup(false);
  };

  return (
    <div>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Make payment through cash/card
          </DialogContentText>
          <ol>
            {product.map((item, index) => {
              return (
                <li>
                  Product Name:{item.productName}&nbsp; Price:{item.price}&nbsp;
                  Quantity:{item.Quantity}
                </li>
              );
            })}
          </ol>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
