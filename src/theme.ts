import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#5b333',
      },
      secondary: {
        main: '#4f8e9e', //azul bebe
      },
    },

    typography: {
      fontFamily: ["Segoe UI"
      ].join(','),
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;