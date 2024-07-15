import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CardView from '@react-native-oh-tpl/react-native-cardview';

export default class Example2 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>

<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>  
  <CardView style={styles.card }
  cardElevation={0}  
  cardMaxElevation={0}  
  cornerRadius={5}  
>   
<View>  
        <Text style={styles.text}>Elevation 0</Text>  
      </View>   
  </CardView>  
  <CardView style={styles.card }
  cardElevation={3}  
  cardMaxElevation={3}  
  cornerRadius={5}  
>  
    <Text style={styles.text}>Elevation 1</Text>  
  </CardView>  
</View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>  
  <CardView style={styles.card }
  cardElevation={6}  
  cardMaxElevation={6}  
  cornerRadius={5}  
>   
<View>  
        <Text style={styles.text}>Elevation 2</Text>  
      </View>   
  </CardView>  
  <CardView style={styles.card }
  cardElevation={9}  
  cardMaxElevation={9}  
  cornerRadius={5}  
>  
    <Text style={styles.text}>Elevation 3</Text>  
  </CardView>  
</View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>  
  <CardView style={styles.card }
  cardElevation={12}  
  cardMaxElevation={12}  
  cornerRadius={5}  
>   
<View>  
        <Text style={styles.text}>Elevation 4</Text>  
      </View>   
  </CardView>  
  <CardView style={styles.card }
  cardElevation={15}  
  cardMaxElevation={15}  
  cornerRadius={5}  
>  
    <Text style={styles.text}>Elevation 5</Text>  
  </CardView>  
</View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>  
  <CardView style={styles.card }
  cardElevation={18}  
  cardMaxElevation={18}  
  cornerRadius={5}  
>   
<View>  
        <Text style={styles.text}>Elevation 6</Text>  
      </View>   
  </CardView>  
  <CardView style={styles.card }
  cardElevation={21}  
  cardMaxElevation={21}  
  cornerRadius={5}  
>  
    <Text style={styles.text}>Elevation 7</Text>  
  </CardView>  
</View>

               
        </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 20
  },
  text: {
    textAlign: 'center',
    margin: 20,
    height: 75
  }
});