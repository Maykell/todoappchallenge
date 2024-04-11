import { TouchableOpacity } from 'react-native';
import React, { PropsWithChildren } from 'react';
import styles from './styles';
import Row from '../Row';

type ButtonProps = PropsWithChildren & {
  opacity?: number;
  onPress?: () => void;
};

export default function Button({
  children,
  opacity = 0.8,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={opacity} onPress={onPress}>
      <Row style={styles.button}>{children}</Row>
    </TouchableOpacity>
  );
}
