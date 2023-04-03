import Digitaldisplay from "./components/display/Digitaldisplay";
import Orders from "./components/orders/Orders";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Ingreso from "./components/firebase/ingreso/Ingreso";

function App() {
  const mdTheme = createTheme({
    palette: {
      primary: {
        light: "#F8C192",
        main: "#E95725",
        dark: "#FAB429",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#FAB429",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 6, mb: 4, padding: 0 }}>
            <Grid
              container
              spacing={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Orders />
              <Stack spacing={2} ml={2}>
                <Digitaldisplay />
                <Ingreso />
              </Stack>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
