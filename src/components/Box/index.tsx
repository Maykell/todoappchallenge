import { ViewStyle, View, ViewProps } from 'react-native';
import React, { PropsWithChildren } from 'react';
import styles from './styles';
import { colors, Colors } from '../../styles/colors';

type BoxProps = PropsWithChildren &
  ViewStyle &
  ViewProps & {
    backgroundColor?: keyof Colors;
  };

export default function Box({
  children,
  backgroundColor = 'transparent',
  ...rest
}: BoxProps) {
  return (
    <View
      style={[styles.default, { backgroundColor: colors[backgroundColor] }]}
      {...rest}>
      {children}
    </View>
  );
}
