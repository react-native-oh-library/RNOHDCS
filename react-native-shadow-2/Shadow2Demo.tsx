import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Tester, TestSuite } from "@rnoh/testerino";
import { TestCase } from "../../components/TestCase";

export default function Shadow2DemoTester() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-shadow-2">
          <View style={styles.container}>
            <View style={styles.sliders}>
              <TestCase.Example tags={["C_API"]} itShould="base">
                <Shadow>
                  <Text style={styles.box}>base</Text>
                </Shadow>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="startColor">
                <Shadow startColor={"#eb9066d8"}>
                  <Text style={styles.box}>startColor</Text>
                </Shadow>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="endColor">
                <Shadow endColor={"#ff00ff10"}>
                  <Text style={styles.box}>endColor</Text>
                </Shadow>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="distance">
                <Shadow distance={50}>
                  <Text style={styles.box}>distance</Text>
                </Shadow>
              </TestCase.Example>

              {/* <Text style={styles.title}>offset</Text>
                    <Shadow offset={[10, 4]}>
                        <Text style={styles.box}>offset</Text>
                    </Shadow>

                    <Text style={styles.title}>paintInside</Text>
                    <Shadow style={styles.shadow} paintInside startColor={'#eb9066d8'} >
                        <Text style={styles.box}>paintInside</Text>
                    </Shadow>  */}

              <TestCase.Example tags={["C_API"]} itShould="sides">
                <Shadow
                  style={styles.shadow}
                  sides={{ start: false, end: true, top: false, bottom: false }}
                  startColor={"#eb9066d8"}
                >
                  <Text style={styles.box}>sides</Text>
                </Shadow>
              </TestCase.Example>

              {/* <Text style={styles.title}>corners</Text>
                    <Shadow style={styles.shadow} distance={20} corners={{ topStart: false, topEnd: false, bottomStart: true, bottomEnd: false }} startColor={'red'} >
                        <Text style={styles.box}>corners</Text>
                    </Shadow> */}

              <TestCase.Example tags={["C_API"]} itShould="style">
                <Shadow style={{ backgroundColor: "red" }}>
                  <Text style={styles.box}>style</Text>
                </Shadow>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="containerStyle">
                <Shadow containerStyle={{ backgroundColor: "red" }}>
                  <Text style={styles.box}>containerStyle</Text>
                </Shadow>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="stretch">
                <Shadow stretch>
                  <Text style={styles.box}>stretch</Text>
                </Shadow>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="safeRender">
                <View style={{ width: 200, height: 200 }}>
                  <Shadow distance={10} safeRender={true}>
                    <Text
                      style={{
                        width: "100%",
                        height: "80%",
                        backgroundColor: "red",
                      }}
                    >
                      shadow
                    </Text>
                  </Shadow>
                </View>
              </TestCase.Example>

              <TestCase.Example tags={["C_API"]} itShould="disabled">
                <Shadow disabled>
                  <Text style={styles.box}>disabled</Text>
                </Shadow>
              </TestCase.Example>
            </View>
          </View>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sliders: {
    margin: 20,
    width: 280,
  },
  shadow: {
    marginBottom: 20,
  },
  text: {
    alignSelf: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
  },
  box: {
    margin: 20,
    fontSize: 16,
  },
  sliderOne: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
