import * as React from 'react';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';

import { Dialog, MD2Colors, MD3Colors, Portal, MD2Theme,
  MD3Theme,
  useTheme,} from 'react-native-paper';

import { TextComponent } from './DialogTextComponent';


const isHarmony = Platform.OS === 'harmony';
const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
const DialogWithLoadingIndicator = ({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) => {
  const { isV3 } = useExampleTheme();
  return (
    <Portal>
      <Dialog onDismiss={close} visible={visible}>
        <Dialog.Title>Progress Dialog</Dialog.Title>
        <Dialog.Content>
          <View style={styles.flexing}>
            <ActivityIndicator
              color={isV3 ? MD3Colors.tertiary30 : MD2Colors.indigo500}
              size={isHarmony ? 'large' : 48}
              style={styles.marginRight}
            />
            <TextComponent>Loading.....</TextComponent>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  flexing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 16,
  },
});

export default DialogWithLoadingIndicator;
