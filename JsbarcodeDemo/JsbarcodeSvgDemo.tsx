import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Barcode} from './component/SvgComponent';
import {useState} from 'react';

export default function JsbarcodeSvgDemo() {
  const [text, setText] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.testStyle}>format和background：'red'</Text>
        <Barcode
          value="123456789999"
          options={{format: 'UPC', background: 'red'}}
        />
        <Text style={styles.testStyle}>
          format: 'EAN13', background: 'yellow'
        </Text>
        <Barcode
          value="9501101530003"
          options={{format: 'EAN13', background: 'yellow'}}
        />
        <Text style={styles.testStyle}>
          format: 'CODE128', background: 'pink'
        </Text>
        <Barcode
          value="7895641245"
          options={{format: 'CODE128', background: 'pink'}}
        />
        <Text style={styles.testStyle}>width和height</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', width: 1, height: 150}}
        />
        <Barcode
          value="7895641245"
          options={{format: 'CODE128', width: 3, height: 30}}
        />
        <Text style={styles.testStyle}>Text</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', text: 'hello!'}}
        />
        <Text style={styles.testStyle}>fontOptions:bold</Text>
        <Barcode
          value="9501101530003"
          options={{format: 'EAN13', fontOptions: 'bold'}}
        />
        <Text style={styles.testStyle}>fontOptions:'bold italic'</Text>
        <Barcode
          value="9501101530003"
          options={{format: 'EAN13', fontOptions: 'bold italic'}}
        />
        <Text style={styles.testStyle}>fontOptions:'italic'</Text>
        <Barcode
          value="9501101530003"
          options={{format: 'EAN13', fontOptions: 'italic'}}
        />
        <Text style={styles.testStyle}>font</Text>
        <Barcode value="Fantasy font" options={{format: 'CODE128', font: 'fantasy'}} />
        <Text style={styles.testStyle}>displayValue</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', displayValue: false}}
        />
        <Text style={styles.testStyle}>textAlign</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', textAlign: 'left'}}
        />
        <Text style={styles.testStyle}>textPosition</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', textPosition: 'top'}}
        />
        <Text style={styles.testStyle}>textMargin</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', textMargin: 10}}
        />
        <Text style={styles.testStyle}>fontSize</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', fontSize: 40}}
        />
        <Text style={styles.testStyle}>lineColor</Text>
        <Barcode
          value="1234568999999"
          options={{format: 'CODE128', lineColor: '#990000'}}
        />
        <Text style={styles.testStyle}>margins</Text>
        <Barcode
          value="1234568956999"
          options={{format: 'CODE128', marginLeft: 30, marginTop: 50}}
        />
        <Text style={styles.testStyle}>flat</Text>
        <Barcode
          value="29012343"
          options={{format: 'EAN8', flat: false}}
        />
        <Text style={styles.testStyle}>flat: false</Text>
        <Barcode
          value="29012343"
          options={{format: 'EAN8', flat: true}}
        />
        <Text style={styles.testStyle}>flat: true</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  testStyle: {
    marginTop: 10,
    fontWeight: '600',
  },
});
