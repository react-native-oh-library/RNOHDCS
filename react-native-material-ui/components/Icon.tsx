import { Icon } from 'react-native-material-ui'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
const IconDemo = () => {
  return (
    <Tester>
      <TestSuite name='Icon'>
        <TestCase itShould='Props:name'>
          <Icon name="person" />
          <Icon name="star" />
        </TestCase>

      </TestSuite>
      <TestSuite name='Icon'>
        <TestCase itShould='Props:color'>
          <Icon name="person" color='red' />
          <Icon name="person" color='blue' />
        </TestCase>

      </TestSuite>

      <TestSuite name='Icon'>
        <TestCase itShould='Props:size'>
          <Icon name="person" size={10} />
          <Icon name="person" size={30} />
        </TestCase>

      </TestSuite>

      <TestSuite name='Icon'>
        <TestCase itShould='Props:style'>
          <Icon name="person" style={{backgroundColor:'#666'}} />
          <Icon name="person" style={{backgroundColor:'red'}} />
        </TestCase>

      </TestSuite>

    </Tester>


  )
}
export default IconDemo;