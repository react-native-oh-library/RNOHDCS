
import { PaperProvider } from 'react-native-paper';
import { View} from 'react-native';
import App from '../App';

export default function PaperExample() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }