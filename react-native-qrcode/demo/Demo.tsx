import { View } from "react-native";
import QRCode from 'react-native-qrcode-svg';
export const SvgDemo = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
             <QRCode 
            size={200}
            color="green"
            value="qrcodesvg"
            />
        </View>
    )
}