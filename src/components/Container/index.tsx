import { View, ViewProps } from 'react-native';
import React, { PropsWithChildren } from 'react';
import styles from './styles';
import { colors } from '../../styles/colors';

type ContainerProps = ViewProps &
  PropsWithChildren & {
    padding?: number;
    backgroundColor?: string;
  };

export default function Container({
  padding,
  backgroundColor = colors.gray600,
  children,
}: ContainerProps) {
  return (
    <View
      style={[
        styles.container,
        {
          padding: padding,
          backgroundColor: backgroundColor,
        },
      ]}>
      {children}
    </View>
  );
}
