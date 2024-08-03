import Slider from "@react-native-community/slider"
import { View } from 'react-native'

export default function SliderExample() {
    return (
        <View style={{ backgroundColor: 'red', width: 200, height: 100 }}>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
    );
};