import {BaseScrollView} from 'recyclerlistview';
import {ScrollView, Image} from 'react-native';
import {width} from '../data';

const generateArray = (num: number = 10) => {
  const list = [];
  for (let index = 0; index < num; index++) {
    list.push(index);
  }
  return list;
};

export class ExternalScrollView extends BaseScrollView {
  scrollTo = () => {};

  render() {
    return (
      <ScrollView style={{width: width - 50, height: 150}}>
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

export default ExternalScrollView;
