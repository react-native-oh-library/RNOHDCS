import React, { useState } from 'react';
import FlipCard from 'react-native-flip-card'
import { Text, View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';

export const FlipCardExample = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      marginTop: 20,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    card: {
      width: 200,
      marginTop:20
    },
    face: {
      flex: 1,
      backgroundColor: '#2ecc71',
      justifyContent: 'center',
      alignItems: 'center',
    },
    back: {
      flex: 1,
      backgroundColor: '#f1c40f',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 100,
      height: 30,
      marginTop: 30,
      paddingTop: 6,
      paddingBottom: 6,
      borderRadius: 3,
      borderWidth: 1,
      backgroundColor: '#007AFF',
      borderColor: 'transparent',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
    img: {
      flex: 1,
      height: 64
    }
  });
  const [flip,setFlip] = useState(false);
var CARDS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const MyFlipCard = ({val}) => {
    return (
      <View style={{margin: 3}}>
        <FlipCard
          style={styles.card}
        >
          {/* Face Side */}
          <View style={styles.face}>
            <Text>Card {val}</Text>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
            <Text>The back side</Text>
          </View>
        </FlipCard>
      </View>
    )
  }
const createCard = (val, i) => <MyFlipCard key={i} val={val}/>

  return (
    <View style={styles.container} >
      <ScrollView>
        <Text style={styles.welcome}>Flip Card Example</Text>
        <View>
          <Text style={styles.welcome}>Minimal</Text>
          <FlipCard 
          style={{ marginBottom: 5 }}>
            {/* Face Side */}
            <View style={styles.face}>
              <Text>The Face</Text>
            </View>
            {/* Back Side */}
            <View style={styles.back}>
              <Text>The Back</Text>
            </View>
          </FlipCard>

          <Text style={styles.welcome}>Customized</Text>
          <FlipCard
            flip={flip}
            friction={3}
            perspective={500}
            flipHorizontal={true}
            flipVertical={false}
            clickable={true}
            style={styles.card}
            alignHeight={true}
            // alignWidth={true}
            onFlipStart={(isFlipStart) => { console.log('isFlipStart', isFlipStart) }}
            useNativeDriver={true}
          >
            {/* Face Side */}
            <View style={styles.face}>
              <Text>The Face</Text>
            </View>
            {/* Back Side */}
            <View style={styles.back}>
              <Text style={{fontSize:50}} > The Back </Text>
            </View>
          </FlipCard>
          <FlipCard
            flip={flip}
            friction={10}
            perspective={4000}
            flipHorizontal={false}
            flipVertical={true}
            clickable={true}
            style={styles.card}
            alignHeight={true}
            // alignWidth={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            {/* Face Side */}
            <View style={styles.face}>
              <Text>The Face</Text>
            </View>
            {/* Back Side */}
            <View style={styles.back}>
              <Text>T</Text>
              <Text>h</Text>
              <Text>e</Text>
              <Text></Text>
              <Text>B</Text>
              <Text>a</Text>
              <Text>c</Text>
              <Text>k</Text>
            </View>
          </FlipCard>
        </View>
        <View>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{setFlip({flip: !flip})}}
              >
              <Text style={styles.buttonText}>Flip</Text>
            </TouchableOpacity>
          </View>
          <View>
            {CARDS.map(createCard)}
          </View>
      </ScrollView>

    </View>
  )


}

