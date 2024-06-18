import { createTheming } from '@callstack/react-theme-provider';

export const themes = {
    normal: {
        primaryColor: '#FFA72A',
        accentColor: '#458622',
        backgroundColor: '#FFC777',
        textColor: '#504f4d',
        secondaryColor: '#7F5315',
        textSize: 20
    },
    crazy: {
        primaryColor: '#1B8C81',
        accentColor: '#458622',
        backgroundColor: '#8FC266',
        textColor: '#D94B2B',
        secondaryColor: '#B9667F',
        textSize: 30
    }
};

type Theme = typeof themes.normal;

const { ThemeProvider, useTheme, withTheme } = createTheming<Theme>(themes.normal);

export { ThemeProvider, useTheme, withTheme };