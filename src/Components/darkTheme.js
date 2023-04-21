import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#272727',
        },
        gray_text: {
            main: '#525252',
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#565656',
                    textDecorationColor: '#a4a4a4', // Add the desired underline color here
                    '&:hover': {
                        textDecorationColor: '#000000', // Also update the underline color on hover
                    },
                },
            },
        },
    },
});

export default darkTheme;