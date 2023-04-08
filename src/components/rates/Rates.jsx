import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import StarFirebase from "../firebase/config/firebaseConfig";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import moment from "moment";

const db = StarFirebase();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Rates = () => {
  const hoy = moment().format("YYYY-MM-DD/");
  const [open, setOpen] = React.useState(false);
  const [rates, setRates] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const ratesRef = ref(db, "Rates");

    onValue(ratesRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      setRates(records);
    });
  }, [hoy]);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          display: "flex",
          alignSelf: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        TARIFAS
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ElectricRickshawIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Carrocería"
                secondary={rates[0] ? "₡" + rates[0].data : "No data"}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalShippingIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sólida"
                secondary={rates[1] ? "₡" + rates[1].data : "No data"}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <RvHookupIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Mixta"
                secondary={rates[2] ? "₡" + rates[2].data : "No data"}
              />
            </ListItem>
          </List>
        </Box>
      </Modal>
    </div>
  );
};

export default Rates;
