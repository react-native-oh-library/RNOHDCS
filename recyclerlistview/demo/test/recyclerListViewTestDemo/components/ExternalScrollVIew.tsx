import {BaseScrollView} from 'recyclerlistview';
import {ScrollView, Image} from 'react-native';

const generateArray = (num: number = 10) => {
  const list = [];
  for (let index = 0; index < num; index++) {
    list.push(index);
  }
  return list;
};

export class ExternalScrollVIew extends BaseScrollView {
  render() {
    return (
      <ScrollView style={{height: 250}}>
        {generateArray().map(item => {
          return (
            <Image
              style={{marginBottom: 10}}
              key={item}
              source={require('../images/trees.jpg')}
            />
          );
        })}
      </ScrollView>
    );
  }
}
