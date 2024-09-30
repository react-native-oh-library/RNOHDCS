import React from 'react';
import { Text, Divider } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

type DividerViewTypes = {};

const DividerView: React.FunctionComponent<DividerViewTypes> = () => {
  return (
    <Tester>
      <TestSuite name='Buttons'>
        <Text style={styles.titleStyle}>Divider</Text>
        <ScrollView>
          <TestCase itShould='Horizontal Dividers' tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>Horizontal Divider</Text>
              <Divider />
              <Text style={styles.horizontalText}>
                Horizontal Divider with width and color
              </Text>
              <Divider width={5} color='#397af8' />
            </View>
          </TestCase>
          <TestCase itShould='orizontal Divider with Inset' tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>
                Horizontal Divider with left inset
              </Text>
              <Divider inset={true} />
              <Text style={styles.horizontalText}>
                Horizontal Divider with right inset
              </Text>
              <Divider inset={true} insetType="right" />
              <Text style={styles.horizontalText}>
                Horizontal Divider with middle inset
              </Text>
              <Divider inset={true} insetType="middle" />
              <Text style={styles.horizontalText}>Welcome to RNE App</Text>
            </View>
          </TestCase>
          <TestCase itShould='Vertical Divider' tags={['C_API']}>
            <View style={{ backgroundColor: '#000' }}>
              <View style={styles.vertical}>
                <Text>Left text</Text>
                <Divider orientation="vertical" />
                <Text>Right text</Text>
              </View>
              <View style={styles.vertical}>
                <Text>Left text</Text>
                <Divider orientation="vertical" width={5} />
                <Text>Right text</Text>
              </View>
            </View>
          </TestCase>
          <TestCase itShould='Divider with SubHeader' tags={['C_API']}>
            <View style={styles.horizontal}>
              <Text style={styles.horizontalText}>Left text</Text>
              <Divider
                subHeader="Divider"
                inset={true}
                subHeaderStyle={{ color: '#397af8' }}
              />
            </View>
          </TestCase>
        </ScrollView>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    marginBottom: 10,
    backgroundColor: '#000'
  },
  horizontalText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DividerView;
