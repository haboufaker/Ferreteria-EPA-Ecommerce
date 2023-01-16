import { createTheme } from '@mui/material/styles';
import { typography } from '@mui/system';

export const shades= {
    primary: {
        100: '#525252',
        200: '#3D3D3D',
        300: '#292929',
        400: '#141414',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000'
    },
    secondary: {
        100: '#FF7A8C',  
        200: '#FF5168',  
        300: '#FF2945',  
        400: '#FF0021',  
        500: '#D6001C',  
        600: '#9E0015',  
        700: '#66000D',  
        800: '#2E0006',  
        900: '#000000'
    },
    neutral: {
        100: '#FFFFFF',  
        200: '#FFFFFF',  
        300: '#F7F7F7',  
        400: '#E3E2E2',  
        500: '#CFCDCD',  
        600: '#B4B0B0',  
        700: '#989494',  
        800: '#7C7777',  
        900: '#605C5C'
    }
};

export const theme =createTheme({
    palette: {
        primary: {
            main: shades.primary[500]
        },
        secondary: {
            main: shades.secondary[500]
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    },

    typography: {
        fontFamily: ["Fauna One", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 36,
        },
        h3: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 14,
        },
    }
})
