import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import useNavigateFunction from '../hooks/useNavigateFunction';
import LargeButton from './LargeButton';
import Todo from './Todo';

export default function TodoList() {
  const goAddTodo = useNavigateFunction('/new');

  return (
    <Container>
      <div>
        <LargeButton color="#a1887f" filled={true} onClick={goAddTodo}>
          ADD +
        </LargeButton>
        <Todo title="dafsdfasdfd" />
        <Todo title="dafsdfasdfd" />
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
