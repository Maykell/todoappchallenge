import { View, ViewProps, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import styles from './styles';

type RowProps = PropsWithChildren & ViewStyle & ViewProps;

export default function Row({ children, ...rest }: RowProps) {
  return (
    <View style={styles.row} {...rest}>
      {children}
    </View>
  );
}
