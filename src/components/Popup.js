import {
  DialogContent,
  DialogTitle,
  Dialog,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import shadows from "@material-ui/core/styles/shadows";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0,0,0,0)",
  },
  paper: {
    // border: "1.5px solid #126AFC",
    boxShadow: "0px 3px 12px #00000029",
    //width: "38em",
    overflow: "hidden !important",
    borderRadius: "0px",
  },
  dialogTitle: {
    fontFamily: "Saira_SemiBold",
    textAlign: "left",
    padding: "1.0625em 1.8125em",
    background: "#016AFF",
    color: "#FFFFFF",
    height: "3.4em",
    width: "100%",
    overflow: "hidden !important",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 3px 12px #00000029",
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      classes={{ root: classes.root, paper: classes.paper }}
      // style={{ border: "1px solid black" }}
    >
      <div style={{ display: "flex" }}>
        <Typography
          variant="h6"
          component="div"
          style={{ flexGrow: 1 }}></Typography>
        <Button
          color=""
          text="X"
          onClick={() => {
            setOpenPopup(false);
          }}>
          <CloseIcon />
        </Button>
      </div>
      <DialogTitle></DialogTitle>
      <DialogContent>{children}</DialogContent>
      {/* <br></br> */}
    </Dialog>
  );
}
