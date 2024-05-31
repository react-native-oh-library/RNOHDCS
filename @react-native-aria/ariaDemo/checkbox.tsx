import React ,{ useContext, useRef }from 'react';
import {useCheckboxGroupState} from '@react-stately/checkbox';
import {useCheckbox, useCheckboxGroup,useCheckboxGroupItem} from '@react-native-aria/checkbox';
import {Platform, Pressable, Text, View} from 'react-native';
import {VisuallyHidden} from '@react-aria/visually-hidden';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusRing} from '@react-native-aria/focus';
let CheckboxGroupContext = React.createContext<any>(null);

export function CheckboxGroup(props: any) {
  let {children, label} = props;
  let state = useCheckboxGroupState(props);
  let {checkboxgroupProps, labelProps} = useCheckboxGroup(props, state);
  
  return (
    <View {...checkboxgroupProps}>
      {label && <Text {...labelProps}>{label}</Text>}
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </View>
  );
}
export function Checkbox(props: any) {
  
  let state = useContext(CheckboxGroupContext);
  const inputRef = React.useRef(null);
  let {isFocusVisible, focusProps} = useFocusRing();
  let { inputProps } = state
  ? 
    useCheckboxGroupItem(
      {
        ...props,
        isRequired: props.isRequired,
        validationState: props.validationState,
      },
      state,
      inputRef
    )
  : 
    useCheckbox(props, useToggleState(props), inputRef);
  return (
    <>
      <Pressable {...inputProps} {...focusProps}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={isFocusVisible ? {borderWidth: 1} : {}}></View>
          <Text>{props.children}</Text>
        </View>
        <Text>{inputProps.checked ? 'selected' : 'not selected'}</Text>
      </Pressable>
    </>
  );
}

export default function CheckboxDemo() {
  return (
    <View style={{width: '100%', marginTop: '20', marginLeft: '30'}}>
      <CheckboxGroup label="Favorite pet">
        <Checkbox value="dogs">Dogs</Checkbox>
        <Checkbox value="cats">Cats</Checkbox>
        <Checkbox value="rabbits">rabbits</Checkbox>
      </CheckboxGroup>
    </View>
  );
}
