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
//import Box from "@mui/material/Box";
//import Modal from "@mui/material/Modal";

export default function Orders() {
  return (
    <>
      <Grid item xs={12} md={8} lg={9}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Divider />
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Matrícula</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Correo electrónico</TableCell>
                <TableCell align="center">Cupones registrados</TableCell>
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
                      4615672
                    </Button>
                  </TableCell>
                  <TableCell>Pedro</TableCell>
                  <TableCell>pedro@pedro.com</TableCell>
                  <TableCell align="center">12</TableCell>
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
