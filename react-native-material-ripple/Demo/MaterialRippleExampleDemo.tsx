import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import Ripple from "react-native-material-ripple";

export const MateriaRippleExample = () => {
  const [value1, setValue1] = useState<string>("1");
  const [value2, setValue2] = useState<string>("2");
  const [value3, setValue3] = useState<string>("3");
  const [value4, setValue4] = useState<string>("4");
  const [value5, setValue5] = useState<string>("5");
  const [value6, setValue6] = useState<string>("6");
  const [value7, setValue7] = useState<string>("7");
  const [value8, setValue8] = useState<string>("8");

  return (
    <ScrollView>
      <Ripple rippleColor="rgb(255, 0,0 )">
        <Text style={{ padding: 30 }}>change rippleColor</Text>
      </Ripple>

      <Ripple rippleOpacity={1}>
        <Text style={{ padding: 30 }}>change rippleOpacity</Text>
      </Ripple>

      <Ripple rippleDuration={1000}>
        <Text style={{ padding: 30 }}>change rippleDuration</Text>
      </Ripple>

      <Ripple rippleSize={100}>
        <Text style={{ padding: 30 }}>change rippleSize</Text>
      </Ripple>

      <Ripple
        style={{ borderRadius: 40, backgroundColor: "#0288D1" }}
        rippleContainerBorderRadius={40}
      >
        <Text style={{ padding: 30 }}>change rippleContainerBorderRadius</Text>
      </Ripple>

      <Ripple rippleCentered>
        <Text style={{ padding: 30 }}>change rippleCentered</Text>
      </Ripple>

      <Ripple rippleSequential>
        <Text style={{ padding: 30 }}>change rippleSequential</Text>
      </Ripple>

      <Ripple rippleFades={false}>
        <Text style={{ padding: 30 }}>change rippleFades</Text>
      </Ripple>

      <Ripple disabled>
        <Text style={{ padding: 30 }}>change disabled</Text>
      </Ripple>

      <Ripple onPressIn={() => setValue1("changed")}>
        <Text style={{ padding: 30 }}>onPressIn touch {value1}</Text>
      </Ripple>

      <Ripple delayPressIn={1000} onPressIn={() => setValue2("changed")}>
        <Text style={{ padding: 30 }}>delay onPressIn touch {value2}</Text>
      </Ripple>

      <Ripple onPressOut={() => setValue3("changed")}>
        <Text style={{ padding: 30 }}>onPressOut touch {value3}</Text>
      </Ripple>

      <Ripple delayPressOut={1000} onPressOut={() => setValue4("changed")}>
        <Text style={{ padding: 30 }}>delay onPressOut {value4}</Text>
      </Ripple>

      <Ripple onPress={() => setValue5("changed")}>
        <Text style={{ padding: 30 }}>onPress touch {value5}</Text>
      </Ripple>

      <Ripple onLongPress={() => setValue6("changed")}>
        <Text style={{ padding: 30 }}>onLongPress touch {value6}</Text>
      </Ripple>

      <Ripple delayLongPress={1000} onLongPress={() => setValue7("changed")}>
        <Text style={{ padding: 30 }}>delay onLongPress touch {value7}</Text>
      </Ripple>

      <Ripple onRippleAnimation={() => setValue8("changed")}>
        <Text style={{ padding: 30 }}>onRippleAnimation touch {value8}</Text>
      </Ripple>
    </ScrollView>
  );
};