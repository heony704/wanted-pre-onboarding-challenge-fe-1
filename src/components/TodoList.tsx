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
      <TodoListWrap>
        <ButtonWrap>
          <LargeButton color="#a1887f" filled={true} onClick={goNewTodo}>
            ADD +
          </LargeButton>
        </ButtonWrap>
        <Titles>
          {todoList.map((todo) => (
            <Todo id={todo.id} title={todo.title} />
          ))}
        </Titles>
      </TodoListWrap>
      <TodoContentsWrap>
        <Outlet />
      </TodoContentsWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;

  > div + div {
    margin-left: 2rem;
  }
`;

const TodoListWrap = styled.div`
  flex-grow: 8;
  width: 0;

  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 1rem;
  }
`;

const TodoContentsWrap = styled.div`
  flex-grow: 9;
  width: 0;
`;

const ButtonWrap = styled.div`
  padding-right: 16px;
`;

const Titles = styled.div`
  flex-grow: 1;
  height: 0;
  overflow-y: scroll;
  padding-right: 8px;

  pre + pre {
    margin-top: 1rem;
  }
`;
