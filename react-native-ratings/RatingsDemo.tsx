import React, { useState } from 'react';
import { Tester, TestSuite } from '@rnoh/testerino';
import { View, Text, StyleSheet } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { TestCase } from '../components';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign:"center"
  }
});

export function RatingsDemo() {
  const [rating, setRating] = useState(3);

  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating);
    setRating(rating);
  };

  return (
    <Tester style={{ flex: 1 }}>
      <TestSuite name="RatingsDemoExample">
        <TestCase.Example
          tags={['C_API']}
          itShould="Tester Scrollable Tabview Example">
          <View style={{ width: '100%',height:550 }}>
            <Text style={styles.title}>Standard Rating</Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />

            <Text style={styles.title}>Custom Icon Rating</Text>
            <Rating
              type="custom"
              ratingImage={require('../assets/expo.png')}
              ratingColor="#3498db"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={6}
              imageSize={40}
              onFinishRating={ratingCompleted}
              style={{ paddingVertical: 10 }}
            />

            <Text style={styles.title}>Airbnb Rating</Text>
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              defaultRating={3}
              size={20}
              onFinishRating={ratingCompleted}
            />

            <Text style={styles.title}>Read-only Rating</Text>
            <Rating
              readonly
              startingValue={rating}
              ratingCount={5}
              imageSize={30}
            />

            <Text style={styles.title}>Fractional Rating</Text>
            <Rating
              fractions={2}
              startingValue={2.5}
              ratingCount={5}
              imageSize={30}
              onFinishRating={ratingCompleted}
            />
          </View>
        </TestCase.Example>
      </TestSuite>
    </Tester>
  );
};

// export RatingsDemo;