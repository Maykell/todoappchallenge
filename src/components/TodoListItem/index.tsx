import React from 'react';
import Card from '../Card';
import Row from '../Row';
import Typograph from '../Typograph';
import Box from '../Box';
import Radio from '../Radio';
import IconButton from '../IconButton';
import { Todo } from '../../App';
import { Colors } from '../../styles/colors';
import { TouchableOpacity } from 'react-native';

type TodoListItemProps = {
  todo: Todo;
  onSelect: () => void;
  onRemove: () => void;
};

export default function TodoListItem({
  todo,
  onSelect,
  onRemove,
}: TodoListItemProps) {
  const { description, done } = todo;
  const borderColor: keyof Colors = done ? 'gray500' : 'gray400';

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
      <Card borderColor={borderColor} marginHorizontal={24} marginBottom={12}>
        <Row justifyContent="space-between" alignItems="center">
          <Row width="80%" alignItems="center">
            <Radio checked={done} onSelect={onSelect} />
            <Box width={8} />
            <Typograph
              ellipsizeMode="tail"
              numberOfLines={2}
              lineThrough={done}>
              {description}
            </Typograph>
          </Row>
          <IconButton
            icon="trash"
            size={24}
            color="gray300"
            onPress={onRemove}
          />
        </Row>
      </Card>
    </TouchableOpacity>
  );
}
