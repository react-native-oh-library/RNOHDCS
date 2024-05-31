import React from "react";
import { useRadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup } from "@react-native-aria/radio";
import { Platform, Pressable, Text, View } from "react-native";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusRing } from "@react-native-aria/focus";

let RadioContext = React.createContext<any>({});

export function RadioGroup(props: any) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <View {...radioGroupProps}>
      <Text {...labelProps}>{label}</Text>
      <RadioContext.Provider
        value={{
          isDisabled: props.isDisabled,
          isReadOnly: props.isReadOnly,
          state,
        }}
      >
        {children}
      </RadioContext.Provider>
    </View>
  );
}

export function Radio(props: any) {
  let { state, isReadOnly, isDisabled } = React.useContext(RadioContext);
  const inputRef = React.useRef(null);
  let { inputProps } = useRadio(
    { isReadOnly, isDisabled, ...props },
    state,
    inputRef
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  let isSelected = state.selectedValue === props.value;
  // const icon = isSelected ? "radiobox-marked" : "radiobox-blank";

  return (
    <>
        <Pressable {...inputProps} {...focusProps}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={isFocusVisible ? { borderWidth: 1 } : {}}>
              <Icon size={30} color={"#000"} name={"radiobox-marked"} />
            </View>
            <Text>{props.children}</Text>
          </View>
          <Text>{isSelected ? "selected" : "not selected"}</Text>
        </Pressable>
    </>
  );
}

export default function RadioDemo() {
  return (
    <View style={{width:'100%',marginTop:'20',marginLeft:'30'}}>
       <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
    </View>
     );
}