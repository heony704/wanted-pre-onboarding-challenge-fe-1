import styled from 'styled-components';

type ValidConditionProps = {
  valid: boolean;
  children: React.ReactNode;
};

interface ContainerProps {
  color: string;
}

export default function ValidCondition({ valid, children }: ValidConditionProps) {
  const color = valid ? 'lightgrey' : 'red';
  const mark = valid ? 'O' : '⨉';

  return (
    <Container color={color}>
      {mark} {children}
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  color: ${({ color }) => color};
  font-size: 0.8rem;
  height: 1rem;
`;
