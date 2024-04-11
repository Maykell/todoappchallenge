import { Text, TextProps } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { colors, Colors } from '../../styles/colors';
import styles from './styles';
import { FontWeight } from './types';

type TypographProps = PropsWithChildren &
  TextProps & {
    fontSize?: number;
    fontWeight?: FontWeight;
    color?: keyof Colors;
    lineThrough?: boolean;
  };

export default function Typograph({
  children,
  fontSize = 16,
  fontWeight = 'normal',
  color = 'gray100',
  lineThrough = false,
  ...rest
}: TypographProps) {
  const decorationLine = lineThrough ? 'line-through' : 'none';

  return (
    <Text
      style={[
        styles.typograph,
        {
          color: colors[color],
          fontSize,
          fontWeight,
          textDecorationLine: decorationLine,
        },
      ]}
      {...rest}>
      {children}
    </Text>
  );
}
