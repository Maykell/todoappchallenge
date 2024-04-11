import React from 'react';

import { getMappedIcons } from './helper';
import { Icons } from './types';
import { colors, Colors } from '../../styles/colors';

type IconProps = {
  icon: Icons;
  size?: number;
  color?: keyof Colors;
};

export default function Icon({ icon, size, color = 'gray100' }: IconProps) {
  const MappedIcon = getMappedIcons[icon];
  return <MappedIcon width={size} height={size} color={colors[color]} />;
}
