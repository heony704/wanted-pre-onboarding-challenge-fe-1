import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import useNavigateFunction from '../hooks/useNavigateFunction';
import LargeButton from './LargeButton';
import Todo from './Todo';
import { tokenToString } from 'typescript';

export default function TodoList() {
  const goNewTodo = useNavigateFunction('/newtodo');

  return (
    <Container>
      <div>
        <LargeButton color="#a1887f" filled={true} onClick={goNewTodo}>
          ADD +
        </LargeButton>
        <div>
          {/* {fetch('https://localhost:8080/todos', { headers: { Authorization: 'test' } })
            .then((response) => response.json())
            .then((data) => console.log(data))} */}
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
