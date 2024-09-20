import React from 'react';
import {View, Pressable, TouchableOpacity} from 'react-native';
import {useTheme, Text, makeStyles} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type TextComponentProps = {};

const COLORS = [
  '2196f3',
  'e91e63',
  '3d5afe',
  '4615b2',
  'ffd600',
  'ff5722',
  '00a152',
];

const TextComponent: React.FunctionComponent<TextComponentProps> = () => {
  const {theme, updateTheme} = useTheme();
  const styles = useStyles();

  return (
    <Tester>
      <TestSuite name="Theme">
        <TestCase itShould="Rounded Buttons" tags={['C_API']}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: theme.colors.primary,
            }}>
            Theme
          </Text>
          <View style={styles.view}>
            <Text>Simply select colors using the palette below.</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {COLORS.map(color => (
                <TouchableOpacity
                  key={color}
                  style={{
                    backgroundColor: '#' + color,
                    height: 50,
                    width: '100%',
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    updateTheme({
                      lightColors: {
                        primary: '#' + color,
                      },
                      darkColors: {
                        primary: '#' + color,
                      },
                    });
                  }}
                />
              ))}
            </View>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const useStyles = makeStyles({
  view: {
    margin: 10,
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
  more: {
    marginVertical: 20,
  },
  button: {
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default TextComponent;
