import { createTheme } from "@mui/material";

export const GenerateTheme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#fff",
    },
  },

  typography: {
    fontFamily: "open sans, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1900,
      xl: 2000,
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(15, 15, 15, 0.2)",
          boxShadow: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&.MuiInputBase-input": {
            padding: "5px 24px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: "0px",
          paddingBottom: "0px",
        },
      },
    },
  },
});
