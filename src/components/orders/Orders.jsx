import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { useFirebaseApp, useFirestoreCollection } from "reactfire";
import "firebase/firestore";

export default function Orders() {
  const firebaseApp = useFirebaseApp();
  //const videosRef = firebaseApp.firestore().collection("Orders");
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
              <>
                <TableRow key="0">
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
              </>
            </TableBody>
          </Table>
        </Paper>
      </Grid>

      <Divider />
    </>
  );
}
