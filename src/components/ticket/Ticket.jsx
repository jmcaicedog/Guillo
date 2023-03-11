import { ConectorPluginV3 } from "./components/ticket/impresora";

import React from "react";

export default async function Ticket() {
  const URLPlugin = "http://localhost:8000";
  const conector = new ConectorPluginV3(URLPlugin);
  conector.Iniciar();
  conector.EscribirTexto("Chatarra hijueputa...guillo ");
  conector.Feed(1);
  conector.Pulso(48, 60, 150);
  const respuesta = await conector.imprimirEn("SAT15TUS");
  if (respuesta === true) {
    alert("Correcto!");
  } else {
    alert("Error!: " + respuesta);
  }
  return <div>Ticket</div>;
}
