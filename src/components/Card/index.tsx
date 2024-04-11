import { View, ViewProps, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import styles from './styles';
import { colors, Colors } from '../../styles/colors';

type CardProps = PropsWithChildren &
  ViewStyle &
  ViewProps & {
    backgroundColor?: keyof Colors;
    borderColor?: keyof Colors;
  };

export default function Card({
  children,
  backgroundColor = 'gray500',
  borderColor = 'gray400',
  ...rest
}: CardProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors[backgroundColor],
          borderColor: colors[borderColor],
        },
      ]}
      {...rest}>
      {children}
    </View>
  );
}
