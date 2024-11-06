import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { render, screen }  from '@testing-library/react-native';

const BUTTON_HINT = 'click this button';
const TEXT_HINT = 'static text';
// Little hack to make all the methods happy with type
const NO_MATCHES_TEXT: any = 'not-existent-element';

const getMultipleInstancesFoundMessage = (value: string) => {
  return `Found multiple elements with accessibilityHint: ${value}`;
};

const getNoInstancesFoundMessage = (value: string) => {
  return `Unable to find an element with accessibilityHint: ${value}`;
};

const Typography = ({ children, ...rest }: any) => {
  return <Text {...rest}>{children}</Text>;
};

const Button = ({ children }: { children: React.ReactNode }) => (
  <Pressable accessibilityHint={BUTTON_HINT}>
    <Typography accessibilityHint={TEXT_HINT}>{children}</Typography>
  </Pressable>
);

const Section = () => (
  <>
    <Typography accessibilityHint={TEXT_HINT}>Title</Typography>
    <Button>Hello</Button>
  </>
);

test('getByA11yHint, queryByA11yHint, findByA11yHint', async () => {
  render(<Section />);

  expect(screen.getByA11yHint(BUTTON_HINT).props.accessibilityHint).toEqual(BUTTON_HINT);
  const button = screen.queryByA11yHint(BUTTON_HINT);
  expect(button?.props.accessibilityHint).toEqual(BUTTON_HINT);

  expect(() => screen.getByA11yHint(NO_MATCHES_TEXT)).toThrow(
    getNoInstancesFoundMessage(NO_MATCHES_TEXT),
  );
  expect(screen.queryByA11yHint(NO_MATCHES_TEXT)).toBeNull();

  expect(() => screen.getByA11yHint(TEXT_HINT)).toThrow(
    getMultipleInstancesFoundMessage(TEXT_HINT),
  );
  expect(() => screen.queryByA11yHint(TEXT_HINT)).toThrow(
    getMultipleInstancesFoundMessage(TEXT_HINT),
  );

  const asyncButton = await screen.findByA11yHint(BUTTON_HINT);
  expect(asyncButton.props.accessibilityHint).toEqual(BUTTON_HINT);
  await expect(screen.findByA11yHint(NO_MATCHES_TEXT)).rejects.toThrow(
    getNoInstancesFoundMessage(NO_MATCHES_TEXT),
  );

  await expect(screen.findByA11yHint(TEXT_HINT)).rejects.toThrow(
    getMultipleInstancesFoundMessage(TEXT_HINT),
  );
});

test('getAllByA11yHint, queryAllByA11yHint, findAllByA11yHint', async () => {
  render(<Section />);

  expect(screen.getAllByA11yHint(TEXT_HINT)).toHaveLength(2);
  expect(screen.queryAllByA11yHint(TEXT_HINT)).toHaveLength(2);

  expect(() => screen.getAllByA11yHint(NO_MATCHES_TEXT)).toThrow(
    getNoInstancesFoundMessage(NO_MATCHES_TEXT),
  );
  expect(screen.queryAllByA11yHint(NO_MATCHES_TEXT)).toEqual([]);

  await expect(screen.findAllByA11yHint(TEXT_HINT)).resolves.toHaveLength(2);
  await expect(screen.findAllByA11yHint(NO_MATCHES_TEXT)).rejects.toThrow(
    getNoInstancesFoundMessage(NO_MATCHES_TEXT),
  );
});

test('getByHintText, getByHintText', () => {
  render(
    <View>
      <View accessibilityHint="test" />
      <View accessibilityHint="tests id" />
    </View>,
  );
  expect(screen.getByHintText('id', { exact: false })).toBeTruthy();
  expect(screen.getAllByHintText('test', { exact: false })).toHaveLength(2);
});

test('getByHintText, getByHintText and exact = true', () => {
  render(
    <View>
      <View accessibilityHint="test" />
      <View accessibilityHint="tests id" />
    </View>,
  );
  expect(screen.queryByHintText('id', { exact: true })).toBeNull();
  expect(screen.getAllByHintText('test', { exact: true })).toHaveLength(1);
});
