import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#555706',
      },
      secondary: {
        main: '#000001',
      },
    },

    typography: {
      fontFamily: ["Segoe UI"
      ].join(','),
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;