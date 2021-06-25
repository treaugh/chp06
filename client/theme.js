import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
     palette: {
      primary: {
      light: '#8db7d6',
      main: '#5482c7',
      dark: '#274675',
      contrastText: '#e5e6e3',
    },
    secondary: {
      light: '#e8fac3',
      main: '#cfe3a6',
      dark: '#9eb374',
      contrastText: '#e5e6e3',
    },
      openTitle: '#718c99',
      protectedTitle: '#a8c46e',
      type: 'light'
    }
  })


  export default theme
