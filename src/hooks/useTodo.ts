import { useCallback, useReducer } from 'react';

type Todo = {
  description: string;
  done: boolean;
};

type ActionAdd = { type: 'add'; payload: Todo };
type ActionRemove = { type: 'remove'; payload: number };
type ActionUpdate = { type: 'update'; payload: number };

type TodoActions = ActionAdd | ActionRemove | ActionUpdate;

type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: [],
};

const reducer = (prevState: State, action: TodoActions): State => {
  switch (action.type) {
    case 'add':
      return {
        ...prevState,
        todos: [...prevState.todos, action.payload],
      };
    case 'remove':
      return {
        ...prevState,
        todos: prevState.todos.filter((_, index) => index !== action.payload),
      };
    case 'update':
      return {
        ...prevState,
        todos: prevState.todos.map((todo, todoIndex) =>
          todoIndex === action.payload ? { ...todo, done: !todo.done } : todo,
        ),
      };
    default:
      return prevState;
  }
};

export default function useTodo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = useCallback((task: string) => {
    if (!task) {
      return;
    }
    dispatch({
      type: 'add',
      payload: {
        description: task,
        done: false,
      },
    });
  }, []);

  const removeTodo = useCallback((index: number) => {
    dispatch({
      type: 'remove',
      payload: index,
    });
  }, []);

  const updateTodo = useCallback((index: number) => {
    dispatch({
      type: 'update',
      payload: index,
    });
  }, []);

  return {
    todos: state.todos,
    addTodo,
    removeTodo,
    updateTodo,
  };
}
