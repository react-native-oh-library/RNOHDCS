import * as React from 'react';

import {
  Paragraph,
  Subheading,
  Text as NativeText,
  Text,
  MD2Theme,
  MD3Theme,
  useTheme,
} from 'react-native-paper';


type Props = React.ComponentProps<typeof NativeText> & {
  isSubheading?: boolean;
};

export const TextComponent = ({ isSubheading = false, ...props }: Props) => {
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const theme = useExampleTheme();

  if (theme.isV3) {
    return (
      <Text
        variant={isSubheading ? 'bodyLarge' : 'bodyMedium'}
        style={{ color: theme.colors.onSurfaceVariant }}
        {...props}
      />
    );
  } else if (isSubheading) {
    return <Subheading {...props} />;
  }
  return <Paragraph {...props} />;
};
