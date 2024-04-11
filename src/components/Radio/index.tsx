import React from 'react';
import Box from '../Box';
import Icon from '../Icon';
import { TouchableOpacity } from 'react-native';

type RadioProps = {
  checked: boolean;
  onSelect?: () => void;
};

export default function Radio({ checked, onSelect }: RadioProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
      <Box>
        {checked ? (
          <Icon icon="radioChecked" size={22} color="purpleDark" />
        ) : (
          <Icon icon="radioUnchecked" size={24} color="blue" />
        )}
      </Box>
    </TouchableOpacity>
  );
}
