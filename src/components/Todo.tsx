import styled from 'styled-components';
import useNavigateFunction from '../hooks/useNavigateFunction';

type TodoProps = {
  id?: string;
  title?: string;
};

export default function Todo({ id, title }: TodoProps) {
  const goTodoContents = useNavigateFunction('/' + id);

  return <Container onClick={goTodoContents}>{title}</Container>;
}

const Container = styled.pre`
  padding: 1rem;
  background-color: white;
  border: 0.1rem solid #a1887f;
  border-radius: 1.3rem;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :hover {
    filter: brightness(0.95);
  }
`;
