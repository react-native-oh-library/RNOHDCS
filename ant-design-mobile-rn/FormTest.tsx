import React, {useState, useRef, useEffect} from 'react';
import {Alert, View, Text, Image} from 'react-native';
import {
  Button,
  Form,
  Input,
  InputItem,
  Radio,
  Flex as Row,
  List,
  Checkbox,
  Switch,
  Toast,
  DatePicker,
} from '@ant-design/react-native';
import {TestSuite, TestCase} from '@rnoh/testerino';
import dayjs from 'dayjs';

const Col = Row.Item;

export default () => {
  const [form] = Form.useForm();
  return (
    <TestSuite name="FormTest">
      <TestCase itShould="Form support disabled" tags={['C_API']}>
        <FormDisabledTest />
      </TestCase>
      <TestCase itShould="Form support Component 自定义表单" tags={['C_API']}>
        <FormComponent />
      </TestCase>
      <TestCase
        itShould="Form support initialValues= {username: 'JohnDoe',password: 'password123',}"
        tags={['C_API']}>
        <FormInitialValues />
      </TestCase>
      <TestCase itShould="Form.useForm表单数据域进行交互" tags={['C_API']}>
        <FormTest />
      </TestCase>
      <TestCase itShould="Form fields" tags={['C_API']}>
        <Formfields />
      </TestCase>
      <TestCase
        itShould="Form layout={'horizontal'}, layout={'vertical'}"
        tags={['C_API']}>
        <FormLayoutTest />
      </TestCase>
      <TestCase itShould="Form name='WXWX'" tags={['C_API']}>
        <FormNameTest />
      </TestCase>
      <TestCase
        itShould="Form requiredMark={true},requiredMark={false}"
        tags={['C_API']}>
        <FormRequiredMarkTest />
      </TestCase>
      <TestCase itShould="Form support labelStyle=pink" tags={['C_API']}>
        <FormLabelStyleTest />
      </TestCase>
      <TestCase itShould="Form support wrapperStyle=green" tags={['C_API']}>
        <FormwrapperStyleTest />
      </TestCase>
      <TestCase
        itShould="Form validateMessages={name is required}"
        tags={['C_API']}>
        <FormvalidateMessagesTest />
      </TestCase>
      <TestCase itShould="Form  validateTrigger='onBlur'" tags={['C_API']}>
        <FormvalidateTriggerTest />
      </TestCase>
      <TestCase itShould="Form onFieldsChange()" tags={['C_API']}>
        <FormonFieldsChangeTest />
      </TestCase>
      <TestCase itShould="Form onFinish()" tags={['C_API']}>
        <FormonFinishTest />
      </TestCase>
      <TestCase
        itShould="Form onFinishFailed()"
        tags={['C_API']}
        initialState={false}
        arrange={({setState}: any) => (
          <View style={{padding: 20}}>
            <Form
              form={form}
              onFinishFailed={() => {
                setState(true);
              }}>
              <Form.Item
                name="username"
                label="Username"
                rules={[{required: true}]}>
                <Input placeholder="Username" />
              </Form.Item>
            </Form>
            <Button
              onPress={() => {
                form.submit();
              }}>
              提交
            </Button>
          </View>
        )}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}></TestCase>
      <TestCase itShould="Form onValuesChange()" tags={['C_API']}>
        <FormonValuesChangeTest />
      </TestCase>
      <TestCase itShould="Form styles=backgroundColor: 'pink'" tags={['C_API']}>
        <FormonStylesTest />
      </TestCase>
      <TestCase
        itShould="Form preserve={true},preserve={false}"
        tags={['C_API']}>
        <FormpreserveTest />
      </TestCase>
      <TestCase itShould="Form feedbackIcons 校验图标" tags={['C_API']}>
        <FormFeedbackIconsTest />
      </TestCase>
      <TestCase itShould="Form.Item dependencies='password'" tags={['C_API']}>
        <FormDependenciesTest />
      </TestCase>
      <TestCase
        itShould="Form.Item getValueFromEvent 将字段值转大写"
        tags={['C_API']}>
        <FormGetValueFromEventTest />
      </TestCase>
      <TestCase
        itShould="Form.Item getValueProps=时间戳转成 dayjs 对象再传给 DatePicker"
        tags={['C_API']}>
        <FormgetValuePropsTest />
      </TestCase>
      <TestCase itShould="Form.Item hasFeedback校验图标" tags={['C_API']}>
        <FormHasFeedbackTest />
      </TestCase>
      <TestCase itShould="Form.Item help='不能超过十个字'" tags={['C_API']}>
        <FormHelpTest />
      </TestCase>
      <TestCase
        itShould="Form.Item hidden={true}(代码里有两个输入框，但是添加hidden=true,所以展示一个)"
        tags={['C_API']}>
        <FormHiddenTest />
      </TestCase>
      <TestCase itShould="Form.Item initialValue={'初始值'}" tags={['C_API']}>
        <ForminitialValueTest />
      </TestCase>
      <TestCase itShould="Form.Item label=标签文本" tags={['C_API']}>
        <FormlabelTest />
      </TestCase>
      <TestCase
        itShould="Form.Item labelStyle={{color:'pink'}}"
        tags={['C_API']}>
        <FormItemlabelStyleTest />
      </TestCase>
      <TestCase
        itShould="Form.Item messageVariables={{ good is required! }}"
        tags={['C_API']}>
        <FormItemMessageVariablesTest />
      </TestCase>
      <TestCase itShould="Form.Item name=['user', 'pwd']" tags={['C_API']}>
        <FormItemNameTest />
      </TestCase>
      <TestCase
        itShould="Form.Item normalize 将时间戳转为日期格式传给日期对象"
        tags={['C_API']}>
        <FormNormalizeTest />
      </TestCase>
      <TestCase
        itShould="Form.Item noStyle={true},noStyle={false}"
        tags={['C_API']}>
        <FormNoStyleTest />
      </TestCase>
      <TestCase
        itShould="Form.Item preserve={true}, preserve={false} 删除后保留提交的字段"
        tags={['C_API']}>
        <FormItempreserveTest />
      </TestCase>
      <TestCase
        itShould="Form.Item required={true} required={false}"
        tags={['C_API']}>
        <FormRequiredTest />
      </TestCase>
      <TestCase
        itShould="Form.Item rules={[{ required: true, message: 'Username is required' }]}"
        tags={['C_API']}>
        <FormRulesTest />
      </TestCase>
      <TestCase
        itShould="Form.Item shouldUpdate 指定字段的值发生变化时，相关的Form.Item会重新渲染"
        tags={['C_API']}>
        <FormShouldUpdateExample />
      </TestCase>
      <TestCase
        itShould="Form.Item styles={{ formItemLabel: { backgroundColor: 'pink' } }}"
        tags={['C_API']}>
        <FormItemStylesTest />
      </TestCase>
      <TestCase itShould="Form.Item trigger=onBlur 失焦验证" tags={['C_API']}>
        <FormItemtriggerTest />
      </TestCase>
      <TestCase
        itShould="Form.Item name:validateFirst={false},userName:validateFirst={true}, email:validateFirst='parallel'"
        tags={['C_API']}>
        <FormValidateFirstExample />
      </TestCase>
      <TestCase itShould="Form.Item validateDebounce={500}" tags={['C_API']}>
        <FormValidateDebounceExample />
      </TestCase>
      <TestCase itShould="Form.Item validateDebounce={2000}" tags={['C_API']}>
        <FormValidateDebounce2Example />
      </TestCase>
      <TestCase
        itShould="Form.Item validateStatus='warning', validateStatus='success'"
        tags={['C_API']}>
        <FormValidateStatusExample />
      </TestCase>
      <TestCase
        itShould="Form.Item validateTrigger=onBlur 失焦验证"
        tags={['C_API']}>
        <FormValidateTriggerExample />
      </TestCase>
      <TestCase itShould="Form.Item valuePropName='checked'" tags={['C_API']}>
        <FormValuePropNameExample />
      </TestCase>
      <TestCase
        itShould="Form.Item wrapperStyle={{backgroundColor:'aqua'}}"
        tags={['C_API']}>
        <FormWrapperStyleExample />
      </TestCase>
      <TestCase itShould="Form.List children渲染函数" tags={['C_API']}>
        <FormListExample />
      </TestCase>
      <TestCase
        itShould="Form.List initialValue 初始默认有两个"
        tags={['C_API']}>
        <FormListinitialValuesExample />
      </TestCase>
      <TestCase itShould="Form.List name=items" tags={['C_API']}>
        <FormListNameExample />
      </TestCase>
      <TestCase
        itShould="Form.List rules={[{ required: true, message: 'This field is required' }]}"
        tags={['C_API']}>
        <FormListRluesExample />
      </TestCase>
      <TestCase itShould="Form.List errors错误列表展示在下方" tags={['C_API']}>
        <FormErrorListExample />
      </TestCase>
      <TestCase
        itShould="Form.List styles={{ error: { backgroundColor: 'green' } }}"
        tags={['C_API']}>
        <FormErrorListStylesExample />
      </TestCase>
      <TestCase itShould="Form.Provider onFormChange()" tags={['C_API']}>
        <FormProviderExample />
      </TestCase>
      <TestCase itShould="Form.Provider onFormFinish()" tags={['C_API']}>
        <FormProvideronFormFinishExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider getFieldError 获取对应字段名的错误信息"
        tags={['C_API']}>
        <FormProvidergetFieldErrorExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider getFieldInstance 获取对应字段实例, 拿到值会自动聚焦到输入框"
        tags={['C_API']}>
        <FormProvidergetFieldInstanceExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider getFieldsError 字段名对应的错误信息"
        tags={['C_API']}>
        <FormProvidergetFieldsErrorExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider getFieldsValue 获取输入值"
        tags={['C_API']}>
        <FormProvidergetFieldsValueExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider getFieldValue 获取username输入值"
        tags={['C_API']}>
        <FormProvidergetFieldValueExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider isFieldsTouched 检查一组字段是否被用户操作过"
        tags={['C_API']}>
        <FormProviderisFieldsTouchedExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider isFieldTouched 检查password字段是否被用户操作过"
        tags={['C_API']}>
        <FormProviderisFieldTouchedExample />
      </TestCase>
      <TestCase
        itShould="Form.Provider isFieldValidating 检查username字段是否被校验"
        tags={['C_API']}>
        <FormProviderisFieldValidatingExample />
      </TestCase>
      <TestCase itShould="Form.Provider resetFields 重置" tags={['C_API']}>
        <FormProviderresetFieldsExample />
      </TestCase>
      <TestCase
        itShould="Form setFieldsValue 设置user和password值"
        tags={['C_API']}>
        <FormsetFieldsValueExample />
      </TestCase>
      <TestCase itShould="Form setFieldValue 设置user的值" tags={['C_API']}>
        <FormsetFieldValueExample />
      </TestCase>
      <TestCase itShould="Form submit()" tags={['C_API']}>
        <FormsubmitExample />
      </TestCase>
      <TestCase itShould="Form validateFields 触发表单验证" tags={['C_API']}>
        <FormvalidateFieldsExample />
      </TestCase>
    </TestSuite>
  );
};

function FormComponent() {
  const SimpleForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
      console.log('Form values:', values);
    };

    return (
      <Form form={form} onFinish={onFinish}>
        <InputItem name="username" placeholder="Username">
          Username
        </InputItem>
        <InputItem name="password" placeholder="Password" type="password">
          Password
        </InputItem>
        <Button type="primary">Submit</Button>
      </Form>
    );
  };

  return (
    <View style={{padding: 20}}>
      <SimpleForm />
    </View>
  );
}

function FormInitialValues() {
  const [form] = Form.useForm();
  const initialValues = {
    username: 'JohnDoe',
    password: 'password123',
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form form={form} initialValues={initialValues} onFinish={onFinish}>
      <Form.Item name="username">
        <InputItem placeholder="Username">Username</InputItem>
      </Form.Item>
      <Form.Item name="password">
        <InputItem name="password" placeholder="Password" type="password">
          Password
        </InputItem>
      </Form.Item>
    </Form>
  );
}

function Formfields() {
  const [form] = Form.useForm();
  const [fields, setFields] = useState([
    {
      name: ['username'],
      value: 'Ant Design',
    },
  ]);
  const CustomizedForm = ({onChange, fields}: any) => (
    <Form
      name="global_state"
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Username is required!',
          },
        ]}>
        <Input />
      </Form.Item>
    </Form>
  );

  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields: any) => {
          setFields(newFields);
        }}
      />
      <View
        style={{
          maxWidth: 440,
          marginTop: 24,
        }}>
        <Text>{JSON.stringify(fields, null, 2)}</Text>
      </View>
    </>
  );
}

function FormTest() {
  const [form] = Form.useForm();
  const onSubmit = () => {
    form.submit();
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
    });
  };

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}>
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }>
        {({getFieldValue}) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button type="primary" onPress={onSubmit}>
            Submit
          </Button>
          <Button onPress={onReset}>Reset</Button>
          <Button onPress={onFill}>Fill form</Button>
        </View>
      </Form.Item>
    </Form>
  );
}

function FormLayoutTest() {
  const [form] = Form.useForm();
  return (
    <View>
      <Form layout={'horizontal'} form={form}>
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
      <Form layout={'vertical'} form={form}>
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
    </View>
  );
}

function FormRequiredMarkTest() {
  const [form] = Form.useForm();
  return (
    <View>
      <Form form={form} layout="vertical" requiredMark={true}>
        <Form.Item label="Field A" required>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B" required>
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
      <Text>-------------------------------------</Text>
      <Form form={form} layout="vertical" requiredMark={false}>
        <Form.Item label="Field A" required>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B" required>
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
    </View>
  );
}

function FormDisabledTest() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={e => setComponentDisabled(e.target.checked)}>
        Form disabled
      </Checkbox>
      <Form layout="horizontal" disabled={componentDisabled}>
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
}

function FormLabelStyleTest() {
  return (
    <Form>
      <Form.Item label="用户名" labelStyle={{color: 'pink'}}>
        <InputItem clear placeholder="请输入用户名" />
      </Form.Item>
    </Form>
  );
}

function FormwrapperStyleTest() {
  return (
    <Form>
      <Form.Item label="用户名" wrapperStyle={{backgroundColor: 'green'}}>
        <InputItem clear placeholder="请输入用户名" />
      </Form.Item>
    </Form>
  );
}

function FormNameTest() {
  const [form] = Form.useForm();
  const initialValues = {
    name: 'WXWX',
  };
  return (
    <Form form={form} initialValues={initialValues}>
      <Form.Item name="name" label="用户名">
        <InputItem placeholder="请输入用户名" />
      </Form.Item>
    </Form>
  );
}

function FormvalidateMessagesTest() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };
  return (
    <Form
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input placeholder="失焦校验" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          onPress={() => {
            form.submit();
          }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function FormvalidateTriggerTest() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };
  return (
    <Form
      form={form}
      name="nest"
      onFinish={onFinish}
      validateTrigger="onBlur"
      validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          onPress={() => {
            form.submit();
          }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function FormonFieldsChangeTest() {
  const [form] = Form.useForm();
  const [state, setstate] = useState('');
  return (
    <View>
      <Form
        name="fields"
        form={form}
        onFieldsChange={(value: any) => {
          setstate(value[0].value);
        }}>
        <Form.Item name="username" label="Username" rules={[{required: true}]}>
          <Input placeholder="Username" />
        </Form.Item>
      </Form>
      <Text>{state}</Text>
    </View>
  );
}

function FormonFinishTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        name="finish"
        form={form}
        onFinish={(e: any) => {
          Alert.alert(e.username);
        }}>
        <Form.Item name="username" label="Username" rules={[{required: true}]}>
          <Input placeholder="Username" />
        </Form.Item>
      </Form>
      <Button
        onPress={() => {
          form.submit();
        }}>
        提交
      </Button>
    </View>
  );
}

function FormonValuesChangeTest() {
  const [form] = Form.useForm();
  const [state, setstate] = useState('');
  return (
    <View style={{padding: 20}}>
      <Form
        name="onValuesChange"
        form={form}
        onValuesChange={(e: any) => {
          setstate(e.username);
        }}>
        <Form.Item name="username" label="Username" rules={[{required: true}]}>
          <Input placeholder="Username" />
        </Form.Item>
      </Form>
      <Text>{state}</Text>
    </View>
  );
}

function FormonStylesTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        labelStyle={{backgroundColor: 'pink'}}
        styles={{Header: {backgroundColor: 'pink'}}}>
        <Form.Item name="username" label="Username" rules={[{required: true}]}>
          <Input placeholder="Username" />
        </Form.Item>
      </Form>
    </View>
  );
}

function FormpreserveTest() {
  const [form] = Form.useForm();
  const [state, setstate] = useState('');
  const [form1] = Form.useForm();
  const [state1, setstate1] = useState('');
  const initialValues = {
    username: 'JohnDoe',
    password: 'password123',
  };
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    setstate(values.username);
  };

  const onFinish1 = (values: any) => {
    console.log('Form values:', values);
    setstate1(values.username);
    form1.resetFields();
  };
  return (
    <View style={{padding: 20}}>
      <Form
        onFinish={onFinish}
        preserve={true}
        form={form}
        initialValues={initialValues}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{required: true, message: 'Please input your username!'}]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Button
          type="primary"
          onPress={() => {
            form.submit();
          }}>
          Submit
        </Button>
      </Form>
      <Text>提交后的表单值：{JSON.stringify(state)}</Text>
      <Form onFinish={onFinish1} preserve={false} form={form1}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{required: true, message: 'Please input your username!'}]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Button
          type="primary"
          onPress={() => {
            form1.submit();
          }}>
          Submit
        </Button>
      </Form>
      <Text>提交后的表单值：{JSON.stringify(state1)}</Text>
    </View>
  );
}

function FormFeedbackIconsTest() {
  const [form] = Form.useForm();
  const [state, setstate] = useState('');
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    setstate(values.username);
  };
  return (
    <View style={{padding: 20}}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Username"
          hasFeedback={true}
          rules={[{required: true}]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormDependenciesTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        name="dependencies"
        autoComplete="off"
        style={{
          maxWidth: 600,
        }}
        layout="vertical">
        <Text>Try modify `Password2` and then modify `Password`</Text>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>

        {/* Field */}
        <Form.Item
          label="Confirm Password"
          name="password2"
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!'),
                );
              },
            }),
          ]}>
          <Input />
        </Form.Item>

        {/* Render Props */}
        <Form.Item noStyle dependencies={['password2']}>
          {() => (
            <View>
              <Text>
                Only Update when <Text>password2</Text> updated:
              </Text>
              <Text>{JSON.stringify(form.getFieldsValue(), null, 2)}</Text>
            </View>
          )}
        </Form.Item>
      </Form>
    </View>
  );
}

function FormGetValueFromEventTest() {
  const [form] = Form.useForm();
  const [state, setstate] = useState('');
  const transformToUppercase = (event: any) => {
    setstate(event.nativeEvent.text.toUpperCase());
    return event.nativeEvent.text.toUpperCase();
  };
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        onFinish={values => console.log('Form values:', values)}>
        <Form.Item
          name="textField"
          label="Text Field"
          getValueFromEvent={transformToUppercase}
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="Enter text..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Text>转换后的字段值{state}</Text>
    </View>
  );
}

function FormgetValuePropsTest() {
  const [form] = Form.useForm();
  const dateTimestamp = dayjs('2024-01-01').valueOf();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        name="getValueProps"
        initialValues={{date: dateTimestamp}}
        onFinish={onFinish}>
        <Form.Item
          label="Date"
          name="date"
          getValueProps={value => ({
            value: value ? dayjs(Number(value)) : null,
          })}
          normalize={value => (value ? dayjs(value).valueOf() : null)}>
          <DatePicker>
            <List.Item arrow="horizontal"></List.Item>
          </DatePicker>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormHasFeedbackTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        onFinish={values => console.log('Form values:', values)}>
        <Form.Item
          name="textField"
          label="Text Field"
          hasFeedback
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="Enter text..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormHelpTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        onFinish={values => console.log('Form values:', values)}>
        <Form.Item
          name="textField"
          label="Text Field"
          hasFeedback
          help="不能超过十个字"
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="Enter text..." maxLength={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormHiddenTest() {
  const [hiddenValue,setHiddenValue] = useState(false);
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        onFinish={values => console.log('Form values:', values)}>
        <Form.Item
          name="textField"
          label="Text Field"
          hasFeedback
          hidden={hiddenValue}
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="Enter text..." maxLength={10} />
        </Form.Item>
        <Form.Item
          name="www"
          label="www"
          hasFeedback
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="text..." maxLength={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
          <Button onPress={() => setHiddenValue(!hiddenValue)}>
            Change Hidden
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function ForminitialValueTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        onFinish={values => console.log('Form values:', values)}>
        <Form.Item
          name="textField"
          label="Text Field"
          initialValue={'初始值'}
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="Enter text..." maxLength={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormlabelTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        onFinish={values => console.log('Form values:', values)}>
        <Form.Item
          name="textield"
          label="标签文本"
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="Enter..." maxLength={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormItemlabelStyleTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        onFinish={values => console.log('Form values:', values)}>
        <Form.Item
          name="texteeField"
          label="标签文本"
          labelStyle={{color: 'pink'}}
          rules={[{required: true, message: 'Text field is required!'}]}>
          <Input placeholder="Enter..." maxLength={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormItemMessageVariablesTest() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form form={form}>
        <Form.Item
          messageVariables={{another: 'good'}}
          label="user"
          name={'another'}
          rules={[{required: true, message: '${another} is required'}]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormItemNameTest() {
  const [form] = Form.useForm();
  const initialValues = {
    user: 'wxwx',
    pwd: '1234',
  };
  return (
    <View style={{padding: 20}}>
      <Form form={form} initialValues={initialValues}>
        <Form.Item
          label="user"
          name="user"
          rules={[{required: true, message: '${user} is required'}]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="pwd"
          name="pwd"
          rules={[{required: true, message: '${pwd} is required'}]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormNormalizeTest() {
  const [form] = Form.useForm();
  const dateTimestamp = dayjs('2024-09-06').valueOf();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        name="Normalize"
        initialValues={{date: dateTimestamp}}
        onFinish={onFinish}>
        <Form.Item
          label="Date"
          name="date"
          getValueProps={value => ({
            value: value ? dayjs(Number(value)) : null,
          })}
          normalize={value => (value ? dayjs(value).valueOf() : null)}>
          <DatePicker>
            <List.Item arrow="horizontal"></List.Item>
          </DatePicker>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormNoStyleTest() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="noStyle" onFinish={onFinish}>
        <Form.Item
          name="username"
          noStyle
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form form={form} name="Style" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormItempreserveTest() {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [state, setstate] = useState('');
  const [state1, setstate1] = useState('');
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    setstate(values.username);
  };

  const onFinish1 = (values: any) => {
    console.log('Form values:', values);
    setstate1(values.username);
    form1.resetFields();
  };
  return (
    <View style={{padding: 20}}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Username"
          preserve={true}
          rules={[{required: true}]} // Required rule
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
        <Text>提交后的字段{state}</Text>
      </Form>
      <Form form={form1} onFinish={onFinish1}>
        <Form.Item
          name="username"
          label="Username"
          preserve={false}
          rules={[{required: true}]} // Required rule
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form1.submit()}>
            Submit
          </Button>
        </Form.Item>
        <Text>提交后的字段{state1}</Text>
      </Form>
    </View>
  );
}

function FormRequiredTest() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="required" onFinish={onFinish}>
        <Form.Item
          name="username"
          required
          label="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item name="pwd" label="pwd">
          <Input placeholder="Enter your pwd" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormRulesTest() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="rule" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormShouldUpdateExample() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="shouldUpdate" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.username !== currentValues.username
          }>
          {({getFieldValue}) => {
            const username = getFieldValue('username');
            return (
              <Text style={{marginTop: 10}}>
                {username ? `Hello, ${username}` : 'Please enter your username'}
              </Text>
            );
          }}
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormItemStylesTest() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="dddd" onFinish={onFinish}>
        <Form.Item
          styles={{formItemLabel: {backgroundColor: 'pink'}}}
          name="username"
          label="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormItemtriggerTest() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="triggerExample" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {type: 'email', message: 'Invalid email address'},
            {required: true, message: 'Email is required'},
          ]}
          trigger="onBlur">
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormValidateFirstExample() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="validateFirstExample" onFinish={onFinish}>
        <Form.Item
          label="name"
          name="name"
          rules={[
            {required: true, message: 'name is required'},
            {min: 8, message: 'Username must be at least 8 characters'},
            {min: 4, message: 'Username must be at least 4 characters'},
            {min: 2, message: 'Username must be at least 2 characters'},
          ]}
          validateFirst={false}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {required: true, message: 'Username is required'},
            {min: 8, message: 'Username must be at least 8 characters'},
            {min: 4, message: 'Username must be at least 4 characters'},
            {min: 2, message: 'Username must be at least 2 characters'},
          ]}
          validateFirst={true}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {required: true, message: 'email is required'},
            {min: 4, message: 'email must be at least 4 characters'},
            {min: 2, message: 'email must be at least 2 characters'},
          ]}
          validateFirst={'parallel'}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormValidateDebounceExample() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="validateDebounceExample" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          hasFeedback
          rules={[
            {required: true, message: 'Username is required'},
            {min: 4, message: 'Username must be at least 4 characters'},
          ]}
          validateDebounce={500} // 500 milliseconds debounce time
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormValidateDebounce2Example() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="validateDebounce2Example" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          hasFeedback
          rules={[
            {required: true, message: 'Username is required'},
            {min: 4, message: 'Username must be at least 4 characters'},
          ]}
          validateDebounce={2000}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormValidateStatusExample() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="validateStatusExample" onFinish={onFinish}>
        <Form.Item label="Warning" hasFeedback validateStatus="warning">
          <Input placeholder="Warning" id="warning2" />
        </Form.Item>
        <Form.Item label="Success" hasFeedback validateStatus="success">
          <Input placeholder="Success" id="Success" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormValidateTriggerExample() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="validateTriggerExample" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          hasFeedback
          validateTrigger="onBlur" // Trigger validation on field blur
          rules={[
            {required: true, message: 'Username is required'},
            {min: 4, message: 'Username must be at least 4 characters'},
          ]}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormValuePropNameExample() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    Toast.success('Form submitted successfully!');
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="valuePropNameExample" onFinish={onFinish}>
        <Form.Item
          label="Accept Terms"
          name="acceptTerms"
          valuePropName="checked"
          rules={[{required: true, message: 'You must accept the terms'}]}>
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormWrapperStyleExample() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="validateTrddiggerExample" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          hasFeedback
          wrapperStyle={{backgroundColor: 'aqua'}}
          rules={[
            {required: true, message: 'Username is required'},
            {min: 4, message: 'Username must be at least 4 characters'},
          ]}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormListExample() {
  const [form] = Form.useForm();
  return (
    <View style={{padding: 20}}>
      <Form form={form} name="ListExample">
        <Form.List name="items">
          {(fields, {add, remove}) => (
            <View>
              {fields.map(({key, name}) => (
                <View
                  key={key}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <Button
                    type="warning"
                    onPress={() => remove(name)}
                    style={{marginLeft: 10}}>
                    Remove
                  </Button>
                </View>
              ))}
              <Button
                type="primary"
                onPress={() => add()}
                style={{marginTop: 10}}>
                Add Item
              </Button>
            </View>
          )}
        </Form.List>
      </Form>
    </View>
  );
}

function FormListinitialValuesExample() {
  const [form] = Form.useForm();
  const initialValues = {
    items: [{item: 'Initial Item 1'}, {item: 'Initial Item 2'}],
  };
  const onFinish = (values: any) => {
    console.log('Form Values:', values);
    Toast.success('Form submitted successfully!');
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="formListinitExample" onFinish={onFinish}>
        <Form.List name="itemsss" initialValue={initialValues.items}>
          {(fields, {add, remove}) => (
            <View>
              {fields.map(({key, name}) => (
                <View
                  key={key}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <Button
                    type="warning"
                    onPress={() => remove(name)}
                    style={{marginLeft: 10}}>
                    Remove
                  </Button>
                </View>
              ))}
              <Button
                type="primary"
                onPress={() => add()}
                style={{marginTop: 10}}>
                Add Item
              </Button>
            </View>
          )}
        </Form.List>
      </Form>
    </View>
  );
}

function FormListNameExample() {
  const [form] = Form.useForm();
  const [allName, setAllName] = useState<any>();
  return (
    <View style={{padding: 20}}>
      <Form form={form} name="formListnameExample">
        <Form.List name="itemdds">
          {(fields, {add, remove}) => (
            <View>
              {fields.map(({key, name}) => (
                <View key={key}>
                  <Form.Item
                    name={[name, 'item']}
                    label={key + 1}
                    rules={[
                      {required: true, message: 'This field is required'},
                    ]}
                    style={{flex: 1}}>
                    <Input placeholder="Enter item" />
                  </Form.Item>
                  <Button
                    type="warning"
                    onPress={() => remove(name)}
                    style={{marginLeft: 10}}>
                    Remove
                  </Button>
                </View>
              ))}
              <Button
                type="primary"
                onPress={() => add()}
                style={{marginTop: 10}}>
                Add Item
              </Button>
            </View>
          )}
        </Form.List>
        <Form.Item>
          <Button
            type="primary"
            onPress={() => {
              form.submit();
              setAllName(form.getFieldsValue());
            }}>
            Submit
          </Button>
          <Text>{JSON.stringify(allName)}</Text>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormListRluesExample() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="formListRlueExample" onFinish={onFinish}>
        <Form.List name="itesssdams">
          {(fields, {add, remove}) => (
            <View>
              {fields.map(({key, name}) => (
                <View key={key}>
                  <Form.Item
                    name={[name, 'item']}
                    label={key + 1}
                    rules={[
                      {required: true, message: 'This field is required'},
                    ]}
                    style={{flex: 1}}>
                    <Input placeholder="Enter item" />
                  </Form.Item>
                  <Button
                    type="warning"
                    onPress={() => remove(name)}
                    style={{marginLeft: 10}}>
                    Remove
                  </Button>
                </View>
              ))}
              <Button
                type="primary"
                onPress={() => add()}
                style={{marginTop: 10}}>
                Add Item
              </Button>
            </View>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormErrorListExample() {
  const [form] = Form.useForm();
  const [errors, setErrors] = React.useState([]);

  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  const onFinishFailed = ({errorFields}: any) => {
    const errorMessages = errorFields.map((field: any) => field.errors).flat();
    console.log(errorMessages);
    setErrors(errorMessages);
  };

  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        name="formErrorList"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{required: true, message: 'Password is required'}]}>
          <Input placeholder="Password" secureTextEntry />
        </Form.Item>

        {/* Displaying errors using Form.ErrorList */}
        {errors.length > 0 && <Form.ErrorList errors={errors} />}

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormErrorListStylesExample() {
  const [form] = Form.useForm();
  const [errors, setErrors] = React.useState([]);

  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  const onFinishFailed = ({errorFields}: any) => {
    const errorMessages = errorFields.map((field: any) => field.errors).flat();
    setErrors(errorMessages);
  };

  return (
    <View style={{padding: 20}}>
      <Form
        form={form}
        name="formErrorListExample"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{required: true, message: 'Password is required'}]}>
          <Input placeholder="Password" secureTextEntry />
        </Form.Item>
        {errors.length > 0 && (
          <Form.ErrorList
            errors={errors}
            styles={{error: {backgroundColor: 'green'}}}
          />
        )}

        <Form.Item>
          <Button type="primary" onPress={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormProviderExample() {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = React.useState({});

  // Callback function to handle form changes
  const handleFormChange = (changedValues: any, allValues: any) => {
    setFormValues(allValues);
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider onFormChange={handleFormChange}>
        <Form form={form} name="formProviderExample">
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Form.Provider>

      <View style={{marginTop: 20}}>
        <Text>Form Values:</Text>
        <Text>{JSON.stringify(formValues, null, 2)}</Text>
      </View>
    </View>
  );
}

function FormProvideronFormFinishExample() {
  const [form] = Form.useForm();
  const [submitResult, setSubmitResult] = React.useState(null);
  const handleFormFinish = (values: any) => {
    setSubmitResult(values);
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider onFormFinish={handleFormFinish}>
        <Form form={form} name="formProvider" onFinish={form.submit}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Form.Provider>

      <View style={{marginTop: 20}}>
        <Text>Submit Result:</Text>
        <Text>{JSON.stringify(submitResult, null, 2)}</Text>
      </View>
    </View>
  );
}

function FormProvidergetFieldErrorExample() {
  const [form] = Form.useForm();
  const [fieldErrors, setFieldErrors] = React.useState<any>({});
  const handleFormChange = (changedValues: any, allValues: any) => {
    const usernameErrors = form.getFieldError('username');
    setFieldErrors({username: usernameErrors});
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider onFormChange={handleFormChange}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Form.Provider>

      <View style={{marginTop: 20}}>
        <Text>Username Field Errors:</Text>
        <Text>
          {fieldErrors?.username
            ? fieldErrors?.username.join(', ')
            : 'No errors'}
        </Text>
      </View>
    </View>
  );
}

function FormProvidergetFieldInstanceExample() {
  const [form] = Form.useForm();
  const usernameRef = useRef<any>(null);
  const handleGetFieldInstance = () => {
    const usernameFieldInstance = form.getFieldInstance('username');
    if (usernameFieldInstance && usernameRef.current) {
      usernameRef.current?.focus();
    }
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider
        getFieldInstance={(name: any) => form.getFieldInstance(name)}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" ref={usernameRef} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button onPress={handleGetFieldInstance} style={{marginTop: 20}}>
              Get Username Field Instance
            </Button>
          </Form.Item>
        </Form>
      </Form.Provider>
    </View>
  );
}

function FormProvidergetFieldsErrorExample() {
  const [form] = Form.useForm();
  const [state, setstate] = useState<any>();
  const handleGetFieldsError = () => {
    const errors = form.getFieldsError();
    setstate(JSON.stringify(errors[0]));
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider getFieldsError={() => form.getFieldsError()}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button onPress={handleGetFieldsError} style={{marginTop: 20}}>
              Get Fields Error
            </Button>
          </Form.Item>
        </Form>
        <Text>错误信息:{state}</Text>
      </Form.Provider>
    </View>
  );
}

function FormProvidergetFieldsValueExample() {
  const [form] = Form.useForm();
  const [state, setstate] = useState<any>();
  const handleGetFieldsValue = () => {
    const values = form.getFieldsValue();
    setstate(values);
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider getFieldsValue={() => form.getFieldsValue()}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button onPress={handleGetFieldsValue} style={{marginTop: 20}}>
              Get Fields Value
            </Button>
          </Form.Item>
        </Form>
        <Text>获取到的值:{JSON.stringify(state)}</Text>
      </Form.Provider>
    </View>
  );
}

function FormProvidergetFieldValueExample() {
  const [form] = Form.useForm();
  const [state, setstate] = useState<any>();
  const handleGetFieldsValue = () => {
    const values = form.getFieldValue('username');
    setstate(values);
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider getFieldsValue={() => form.getFieldValue('username')}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button onPress={handleGetFieldsValue} style={{marginTop: 20}}>
              Get Fields Value
            </Button>
          </Form.Item>
        </Form>
        <Text>获取到username的值:{JSON.stringify(state)}</Text>
      </Form.Provider>
    </View>
  );
}

function FormProviderisFieldsTouchedExample() {
  const [form] = Form.useForm();
  const [state, setstate] = useState<any>(false);
  const handleCheckFieldsTouched = () => {
    const touched = form.isFieldsTouched();
    setstate(touched);
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider isFieldsTouched={() => form.isFieldsTouched()}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button onPress={handleCheckFieldsTouched} style={{marginTop: 20}}>
              Check Fields Touched
            </Button>
          </Form.Item>
        </Form>
        <Text>是否被操作:{state ? '是' : '否'}</Text>
      </Form.Provider>
    </View>
  );
}

function FormProviderisFieldTouchedExample() {
  const [form] = Form.useForm();
  const [state, setstate] = useState<any>(false);
  const handleCheckFieldsTouched = () => {
    const touched = form.isFieldTouched('password');
    setstate(touched);
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider isFieldTouched={() => form.isFieldTouched('password')}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button onPress={handleCheckFieldsTouched} style={{marginTop: 20}}>
              Check Fields Touched
            </Button>
          </Form.Item>
        </Form>
        <Text>是否被操作:{state ? '是' : '否'}</Text>
      </Form.Provider>
    </View>
  );
}

function FormProviderisFieldValidatingExample() {
  const [form] = Form.useForm();
  const [state, setstate] = useState<any>(false);
  const handleCheckFieldsValidating = () => {
    const validating = form.isFieldValidating('username');
    console.log(validating);
    setstate(validating);
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider
        isFieldValidating={() => form.isFieldValidating('username')}>
        <Form form={form}>
          <Form.Item
            name="username"
            validateDebounce={4000}
            hasFeedback
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button
              onPress={handleCheckFieldsValidating}
              style={{marginTop: 20}}>
              Check Fields Validating
            </Button>
          </Form.Item>
        </Form>
        <Text>是否正在校验:{state ? '是' : '否'}</Text>
      </Form.Provider>
    </View>
  );
}

function FormProviderresetFieldsExample() {
  const [form] = Form.useForm();
  // Function to reset form fields
  const handleResetFields = () => {
    form.resetFields(); // Reset all fields to initial values
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider resetFields={() => form.resetFields()}>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Password is required'}]}>
            <Input placeholder="Password" secureTextEntry />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={() => form.submit()}>
              Submit
            </Button>
            <Button onPress={handleResetFields} style={{marginTop: 20}}>
              Reset Fields
            </Button>
          </Form.Item>
        </Form>
      </Form.Provider>
    </View>
  );
}

function FormsetFieldsValueExample() {
  const [form] = Form.useForm();

  // Function to set values of specific fields
  const handleSetFields = () => {
    form.setFieldsValue({
      username: 'newUser',
      email: 'newuser@example.com',
    }); // Set values for username and email fields
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form} name="formExample">
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{required: true, message: 'Email is required'}]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onPress={handleSetFields}>
            Set Fields Values
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormsetFieldValueExample() {
  const [form] = Form.useForm();
  // Function to set values of specific fields
  const handleSetFields = () => {
    form.setFieldValue('username', 'newUser');
  };

  return (
    <View style={{padding: 20}}>
      <Form form={form}>
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{required: true, message: 'Email is required'}]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onPress={handleSetFields}>
            Set Fields Values
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormsubmitExample() {
  // Create a ref to access the form instance
  const formRef = useRef<any>(null);

  // Function to handle form submission
  const handleSubmit = (values: any) => {
    Alert.alert('Form Submitted', JSON.stringify(values));
  };

  // Function to trigger form submission programmatically
  const handleFormSubmit = () => {
    formRef.current.submit(); // Trigger form submission
  };

  return (
    <View style={{padding: 20}}>
      <Form
        ref={formRef} // Attach ref to form
        onFinish={handleSubmit} // Handle form submission
      >
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Username is required'}]}>
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{required: true, message: 'Email is required'}]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            onPress={handleFormSubmit} // Programmatic form submission
          >
            Submit Programmatically
          </Button>
        </Form.Item>
      </Form>
    </View>
  );
}

function FormvalidateFieldsExample() {
  const formRef = useRef<any>(null);

  const validateAllFields = async () => {
    try {
      const values = await formRef.current.validateFields();
      Alert.alert('Validation Successful', JSON.stringify(values));
    } catch (error) {
      Alert.alert(
        'Validation Failed',
        'Please correct the errors in the form.',
      );
    }
  };

  return (
    <View style={{padding: 20}}>
      <Form.Provider>
        <Form ref={formRef}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Username is required'}]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{required: true, message: 'Email is required'}]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onPress={validateAllFields}>
              Validate All Fields
            </Button>
          </Form.Item>
        </Form>
      </Form.Provider>
    </View>
  );
}
