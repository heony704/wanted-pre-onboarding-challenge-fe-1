import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import useNavigateFunction from '../hooks/useNavigateFunction';
import LargeButton from './LargeButton';
import Todo from './Todo';
import { useState, useEffect } from 'react';

type TodoListProps = {
  loginToken: string | null;
};

type TodoType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export default function TodoList({ loginToken }: TodoListProps) {
  const goNewTodo = useNavigateFunction('/newtodo');

  const [todoList, setTodoList] = useState<TodoType[]>([]);

  useEffect(() => {
    if (loginToken !== null) {
      fetch('http://localhost:8080/todos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: loginToken,
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error('네크워크 응답 오류');
          return response.json();
        })
        .then((data) => {
          setTodoList(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <Container>
      <div>
        <LargeButton color="#a1887f" filled={true} onClick={goNewTodo}>
          ADD +
        </LargeButton>
        <div>
          {todoList.map((todo) => (
            <Todo id={todo.id} title={todo.title} />
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;

  > div + div {
    margin-left: 2.5rem;
  }

  > div {
    flex: 1 1 0;
    width: 0;
    height: 100%;
  }

  > div > button {
    margin-bottom: 1rem;
  }

  pre + pre {
    margin-top: 1rem;
  }
`;
