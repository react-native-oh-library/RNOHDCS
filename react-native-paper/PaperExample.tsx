
import { PaperProvider,MD3LightTheme as DefaultTheme,} from 'react-native-paper';
import App from './App';

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: '#BADA55',
  },
};

export default function PaperExample() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
}