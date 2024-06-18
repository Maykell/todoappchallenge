import { useCallback, useReducer } from 'react';

type Todo = {
  description: string;
  done: boolean;
};

type ActionAdd = { type: 'add'; payload: Todo };
type ActionRemove = { type: 'remove'; payload: number };
type ActionChange = { type: 'change'; payload: number };

type TodoActions = ActionAdd | ActionRemove | ActionChange;

const initialState: Todo[] = [];

const reducer = (state: typeof initialState, action: TodoActions): Todo[] =>
  ({
    add: [...state, action.payload as Todo],
    remove: state.filter((_, index) => index !== action.payload),
    change: state.map((todo, todoIndex) => {
      if (todoIndex === action.payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    }),
  }[action.type]);

export default function useTodo() {
  const [todos, dispatch] = useReducer(reducer, initialState);

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
      type: 'change',
      payload: index,
    });
  }, []);

  return {
    todos,
    addTodo,
    removeTodo,
    updateTodo,
  };
}
