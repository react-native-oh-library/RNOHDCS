import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
  useTheme,
  useRestyle,
  composeRestyleFunctions,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  useResponsiveProp,
  createRestyleFunction,
} from '@shopify/restyle';
import theme, {Theme} from './creatTheme/theme';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {ScrollView, View, Button} from 'react-native';
import {useState} from 'react';
import {
  BackgroundRestyle,
  BorderRestyle,
  ColorRestyle,
  LayoutRestyle,
  OpacityRestyle,
  PositionRestyle,
  ShadowRestyle,
  SpacingRestyle,
  TextShadowRestyle,
  TypographyRestyle,
  VisibleRestyle,
} from './restyle';
const Box = createBox<Theme>();
const Text = createText<Theme>();
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {label: string};

const RestyleTest = ({label, ...rest}: Props) => {
  const restyleFunctions = composeRestyleFunctions([
    spacing,
    border,
    backgroundColor,
  ]);
  const theme = useTheme<Theme>();
  const props = useRestyle(restyleFunctions, rest);
  const textLabelProp = useResponsiveProp(label);
  return (
    <Tester>
      <ScrollView style={{marginBottom: 70}}>
        <TestSuite name="useTheme">
          <TestCase
            itShould="提取主题，可以得到主题的对象(theme.spacing.l:24)"
            initialState={{}}
            arrange={({setState}) => (
              <Button
                title="useTheme"
                onPress={() => {
                  setState(theme.spacing.l);
                }}
              />
            )}
            assert={({expect, state}) => {
              expect(state).to.be.eq(24);
            }}></TestCase>
        </TestSuite>

        <TestSuite name="useTheme">
          <TestCase
            itShould="提取主题，可以得到主题的对象(theme.colors.mainBackground:'#F0F2F3')"
            initialState={{}}
            arrange={({setState}) => (
              <Button
                title="useTheme"
                onPress={() => {
                  setState(theme.colors.mainBackground);
                }}
              />
            )}
            assert={({expect, state}) => {
              expect(state).to.be.eq('#F0F2F3');
            }}></TestCase>
        </TestSuite>

        <TestSuite name="useRestyle">
          <TestCase itShould="根据主题和一组重置样式的规则动态为 React 组件设置样式,">
            <View style={{height: 200}}>
              <View>
                <Text {...props}>{label}</Text>
              </View>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="useResponsiveProp">
          <TestCase
            itShould="提取自定义组件中响应式 prop 的值(label:'Hello Word')"
            initialState={''}
            arrange={({setState}) => (
              <Button
                title="useResponsiveProp"
                onPress={() => {
                  setState(textLabelProp as string);
                }}
              />
            )}
            assert={({expect, state}) => {
              expect(state).to.be.eq('Hello Word');
            }}></TestCase>
        </TestSuite>
        <TestSuite name="creatTheme">
          <TestCase itShould="定义主题 修改预设的主题样式，主题整体样式变化:setMarginStyle('xl')">
            <View style={{height: 500}}>
              <Welcome></Welcome>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="creatVariant,creatRestyleComponent">
          <TestCase itShould="灵活创建组件样式，创建自定义组件，两个方法需搭配使用(Card组件)">
            <View style={{height: 200}}>
              <VariantDemo></VariantDemo>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="createRestyleFunction">
          <TestCase itShould="创建预定义的 Restyle">
            <View style={{height: 200}}>
              <TransparentComponent transparency={0.5}  backgroundColor="backgroundColorRestyle"/>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="createBox,createText">
          <TestCase itShould="预定义Box组件,预定义Text组件 组件需搭配使用">
            <View style={{height: 200}}>
              <Box
                backgroundColor="cardPrimaryBackground"
                width={'100%'}
                height={100}
                borderWidth={3}>
                <Text variant="body">This is Box and Text</Text>
              </Box>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="restyle">
          <TestCase itShould="预定义restyle函数(backgroundColor)">
            <View style={{height: 100}}>
              <BackgroundRestyle backgroundColor="backgroundColorRestyle"></BackgroundRestyle>
              <BackgroundRestyle backgroundColor="backgroundColorRestyleTwo"></BackgroundRestyle>
            </View>
          </TestCase>
          <TestCase itShould="预定义restyle函数(color)">
            <View style={{height: 100}}>
              <ColorRestyle color="backgroundColorRestyle"></ColorRestyle>
              <ColorRestyle color="backgroundColorRestyleTwo"></ColorRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(opacity)">
            <View style={{height: 100}}>
              <OpacityRestyle opacity={0.5}></OpacityRestyle>
              <OpacityRestyle opacity={0.8}></OpacityRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(visible)">
            <View style={{height: 100}}>
              <VisibleRestyle visible={false}></VisibleRestyle>
              <VisibleRestyle visible={true}></VisibleRestyle>
            </View>
          </TestCase>
          <TestCase itShould="预定义restyle函数(spacing)">
            <View style={{height: 100}}>
              <SpacingRestyle margin="l" padding="l"></SpacingRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(Layout)">
            <View style={{height: 100}}>
              <LayoutRestyle
                width={200}
                height={100}
                backgroundColor="backgroundColorRestyleTwo"></LayoutRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(position)">
            <View style={{height: 100}}>
              <PositionRestyle top={20} left={50}></PositionRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(border)">
            <View style={{height: 100}}>
              <BorderRestyle
                borderColor={'backgroundColorRestyle'}
                borderWidth={2}></BorderRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(shadow)">
            <View style={{height: 100}}>
              <ShadowRestyle
                shadowColor={'backgroundColorRestyle'}
                shadowOpacity={0.8}
                shadowOffset={{width: 10, height: 20}}
                shadowRadius={20}
                ></ShadowRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(TextShadow)">
            <View style={{height: 100}}>
              <TextShadowRestyle
               textShadowOffset={{width: 20, height: 20}}
               textShadowRadius={20}
               textShadowColor={'backgroundColorRestyle'}
                ></TextShadowRestyle>
            </View>
          </TestCase>

          <TestCase itShould="预定义restyle函数(typography)">
            <View style={{height: 100}}>
              <TypographyRestyle
                fontSize={50}
                fontWeight='500'
                letterSpacing={2}
               
                ></TypographyRestyle>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const transparency = createRestyleFunction({
  property: 'transparency',
  styleProperty: 'opacity',
  transform: ({value}: {value: number}) => 1 - value,
});

// const TransparentComponent = createRestyleComponent([transparency]);
 const TransparentComponent = (props) => {
    const Text = createText<Theme>()
    const Box  = createBox<Theme>()
    const Card = createRestyleComponent([backgroundColor,transparency],Box);
    return (
      <Card  {...props} variant='elevated'>
        <Text  >layout</Text>
      </Card>
    )
  }
const VariantDemo = () => {
  const variant = createVariant<Theme, 'cardVariants'>({
    themeKey: 'cardVariants',
    defaults: {
      backgroundColor: 'cardPrimaryBackground',
      width: '100%',
      height: 100,
    },
  });
  const Card = createRestyleComponent<
    VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
    Theme
  >([variant], Box);
  return (
    <Card variant="elevated">
      <Text>This is a simple example</Text>
    </Card>
  );
};

const Welcome = () => {
  const [marginStyle, setMarginStyle] = useState<'s' | 'm' | 'l' | 'xl'>('s');
  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      paddingVertical="xl"
      paddingHorizontal="m">
      <Text variant="header">Welcome</Text>
      <Button
        title="切换主题样式"
        onPress={() => setMarginStyle('xl')}></Button>
      <Box flexDirection={'column'}>
        <Text variant="body" margin={marginStyle}>
          This is a simple example
        </Text>
        <Text margin={marginStyle} variant="body">
          Displaying how to use Restyle
        </Text>
        <Text margin={marginStyle} variant="body">
          Displaying how to use Restyle
        </Text>
      </Box>
    </Box>
  );
};

const RestyleDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Welcome /> */}
      <RestyleTest
        label="Hello Word"
        marginTop="l"
        backgroundColor="cardPrimaryBackground"></RestyleTest>
    </ThemeProvider>
  );
};

export default RestyleDemo;
