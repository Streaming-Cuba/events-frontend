import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#ffffff",
      dark: "#f0f0f0",
      light: "#ffffff"
    }
  }
});

export default darkTheme;
