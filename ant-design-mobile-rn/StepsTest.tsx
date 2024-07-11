
import React from 'react';
import { View, Text } from 'react-native';
import { Steps, Icon } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

const Step = Steps.Step;

export default () => {
  return (
    <TestSuite name="StepsTest">
      <TestCase itShould="render a Steps size=small" tags={['C_API']}>
        <StepsSmallTest />
      </TestCase>
      <TestCase itShould="render a Steps current={2}" tags={['C_API']}>
        <StepsCurrentTest />
      </TestCase>
      <TestCase itShould="render a Steps status" tags={['C_API']}>
        <StepsStatusTest />
      </TestCase>
      <TestCase itShould="render a Steps direction=vertical" tags={['C_API']}>
        <StepsDirectionVerticalTest />
      </TestCase>
      <TestCase itShould="render a Steps.Step status" tags={['C_API']}>
        <StepsStatusTest />
      </TestCase>
      <TestCase itShould="render a Steps.Step title" tags={['C_API']}>
        <StepsTitleTest />
      </TestCase>
      <TestCase itShould="render a Steps.Step description" tags={['C_API']}>
        <StepsDescriptionTest />
      </TestCase>
      <TestCase itShould="render a Steps.Step icon" tags={['C_API']}>
        <StepsIconTest />
      </TestCase>
      <TestCase itShould="render a Steps.Step support renderIcon" tags={['C_API']}>
        <StepsRenderIconTest />
      </TestCase>
    </TestSuite>
  );
};

function StepsSmallTest() {
  const steps1 = [
    { title: 'Finished', description: 'This is description' },
    { title: 'In Progress', description: 'This is description' },
    { title: 'Waiting', description: 'This is description' },
  ]

  return (
    <View>
      <Steps size="small" current={1}>
        {steps1.map((item: any, index: any) => (
          <Step
            key={index}
            title={
              <View>
                <Text>title:{item.title}</Text>
              </View>
            }
            status={item.status}
          />
        ))}
      </Steps>
    </View>
  )
}

function StepsCurrentTest() {
  const steps1 = [
    { title: 'Finished', description: 'This is description' },
    { title: 'In Progress', description: 'This is description' },
    { title: 'Waiting', description: 'This is description' },
  ]

  return (
    <View>
      <Steps size="small" current={2}>
        {steps1.map((item: any, index: any) => (
          <Step
            key={index}
            title={
              <View>
                <Text>title:{item.title}</Text>
              </View>
            }
            status={item.status}
          />
        ))}
      </Steps>
    </View>
  )
}

function StepsDirectionVerticalTest() {
  const steps1 = [
    { title: 'Finished', description: 'This is description' },
    { title: 'In Progress', description: 'This is description' },
    { title: 'Waiting', description: 'This is description' },
  ]

  return (
    <View>
      <Steps size="small" current={1} direction='vertical'>
        {steps1.map((item: any, index: any) => (
          <Step
            key={index}
            title={
              <View>
                <Text>title:{item.title}</Text>
              </View>
            }
            description={
              <View>
                <Text>desc:{item.description}</Text>
              </View>
            }
            status={item.status}
          />
        ))}
      </Steps>
    </View>
  )
}

function StepsStatusTest() {
  const steps2 = [
    {
      title: 'Finished',
      description: 'This is description',
      status: 'finish',
    },
    {
      title: 'In Progress',
      description: 'This is description',
      status: 'process',
    },
    {
      title: 'Waiting',
      description: 'This is description',
      status: 'error',
    },
    {
      title: 'Waiting',
      description: 'This is description',
      status: 'wait',
    },
  ]

  return (
    <View>
      <Steps>
        {steps2.map((item: any, index: any) => (
          <Step
            key={index}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </Steps>
    </View>
  )
}

function StepsTitleTest() {
  const steps2 = [
    {
      title: 'Title1',
      description: 'This is description',
      status: 'finish',
    },
    {
      title: 'Title2',
      description: 'This is description',
      status: 'process',
    },
    {
      title: 'Title3',
      description: 'This is description',
      status: 'error',
    },
    {
      title: 'Title4',
      description: 'This is description',
      status: 'wait',
    },
  ]

  return (
    <View>
      <Steps>
        {steps2.map((item: any, index: any) => (
          <Step
            key={index}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </Steps>
    </View>
  )
}

function StepsDescriptionTest() {
  const steps2 = [
    {
      title: 'Finished',
      description: 'description1',
      status: 'finish',
    },
    {
      title: 'In Progress',
      description: 'description2',
      status: 'process',
    },
    {
      title: 'Waiting',
      description: 'description3',
      status: 'error',
    },
    {
      title: 'Waiting',
      description: 'description4',
      status: 'wait',
    },
  ]

  return (
    <View>
      <Steps>
        {steps2.map((item: any, index: any) => (
          <Step
            key={index}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </Steps>
    </View>
  )
}

function StepsIconTest() {

  return (
    <View>
      <Steps current={1}>
        <Step
          key={0}
          title="Finished"
          description="This is description"
          status="finish"
        />
        <Step
          key={1}
          title="Progress"
          description="This is description"
          status="progress"
        />
        <Step
          key={2}
          title="Wait"
          description="This is description"
          status="wait"
          icon={<Icon name="down" size={20} color="white" />}
        />
      </Steps>
    </View>
  )
}

function StepsRenderIconTest() {

  return (
    <View>
      <Steps current={1}>
        <Step
          key={0}
          title="Finished"
          description="This is description"
          status="finish"
          renderIcon={({ starting, waiting, error }) => {
            let icon
            if (starting) {
              icon = <Icon name="home" />
            } else if (waiting) {
              icon = <Icon name="user" />
            } else if (error) {
              icon = <Icon name="star" />
            }
            return icon
          }}
        />
        <Step
          key={1}
          title="Progress"
          description="This is description"
          status="progress"
          renderIcon={({ starting, waiting, error }) => {
            let icon
            if (starting) {
              icon = <Icon name="home" />
            } else if (waiting) {
              icon = <Icon name="user" />
            } else if (error) {
              icon = <Icon name="star" />
            }
            return icon
          }}
        />
        <Step
          key={2}
          title="Wait"
          description="This is description"
          status="wait"
          renderIcon={({ starting, waiting, error }) => {
            let icon
            if (starting) {
              icon = <Icon name="home" />
            } else if (waiting) {
              icon = <Icon name="user" />
            } else if (error) {
              icon = <Icon name="star" />
            }
            return icon
          }}
        />
        <Step
          key={3}
          title="Wait"
          description="This is description"
          status="error"
          renderIcon={({ starting, waiting, error }) => {
            let icon
            if (starting) {
              icon = <Icon name="home" />
            } else if (waiting) {
              icon = <Icon name="user" />
            } else if (error) {
              icon = <Icon name="star" />
            }
            return icon
          }}
        />
      </Steps>
    </View>
  )
}