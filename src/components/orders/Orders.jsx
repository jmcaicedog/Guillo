import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import StarFirebase from "../firebase/config/firebaseConfig";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  onValue,
  getDatabase,
} from "firebase/database";

const db = StarFirebase();

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersRef = ref(db, "Orders/" + moment().format("YYYY-MM-DD/"));
    return onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((order) => {
          setOrders((orders) => [...orders, order]);
        });
      }
      console.log(orders);
    });
  }, []);

  return (
    <>
      <Grid item xs={12} md={8} lg={9}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Divider />
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Matrícula</TableCell>
                <TableCell>Peso inicial</TableCell>
                <TableCell>Peso final</TableCell>
                <TableCell>Peso neto</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell align="center">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((data, id) => {
                return (
                  <TableRow {...data} key={id}>
                    <TableCell>
                      <Button
                        onClick={() => {
                          //setUser(user);
                          //handleOpen();
                        }}
                      >
                        KVN-153
                      </Button>
                    </TableCell>
                    <TableCell>1200 Kg</TableCell>
                    <TableCell>820 Kg</TableCell>
                    <TableCell>380 Kg</TableCell>
                    <TableCell>Mixto</TableCell>
                    <TableCell align="center">₡1200</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Grid>

      <Divider />
    </>
  );
}
