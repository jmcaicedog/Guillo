import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ScaleIcon from "@mui/icons-material/Scale";
import PrintIcon from "@mui/icons-material/Print";
import StarFirebase from "../firebase/config/firebaseConfig";
import moment from "moment";
import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import Swal from "sweetalert2";

const db = StarFirebase();

export default function Orders({ value }) {
  const [orders, setOrders] = useState({ tableData: [] });
  const hoy = moment().format("YYYY-MM-DD/");

  const setPeso1 = (matricula) => {
    set(
      ref(
        db,
        "Orders/" + moment().format("YYYY-MM-DD") + "/" + matricula + "/hora1"
      ),
      moment().format("h:mm:ss")
    );
    set(
      ref(
        db,
        "Orders/" + moment().format("YYYY-MM-DD") + "/" + matricula + "/peso1"
      ),
      value
    )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Peso final registrado",
          confirmButtonColor: "#E95725",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "success",
          title: "Ocurrió un error:",
          text: error,
        });
      });

    console.log(matricula);
  };

  useEffect(() => {
    const ordersRef = ref(db, "Orders/" + hoy);

    onValue(ordersRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      setOrders({ tableData: records });
    });
  }, [hoy]);

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
              {orders.tableData.map((data, id) => {
                return (
                  <TableRow key={id}>
                    <TableCell>
                      <Button
                        onClick={() => {
                          //setUser(user);
                          //handleOpen();
                        }}
                      >
                        {data.key}
                      </Button>
                    </TableCell>
                    <TableCell>{data.data.peso0 + " Kg"}</TableCell>
                    <TableCell>
                      {data.data.peso1 ? (
                        data.data.peso1 + " Kg"
                      ) : (
                        <IconButton
                          onClick={() => {
                            setPeso1(data.key);
                          }}
                          color="primary"
                        >
                          <ScaleIcon fontSize="small" />
                        </IconButton>
                      )}
                    </TableCell>
                    <TableCell>
                      {data.data.peso1
                        ? data.data.peso0 - data.data.peso1 + " Kg"
                        : "--"}
                    </TableCell>
                    <TableCell>{data.data.tipo}</TableCell>
                    <TableCell align="center">
                      {data.data.valor ? (
                        data.data.valor
                      ) : (
                        <IconButton color="primary">
                          <PrintIcon fontSize="small" />
                        </IconButton>
                      )}
                    </TableCell>
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
