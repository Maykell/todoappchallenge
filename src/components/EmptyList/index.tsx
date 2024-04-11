import React from 'react';
import Box from '../Box';
import Typograph from '../Typograph';
import Icon from '../Icon';

export default function EmptyList() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Icon icon="document" size={56} color="gray300" />
      <Box height={16} />
      <Typograph color="gray300" fontWeight="bold">
        Você ainda não tem tarefas cadastradas!
      </Typograph>
      <Typograph color="gray300" fontSize={14}>
        Crie tarefas e organize seus itens a fazer
      </Typograph>
    </Box>
  );
}
