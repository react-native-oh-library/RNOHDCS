import React, { useState } from 'react';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import SwipeRating from 'react-native-ratings/dist/SwipeRating';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center"
  }
});

export function RatingsDemo() {
  const [srating, setsRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [wrating, setwRating] = useState(0);

  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating);
    setRating(rating);
  };
  const ratingStart = (rating: number) => {
    console.log("Rating is: " + rating);
    setsRating(rating);
  };
  const swipeRating = (rating: number) => {
    console.log("Rating is: " + rating);
    setwRating(rating);
  };

  return (
    <ScrollView>
      <Tester style={{ flex: 1 }}>
        <TestSuite name="RatingsDemoExample">
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example">
            <View>
              <Text style={styles.title}>onFinishRating</Text>
              <Text style={styles.title}>{rating}</Text>
            </View>
            <View>
              <Text style={styles.title}>onStartRating</Text>
              <Text style={styles.title}>{srating}</Text>
            </View>
            <View>
              <Text style={styles.title}>onSwipeRating</Text>
              <Text style={styles.title}>{wrating}</Text>
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(type=star)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
              onStartRating={ratingStart}
              onSwipeRating={swipeRating}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(type=heart)">
            <Rating
              type="heart"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingTextColor=blue)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
              ratingTextColor='blue' // 设置评分文本颜色
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingTextColor=red)">
            <Rating
              type="heart"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
              ratingTextColor='red' // 设置评分文本颜色
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(imageSize=30)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(imageSize=60)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={60}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(showRating=ture)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(showRating=false)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating={false}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(readonly=ture)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              readonly
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(readonly=false)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(startingValue=3)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              startingValue={3}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(startingValue=5)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              startingValue={5}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(fractions=4)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              fractions={4}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(fractions=2)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              fractions={2}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(minValue=4)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              minValue={4}
              showRating
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(minValue=2)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              minValue={2}
              showRating
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(jumpValue=2)">
            <Rating
              type="star"
              jumpValue={2}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(jumpValue=3)">
            <Rating
              type="star"
              jumpValue={3}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingCount=5)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingCount=8)">
            <Rating
              type="star"
              ratingCount={8}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>



          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingImage=assets/expo.png)">
            <Rating
              type="custom"
              ratingImage={require('./assets/expo.png')}
              ratingColor="#3498db"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={6}
              imageSize={40}
              onFinishRating={ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingImage=assets/react-native-logo.png)">
            <Rating
              type="custom"
              ratingImage={require('./assets/react-native-logo.png')}
              ratingColor="#3498db"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={6}
              imageSize={40}
              onFinishRating={ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingColor=blue)">
            <Rating
              type="custom"
              ratingImage={require('./assets/expo.png')}
              ratingColor="blue"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingColor=red)">
            <Rating
              type="custom"
              ratingImage={require('./assets/expo.png')}
              ratingColor="red"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingBackgroundColor=blue)">
            <Rating
              type="custom"
              ratingImage={require('./assets/expo.png')}
              ratingBackgroundColor="blue"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingBackgroundColor=red)">
            <Rating
              type="custom"
              ratingImage={require('./assets/expo.png')}
              ratingBackgroundColor="red"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(tintColor=blue)">
            <Rating
              type="star"
              tintColor="blue"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(tintColor=red)">
            <Rating
              type="star"
              tintColor="red"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(defaultRating=3)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              defaultRating={3}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(defaultRating=1)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              defaultRating={1}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(reviews=[T,B,O, d, G])">
            <AirbnbRating
              count={5}
              reviews={["T", "B", "O", "d", "G"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(reviews=[Terrible,Bad,Okay, Good, Great])">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(count=3)">
            <AirbnbRating
              count={3}
              reviews={["Terrible", "Bad", "Okay"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(count=5)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(selectedColor=red)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              selectedColor="red"
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(selectedColor=blue)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              selectedColor="blue"
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(reviewColor=blue)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              reviewColor="blue"
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(reviewColor=red)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              reviewColor="red"
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(size=20)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(size=40)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={40}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(reviewSize=25)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              reviewSize={25}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(reviewSize=40)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              reviewSize={40}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(showRating=ture)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(showRating=false)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              showRating={false}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(isDisabled=false)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(isDisabled=ture)">
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              isDisabled
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(starImage=assets/expo.png)">
            <AirbnbRating
              count={5}
              starImage={require('./assets/expo.png')}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(starImage=assets/react-native-logo.png)">
            <AirbnbRating
              count={5}
              starImage={require('./assets/react-native-logo.png')}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(starContainerStyle=backgroundColor: red)">
            <AirbnbRating
              count={5}
              starImage={require('./assets/react-native-logo.png')}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              starContainerStyle={{ backgroundColor: "red" }}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(starContainerStyle=backgroundColor: blue)">
            <AirbnbRating
              count={5}
              starImage={require('./assets/react-native-logo.png')}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              starContainerStyle={{ backgroundColor: "blue"}}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingContainerStyle=backgroundColor: red)">
            <AirbnbRating
              count={5}
              starImage={require('./assets/react-native-logo.png')}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              ratingContainerStyle={{ backgroundColor: "red" }}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(ratingContainerStyle=backgroundColor: blue)">
            <AirbnbRating
              count={5}
              starImage={require('./assets/react-native-logo.png')}
              reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
              size={20}
              ratingContainerStyle={{ backgroundColor: "blue" }}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(style=backgroundColor: red)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              style={{ backgroundColor: "red" }}
              onFinishRating={ratingCompleted}
            />
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="Tester Scrollable Tabview Example(style=backgroundColor: blue)">
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              style={{ backgroundColor: "blue" }}
              onFinishRating={ratingCompleted}
            />
          </TestCase>
        </TestSuite>
      </Tester >
    </ScrollView>
  );
};

// export RatingsDemo;