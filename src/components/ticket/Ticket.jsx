import { ConectorPluginV3 } from "./impresora";
import Button from "@mui/material/Button";
import React from "react";
import logo from "./logo_carza.png";

export default function Ticket() {
  const URLPlugin = "http://localhost:8000";
  const conector = new ConectorPluginV3(URLPlugin);
  console.log(logo);
  const respuesta = async () => {
    try {
      await conector
        .Iniciar()
        .HabilitarCaracteresPersonalizados()
        .DeshabilitarElModoDeCaracteresChinos()
        .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
        .EstablecerTamañoFuente(2, 2)

        .EscribirTexto("CARSA SA\n\n\n")
        .EstablecerTamañoFuente(2, 1)
        .EscribirTexto(
          "FECHA: " + new Intl.DateTimeFormat("es-ES").format(new Date()) + "\n"
        )
        .EstablecerTamañoFuente(2, 1)
        .EscribirTexto("KVN-153\n\n\n")
        .Feed(1)
        .EstablecerTamañoFuente(1, 1)
        .EstablecerAlineacion(ConectorPluginV3.ALINEACION_IZQUIERDA)
        .EscribirTexto("Tipo de chatarra: Mixto\n")
        .EscribirTexto("Peso total: 2300 Kg\n\n")
        .EscribirTexto("TOTAL: $3.740\n\n\n")
        .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
        .EscribirTexto("20102 SAN JOSE, ALAJUELA\n")
        .EscribirTexto("+50672053909\n\n\n\n")

        .Pulso(48, 60, 150)
        .imprimirEn("SAT15TUS");
    } catch (error) {
      console.log("Error!: " + error);
    }
  };
  return (
    <Button
      variant="contained"
      onClick={() => respuesta()}
      sx={{
        display: "flex",
        alignSelf: "center",
        width: "100%",
        marginBottom: "20px",
      }}
    >
      IMPRIMIR
    </Button>
  );
}
