import {backgroundColor, createTheme} from '@shopify/restyle';

const palette = {
  cardClor:'#000',
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    cardBackgroundColor:palette.greenLight,
    backgroundColorRestyle:palette.black,
    backgroundColorRestyleTwo:palette.greenLight
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  boxVariants:{
    default:{
      width:'100%',
      height:200,
    }
    
    
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 20,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
  cardVariants:{
    regular: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 5},
      shadowRadius: 15,
      elevation: 5,
    }
  }
});

export type Theme = typeof theme;
export default theme;