import styled from 'styled-components';

type TodoProps = {
  title?: string;
  onClick?: () => void;
};

export default function Todo({ title, onClick }: TodoProps) {
  return <Container onClick={onClick}>{title}</Container>;
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
