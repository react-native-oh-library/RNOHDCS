import { ComponentsScreen } from './screens/ComponentsScreen';
import { ReduxScreen } from './screens/ReduxScreen';
import { SagasScreen } from './screens/SagasScreen';
import { CheckInternetConnectionScreen } from './screens/CheckInternetConnectionScreen';
import { View } from 'react-native';

//react-native-offline demo入口
export const OfflineDemoTest = () => {
    return (
        <View>
            <ComponentsScreen></ComponentsScreen>
            <ReduxScreen></ReduxScreen>
            <SagasScreen></SagasScreen>
            <CheckInternetConnectionScreen></CheckInternetConnectionScreen>
        </View>
    );
};