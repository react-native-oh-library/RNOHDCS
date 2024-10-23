import { Icon } from 'react-native-material-ui'
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"
const IconDemo = () => {
  return (
    <Tester>
      <TestSuite name='Icon name(图标名称) 第一个名称为person,第二个名称为star'>
        <TestCase itShould='Props:name'>
          <Icon name="person" />
          <Icon name="star" />
        </TestCase>

      </TestSuite>
      <TestSuite name='Icon color (图标颜色) 第一个为红色 第二个为蓝色'>
        <TestCase itShould='Props:color'>
          <Icon name="person" color='red' />
          <Icon name="person" color='blue' />
        </TestCase>

      </TestSuite>

      <TestSuite name='Icon size (图标大小) 第一个大小为10，第二个为30'>
        <TestCase itShould='Props:size'>
          <Icon name="person" size={10} />
          <Icon name="person" size={30} />
        </TestCase>

      </TestSuite>

      <TestSuite name='Icon (图标样式) 第一个图标样式为背景 #666,第二个背景颜色为红色 设置的是图标所在的组件区域背景'>
        <TestCase itShould='Props:style'>
          <Icon name="person" style={{backgroundColor:'#666'}} />
          <Icon name="person" style={{backgroundColor:'red'}} />
        </TestCase>

      </TestSuite>

    </Tester>


  )
}
export default IconDemo;