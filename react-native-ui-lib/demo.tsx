// MyScreen.js

import React, {Component} from 'react';
import {
  Colors,
  Typography,
  Spacings,
  ThemeManager,
  View,
  Text,
  Card,
  Button,
  TextField,
} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';

Colors.loadColors({
  primaryColor: 'red',
  secondaryColor: '#81C3D7',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'},
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});

// with plain object
ThemeManager.setComponentTheme('Card', {
  borderRadius: 8,
});

// with a dynamic function
ThemeManager.setComponentTheme('Button', (props: any, context: string) => {
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  if (props.square) {
    return {
      borderRadius: 10,
    };
  }
});

export default class GitHubExample extends Component {
  render() {
    return (
      <View style={{width: '100%', flex: 1, backgroundColor: 'grey'}}>
        <ScrollView style={{flex: 1}}>
          <View flex padding-page>
            <Text heading marginB-s4>
              My Screen
            </Text>

            <Card center padding-card marginB-s4>
              <View padding-page>
                <TextField text50 placeholder="username" grey10 />
                <TextField
                  text50
                  placeholder="password"
                  secureTextEntry
                  grey10
                />
              </View>
            </Card>

            <Button label="Button" body bg-primaryColor square></Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
