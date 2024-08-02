import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        width: '100@s', // = scale(100)
        height: '200@vs', // = verticalScale(200)
        padding: '2@msr', // = Math.round(moderateScale(2))
        margin: 5
    }
});

export default class sizeMattersDemo {
  render() {
    return (
        <View style={styles.container} >
            <Text>调用create方法</Text>
        </View>
    );
  }
}