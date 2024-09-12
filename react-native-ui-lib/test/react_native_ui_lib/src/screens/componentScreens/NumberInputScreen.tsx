import React, {useState, useCallback, useRef, useMemo} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard as RNKeyboard,
} from 'react-native';
// import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {
  Text,
  Spacings,
  NumberInput,
  NumberInputData,
  View,
  Typography,
  Constants,
  Incubator,
} from 'react-native-ui-lib';
import {
  renderBooleanOption,
  renderMultipleSegmentOptions,
} from '../ExampleScreenPresenter';
import {TestCase, TestSuite} from '@rnoh/testerino';

enum ExampleTypeEnum {
  PRICE = 'price',
  PERCENTAGE = 'percentage',
  ANY_NUMBER = 'number',
}

type ExampleType = ExampleTypeEnum | `${ExampleTypeEnum}`;

const VALIDATION_MESSAGE = 'Please enter a valid number';
const MINIMUM_PRICE = 5000;
const MINIMUM_PRICE_VALIDATION_MESSAGE = `Make sure your number is above ${MINIMUM_PRICE}`;
const DISCOUNT_PERCENTAGE = {min: 1, max: 80};
// eslint-disable-next-line max-len
const DISCOUNT_PERCENTAGE_VALIDATION_MESSAGE = `Make sure your number is between ${DISCOUNT_PERCENTAGE.min} and ${DISCOUNT_PERCENTAGE.max}`;

const NumberInputScreen = () => {
  const currentData = useRef<NumberInputData>();
  const [text, setText] = useState<string>('');
  const [showLabel, setShowLabel] = useState<boolean>(true);
  const [exampleType, setExampleType] = useState<ExampleType>('price');

  const processInput = useCallback(() => {
    let newText = '';
    if (currentData.current) {
      switch (currentData.current.type) {
        case 'valid':
          newText = currentData.current.formattedNumber;
          break;
        case 'error':
          newText = `Error: value '${currentData.current.userInput}' is invalid`;
          break;
      }
    }

    setText(newText);
  }, []);

  const onChangeNumber = useCallback(
    (data: NumberInputData) => {
      currentData.current = data;
      processInput();
    },
    [processInput],
  );

  const label = useMemo(() => {
    if (showLabel) {
      switch (exampleType) {
        case 'price':
        default:
          return 'Enter price';
        case 'percentage':
          return 'Enter discount percentage';
        case 'number':
          return 'Enter any number';
      }
    }
  }, [showLabel, exampleType]);

  const fractionDigits = useMemo(() => {
    switch (exampleType) {
      case 'price':
      case 'number':
      default:
        return undefined;
      case 'percentage':
        return 0;
    }
  }, [exampleType]);

  const leadingText = useMemo(() => {
    switch (exampleType) {
      case 'price':
        return '$';
      case 'percentage':
      case 'number':
      default:
        return undefined;
    }
  }, [exampleType]);

  const trailingText = useMemo(() => {
    switch (exampleType) {
      case 'percentage':
        return '%';
      case 'price':
      case 'number':
      default:
        return undefined;
    }
  }, [exampleType]);

  const isValid = useCallback(() => {
    return currentData.current?.type === 'valid';
  }, []);

  const isAboveMinimumPrice = useCallback(() => {
    if (currentData.current?.type === 'valid') {
      return currentData.current.number > MINIMUM_PRICE;
    }
  }, []);

  const isWithinDiscountPercentage = useCallback(() => {
    if (currentData.current?.type === 'valid') {
      return (
        currentData.current.number >= DISCOUNT_PERCENTAGE.min &&
        currentData.current.number <= DISCOUNT_PERCENTAGE.max
      );
    }
  }, []);

  const validate = useMemo((): Incubator.TextFieldProps['validate'] => {
    switch (exampleType) {
      case 'price':
        return [isValid, isAboveMinimumPrice];
      case 'percentage':
        return [isValid, isWithinDiscountPercentage];
      default:
        return isValid;
    }
  }, [exampleType, isValid, isAboveMinimumPrice, isWithinDiscountPercentage]);

  const validationMessage =
    useMemo((): Incubator.TextFieldProps['validationMessage'] => {
      switch (exampleType) {
        case 'price':
          return [VALIDATION_MESSAGE, MINIMUM_PRICE_VALIDATION_MESSAGE];
        case 'percentage':
          return [VALIDATION_MESSAGE, DISCOUNT_PERCENTAGE_VALIDATION_MESSAGE];
        default:
          return VALIDATION_MESSAGE;
      }
    }, [exampleType]);

  const textStyle = useMemo(() => {
    return [
      styles.mainText,
      !leadingText && {marginLeft: Spacings.s4},
      !trailingText && {marginRight: Spacings.s4},
    ];
  }, [leadingText, trailingText]);

  const textFieldProps = useMemo(() => {
    return {
      label,
      labelStyle: styles.label,
      style: textStyle,
      maxLength: 6,
      validate,
      validationMessage,
      validationMessageStyle: Typography.text80M,
      validateOnChange: true,
      centered: true,
    };
  }, [label, textStyle, validate, validationMessage]);

  return (
    <TestSuite name="NumberInput">
      <TestCase
        itShould="设置textFieldProps={{label: 'label'}} 和 onChangeNumber 属性"
        initialState={false}
        arrange={({setState, reset}) => (
          <View padding-20>
            <NumberInput
              key={exampleType}
              textFieldProps={{label: 'label'}}
              onChangeNumber={() => {
                setState(true);
              }}
            />
          </View>
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase itShould="设置 fractionDigits: 0,  小数点后0位">
        <View padding-20>
          <NumberInput
            textFieldProps={{label: 'label'}}
            fractionDigits={0}
            onChangeNumber={() => {}}
          />
        </View>
      </TestCase>
      <TestCase itShould="设置 leadingText, leadingTextStyle, trailingText, trailingTextStyle">
        <View padding-20 marginB-260>
          <NumberInput
            textFieldProps={{label: 'leadingText: (输入框前的文本)$, leadingTextStyle={color: red}'}}
            fractionDigits={0}
            leadingText="(输入框前的文本)$"
            leadingTextStyle={{color: 'red'}}
            onChangeNumber={() => {}}
          />
          <NumberInput
            textFieldProps={{label: 'trailingText: 美元(输入框后面文本), trailingTextStyle={color: blue}'}}
            fractionDigits={0}
            trailingText="美元(后面文本)"
            trailingTextStyle={{color: 'blue'}}
            onChangeNumber={() => {}}
          />
        </View>
      </TestCase>
    </TestSuite>
  );
};

// export default gestureHandlerRootHOC(NumberInputScreen);
export default NumberInputScreen;

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 30,
    marginLeft: Spacings.s5,
    marginRight: Spacings.s5,
  },
  mainText: {
    height: 36,
    marginVertical: Spacings.s1,
    ...Typography.text30M,
  },
  infoText: {
    marginTop: Constants.isIOS ? Spacings.s2 : 0,
    ...Typography.text50M,
  },
  label: {
    marginBottom: Spacings.s1,
    ...Typography.text80M,
  },
});
