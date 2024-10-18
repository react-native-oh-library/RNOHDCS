import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Skeleton, Text} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import LinearGradient from 'react-native-linear-gradient';
class ViewComponent extends React.Component<{}, {}> {
  render() {
    return (
      <LinearGradient
        colors={['#FF9800', '#F44336']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          height: 200,
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
        }}></LinearGradient>
    );
  }
}

const Avatars = () => {
  return (
    // <Tester>
    //   <TestSuite name='Skeleton'>
    //     <ScrollView>

    //       <View style={styles.container}>
    //         <TestCase itShould='Normal Skeleyon(No Animation)' tags={['C_API']}>
    //           <View style={styles.rowCenter}>
    //             <Skeleton circle width={40} />
    //             <View style={[{ marginLeft: 8, flexGrow: 1 }]}>
    //               <Skeleton style={{ marginBottom: 5 }} />
    //               <View
    //                 style={[styles.rowCenter, { justifyContent: 'space-between' }]}
    //               >
    //                 <Skeleton height={8} width={90} />
    //                 <Skeleton height={8} width={90} />
    //               </View>
    //             </View>
    //           </View>
    //         </TestCase>
    //         <TestCase itShould='Wave (With Linear Gradient)' tags={['C_API']}>
    //           <View>
    //             <Skeleton
    //               animation="wave"
    //               height={200}
    //             />
    //           </View>
    //         </TestCase>
    //         <TestCase itShould='Pulse Animation' tags={['C_API']}>
    //           <View>
    //             <Skeleton height={200} animation="pulse" />
    //           </View>
    //         </TestCase>
    //       </View>
    //     </ScrollView>
    //   </TestSuite>
    // </Tester>
    <Tester>
      <ScrollView>
        <TestSuite name="Skeleton的属性LinearGradientComponent Skeleton设置一个渐变色组件">
          <TestCase itShould="LinearGradientComponent">
            <View style={styles.rowCenter}>
              <Skeleton
                LinearGradientComponent={ViewComponent}
                height={200}
                animation="pulse"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Skeleton的属性animation Skeleton设置wave,pulse两种动画">
          <TestCase itShould="wave">
            <View style={styles.rowCenter}>
              <Skeleton
                skeletonStyle={{backgroundColor: 'yellow'}}
                height={100}
                animation="wave"
              />
            </View>
          </TestCase>
          <TestCase itShould="pulse">
            <View style={styles.rowCenter}>
              <Skeleton
                skeletonStyle={{backgroundColor: 'green'}}
                height={100}
                animation="pulse"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Skeleton的属性circle Skeleton设置圆角">
          <TestCase itShould="circle">
            <View style={styles.rowCenter}>
              <Skeleton
                skeletonStyle={{backgroundColor: 'yellow'}}
                circle
                width={40}
                animation="wave"
              />
              <View style={[{marginLeft: 8, flexGrow: 1}]}>
                <Skeleton
                  skeletonStyle={{backgroundColor: 'yellow'}}
                  style={{marginBottom: 5}}
                  animation="wave"
                />
                <View
                  style={[styles.rowCenter, {justifyContent: 'space-between'}]}>
                  <Skeleton
                    skeletonStyle={{backgroundColor: 'yellow'}}
                    animation="wave"
                    height={8}
                    width={90}
                  />
                  <Skeleton
                    skeletonStyle={{backgroundColor: 'yellow'}}
                    animation="wave"
                    height={8}
                    width={90}
                  />
                </View>
              </View>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Skeleton的属性height Skeleton高度50，100">
          <TestCase itShould="height设置50">
            <View style={styles.rowCenter}>
              <Skeleton
                skeletonStyle={{backgroundColor: 'yellow'}}
                height={50}
                animation="wave"
              />
            </View>
          </TestCase>
          <TestCase itShould="height设置100">
            <View style={styles.rowCenter}>
              <Skeleton
                skeletonStyle={{backgroundColor: 'green'}}
                height={100}
                animation="wave"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Skeleton的属性skeletonStyle Skeleton设置样式">
          <TestCase itShould="skeletonStyle">
            <View style={styles.rowCenter}>
              <Skeleton
                skeletonStyle={{
                  backgroundColor: 'pink',
                  borderRadius: 10,
                  opacity: 0.7,
                }}
                height={100}
                animation="wave"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Skeleton的属性width Skeleton设置宽度">
          <TestCase itShould="width为200">
            <View style={styles.rowCenter}>
              <Skeleton
                width={200}
                skeletonStyle={{
                  backgroundColor: 'pink',
                  borderRadius: 10,
                  opacity: 0.7,
                }}
                height={100}
                animation="wave"
              />
            </View>
          </TestCase>
          <TestCase itShould="width为100">
            <View style={styles.rowCenter}>
              <Skeleton
                width={100}
                skeletonStyle={{
                  backgroundColor: 'pink',
                  borderRadius: 10,
                  opacity: 0.7,
                }}
                height={100}
                animation="wave"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Skeleton的属性style 接收React-Native原生组件View的style属性">
          <TestCase itShould="设置原生View的style属性">
            <View style={styles.rowCenter}>
              <Skeleton
                style={{backgroundColor:'green',padding:5}}
                skeletonStyle={{
                  backgroundColor: 'pink',
                  borderRadius: 10,
                  opacity: 0.7,
                }}
                height={100}
                animation="wave"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Skeleton的属性Width 接收React-Native原生组件View的Width属性">
          <TestCase itShould="设置原生View的Width属性">
            <View style={styles.rowCenter}>
              <Skeleton
                width={180}
                style={{backgroundColor:'green',padding:5}}
                skeletonStyle={{
                  backgroundColor: 'pink',
                  borderRadius: 10,
                  opacity: 0.7,
                }}
                height={100}
                animation="wave"
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Avatars;
