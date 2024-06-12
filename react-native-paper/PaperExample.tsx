
import { PaperProvider } from 'react-native-paper';
import App from '../App';

export default function PaperExample() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
}