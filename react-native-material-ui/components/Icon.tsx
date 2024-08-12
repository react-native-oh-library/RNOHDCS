import { Icon } from 'react-native-material-ui'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
const IconDemo = () => {
  return (
    <Tester>
      <TestSuite name='Icon name(图标名称)'>
        <TestCase itShould='Props:name'>
          <Icon name="person" />
          <Icon name="star" />
        </TestCase>

      </TestSuite>
      <TestSuite name='Icon color (图标颜色)'>
        <TestCase itShould='Props:color'>
          <Icon name="person" color='red' />
          <Icon name="person" color='blue' />
        </TestCase>

      </TestSuite>

      <TestSuite name='Icon size (图标大小)'>
        <TestCase itShould='Props:size'>
          <Icon name="person" size={10} />
          <Icon name="person" size={30} />
        </TestCase>

      </TestSuite>

      <TestSuite name='Icon (图标样式)'>
        <TestCase itShould='Props:style'>
          <Icon name="person" style={{backgroundColor:'#666'}} />
          <Icon name="person" style={{backgroundColor:'red'}} />
        </TestCase>

      </TestSuite>

    </Tester>


  )
}
export default IconDemo;