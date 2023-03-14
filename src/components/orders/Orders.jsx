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
import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  onValue,
} from "firebase/database";

export default function Orders() {
  const db = StarFirebase();
  const dataArray = [];

  const ordersRef = ref(db, "Orders/" + moment().format("YYYY-MM-DD/"));
  onValue(ordersRef, (snapshot) => {
    const data = snapshot.val();
    for (const [key, value] of Object.entries(data)) {
      dataArray.push({ key, value });
    }
    //console.log(dataArray);
  });

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
              {dataArray.map((data) => {
                return (
                  <TableRow>
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
