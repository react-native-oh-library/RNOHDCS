import {Text, ScrollView, View, StyleSheet} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

function Shadow2Demo(){
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>shadow2测试</Text>
                <View style={styles.sliders}>
                    <Text style={styles.title}>base</Text>
                    <Shadow>
                        <Text style={styles.box}>base</Text>
                    </Shadow>

                    <Text style={styles.title}>startColor</Text>
                    <Shadow startColor={'#eb9066d8'} >
                        <Text style={styles.box}>startColor</Text>
                    </Shadow> 

                    <Text style={styles.title}>endColor</Text>
                    <Shadow endColor={'#ff00ff10'}>
                        <Text style={styles.box}>endColor</Text>
                    </Shadow>

                    <Text style={styles.title}>distance</Text>
                    <Shadow distance={50}>
                        <Text style={styles.box}>distance</Text>
                    </Shadow>

                    {/* <Text style={styles.title}>offset</Text>
                    <Shadow offset={[10, 4]}>
                        <Text style={styles.box}>offset</Text>
                    </Shadow>

                    <Text style={styles.title}>paintInside</Text>
                    <Shadow style={styles.shadow} paintInside startColor={'#eb9066d8'} >
                        <Text style={styles.box}>paintInside</Text>
                    </Shadow>  */}

                    <Text style={styles.title}>sides</Text>
                    <Shadow style={styles.shadow} sides={{ start: false, end: true, top: false, bottom: false }} startColor={'#eb9066d8'} >
                        <Text style={styles.box}>sides</Text>
                    </Shadow>

                    {/* <Text style={styles.title}>corners</Text>
                    <Shadow style={styles.shadow} distance={20} corners={{ topStart: false, topEnd: false, bottomStart: true, bottomEnd: false }} startColor={'red'} >
                        <Text style={styles.box}>corners</Text>
                    </Shadow> */}

                    <Text style={styles.title}>style</Text>
                    <Shadow style={{marginTop: 10}}>
                        <Text style={styles.box}>style</Text>
                    </Shadow> 

                    <Text style={styles.title}>containerStyle</Text>
                    <Shadow containerStyle={{backgroundColor: 'red'}}>
                        <Text style={styles.box}>containerStyle</Text>
                    </Shadow> 

                    <Text style={styles.title}>stretch</Text>
                    <Shadow stretch>
                        <Text style={styles.box}>stretch</Text>
                    </Shadow>

                    <View style={{width: 200, height: 200}}>
                    <Text style={styles.title}>safeRender</Text>
                    <Shadow distance={10} safeRender={true}>
                        <Text style={{width: '100%', height: '80%', backgroundColor: 'red'}}>shadow</Text>
                    </Shadow>
                    </View>

                    <Text style={styles.title}>disabled</Text>
                    <Shadow disabled>
                        <Text style={styles.box}>disabled</Text>
                    </Shadow>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliders: {
      margin: 20,
      width: 280,
    },
    shadow: {
        marginBottom: 20
    },
    text: {
      alignSelf: 'center',
      paddingVertical: 20,
    },
    title: {
      fontSize: 30,
      marginTop: 20
    },
    box: {
        margin: 20,
        fontSize: 16
    },
    sliderOne: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

export default Shadow2Demo;