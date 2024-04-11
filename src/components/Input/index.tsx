import { TextInput, TextInputProps } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Colors, colors } from '../../styles/colors';

type InputProps = TextInputProps;

export default function Input({ ...rest }: InputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const borderColor: keyof Colors = isFocus ? 'purple' : 'gray700';

  return (
    <TextInput
      placeholderTextColor={colors.gray300}
      cursorColor={colors.gray100}
      autoFocus
      onFocus={() => setIsFocus(true)}
      onSubmitEditing={() => setIsFocus(false)}
      onEndEditing={() => setIsFocus(false)}
      style={[
        styles.input,
        {
          borderColor: colors[borderColor],
        },
      ]}
      {...rest}
    />
  );
}
