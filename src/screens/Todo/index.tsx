import React, { useState } from 'react';

import Container from '../../components/Container';
import Box from '../../components/Box';
import Row from '../../components/Row';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Typograph from '../../components/Typograph';
import TodoList from '../../components/TodoList';
import Icon from '../../components/Icon';
import { useTodo } from '../../hooks';

export default function TodoScreen() {
  const [task, setTask] = useState<string>('');
  const { todos, addTodo, removeTodo, updateTodo } = useTodo();

  const createdTodosCount = todos.length;
  const donedTodosCount = todos.reduce((acc, current) => {
    if (current.done) {
      return (acc += 1);
    }
    return acc;
  }, 0);

  function clearTaskInput() {
    setTask('');
  }

  return (
    <Container>
      <Box
        height={153}
        backgroundColor="gray700"
        alignItems="center"
        zIndex={1}>
        <Icon icon="logo" size={130} />
        <Row gap={4} paddingHorizontal={24} position="absolute" bottom={-25}>
          <Box flex={1}>
            <Input
              placeholder="Adicione uma nova tarefa..."
              onChangeText={setTask}
              value={task}
            />
          </Box>
          <Button
            onPress={() => {
              addTodo(task);
              clearTaskInput();
            }}>
            <Icon icon="add" size={24} />
          </Button>
        </Row>
      </Box>

      <Box height={55} />
      <Row
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal={24}
        marginBottom={20}>
        <Row alignItems="center" justifyContent="center">
          <Typograph color="blue" fontWeight="bold">
            Criadas
          </Typograph>
          <Box width={8} />
          <Box
            height={24}
            width={24}
            backgroundColor="gray400"
            borderRadius={48}
            alignItems="center"
            justifyContent="center">
            <Typograph fontWeight="bold">{createdTodosCount}</Typograph>
          </Box>
        </Row>
        <Row>
          <Typograph color="purple" fontWeight="bold">
            Concluídas
          </Typograph>
          <Box width={8} />
          <Box
            height={24}
            width={24}
            backgroundColor="gray400"
            borderRadius={48}
            alignItems="center"
            justifyContent="center">
            <Typograph fontWeight="bold">{donedTodosCount}</Typograph>
          </Box>
        </Row>
      </Row>
      <TodoList
        todos={todos}
        onSelectedTodo={updateTodo}
        onRemoveTodo={removeTodo}
      />
    </Container>
  );
}
