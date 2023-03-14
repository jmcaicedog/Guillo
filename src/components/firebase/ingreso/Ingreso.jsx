import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import StarFirebase from "../config/firebaseConfig";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  getDatabase,
  onValue,
} from "firebase/database";

import moment from "moment";

const Ingreso = () => {
  const [state, setState] = useState({
    db: "",
    peso0: "",
    peso1: "",
    pesoNeto: "",
    tipo: "",
    valor: "",
    fecha: "",
    hora: "",
  });
  const [matricula, setMatricula] = useState("");

  useEffect(() => {
    setState({ db: StarFirebase() });
  }, []);

  const insertData = () => {
    const db = state.db;
    const data = {
      matricula: matricula,
      peso0: "1200",
      peso1: "1440",
      pesoNeto: "240",
      tipo: "Mixto",
      valor: "3200",
      fecha: "13/02/2023",
      hora: "10:35",
    };
    set(
      ref(
        db,
        "Orders/" +
          moment().format("YYYY-MM-DD/") +
          data.matricula +
          "/" +
          moment().format("h:mm:ss")
      ),
      data
    )
      .then(() => {
        alert("Dato guardado");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const updateData = () => {
    const db = state.db;
    const data = {
      peso0: "1200",
      peso1: "1440",
      pesoNeto: "240",
      tipo: "Mixto",
      valor: "3200",
      fecha: "13/02/2023",
      hora: "10:35",
    };
    set(ref(db, "Orders/" + moment().format("YYYY-MM-DD/h:mm:ss")), data)
      .then(() => {
        alert("Dato actualizado");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const removeData = () => {
    const db = state.db;
    const data = {
      peso0: "1200",
      peso1: "1440",
      pesoNeto: "240",
      tipo: "Mixto",
      valor: "3200",
      fecha: "13/02/2023",
      hora: "10:35",
    };
    set(ref(db, "Orders/" + moment().format("YYYY-MM-DD/h:mm:ss")), data)
      .then(() => {
        alert("Dato borrado");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMatricula(e.target.value);
  };

  return (
    <Paper
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="matricula"
          value={matricula}
          name="matricula"
          label="Matrícula"
          variant="outlined"
          onChange={handleChange}
        />
      </Box>
      <Button variant="contained" onClick={() => insertData()}>
        ABRIR ÓRDEN
      </Button>
    </Paper>
  );
};

export default Ingreso;
