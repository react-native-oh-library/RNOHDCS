import React from 'react';
import { Text, Divider} from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';

type DividerViewTypes = {};

const DividerView: React.FunctionComponent<DividerViewTypes> = () => {
  return (
    <>
      <Text style={styles.titleStyle}>Divider</Text>
      <ScrollView>
        <Text style={styles.subTitleStyle}>Horizontal Dividers</Text>
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>Horizontal Divider</Text>
          <Divider />
          <Text style={styles.horizontalText}>
            Horizontal Divider with width and color
          </Text>
          <Divider width={5} color='#397af8' />
        </View>
        <Text style={styles.subTitleStyle}>Horizontal Divider with Inset</Text>
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
        <Text style={styles.subTitleStyle}>Vertical Divider</Text>
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
        <Text style={styles.horizontalText}>Divider with SubHeader</Text>
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>Left text</Text>
          <Divider
            subHeader="Divider"
            inset={true}
            subHeaderStyle={{ color: '#397af8' }}
          />
          <Text style={styles.horizontalText}>Right text</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    marginBottom: 10,
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
