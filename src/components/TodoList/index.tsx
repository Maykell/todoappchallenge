import { FlatList } from 'react-native';
import React from 'react';
import TodoListItem from '../TodoListItem';
import EmptyList from '../EmptyList';
import styles from './styles';
import { Todo } from '../../App';

type TodoListProps = {
  todos: Todo[];
  onSelectedTodo: (index: number) => void;
  onRemoveTodo: (index: number) => void;
};

export default function TodoList({
  todos,
  onSelectedTodo,
  onRemoveTodo,
}: TodoListProps) {
  return (
    <FlatList
      data={todos}
      renderItem={({ item, index }) => (
        <TodoListItem
          todo={item}
          onSelect={() => onSelectedTodo(index)}
          onRemove={() => onRemoveTodo(index)}
        />
      )}
      ListEmptyComponent={<EmptyList />}
      contentContainerStyle={styles.containerStyle}
    />
  );
}
