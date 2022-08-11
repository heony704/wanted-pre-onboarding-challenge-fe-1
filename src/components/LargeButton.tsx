import styled from 'styled-components';

type ButtonProps = {
  value?: string;
  color?: string;
  filled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

interface ContainerProps {
  color: string;
  filled: boolean;
}

export default function LargeButton({ color = '#0288d1', filled = false, onClick, children }: ButtonProps) {
  return (
    <Container color={color} filled={filled} onClick={onClick}>
      {children}
    </Container>
  );
}

const Container = styled.button<ContainerProps>`
  color: ${({ filled, color }) => (filled ? 'white' : color)};
  background-color: ${({ filled, color }) => (filled ? color : 'transparent')};
  border: 0.1rem solid ${({ color }) => color};
  font-size: 1.1rem;
  border-radius: 1.3rem;
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-out;
  width: 100%;

  :hover {
    filter: brightness(1.2);
  }
`;
