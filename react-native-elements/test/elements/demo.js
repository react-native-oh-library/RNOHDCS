import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { View } from 'react-native';
const edges = ['left', 'right','top']
export default Center = () => {
    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <SafeAreaView edges={edges} style={{
                width: '100%',
                flexDirection: 'row',
            }}>
                <View style={{ width: '100%', height: 200, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'ce' }}>
                    <View style={{ width: 200, height: 100, backgroundColor: 'yellow' }}></View>
                </View>
            </SafeAreaView>
        </View>
    )
}