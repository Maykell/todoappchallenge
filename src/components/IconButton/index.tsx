import { TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from '../Icon';
import { Icons } from '../Icon/types';
import { Colors } from '../../styles/colors';

type IconButtonProps = {
  icon: Icons;
  size?: number;
  color?: keyof Colors;
  onPress?: () => void;
};

export default function IconButton({
  icon,
  size,
  color = 'gray300',
  onPress,
}: IconButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Icon icon={icon} size={size} color={color} />
    </TouchableOpacity>
  );
}
