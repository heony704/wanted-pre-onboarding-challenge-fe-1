import styled from 'styled-components';

type ButtonProps = {
  value?: string;
  color?: string;
  filled?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

interface ContainerProps {
  color: string;
  filled: boolean;
}

export default function Button({
  color = '#0288d1',
  filled = false,
  disabled = false,
  type = 'submit',
  onClick,
  children,
}: ButtonProps) {
  return (
    <Container color={disabled ? 'darkgray' : color} filled={filled} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  );
}

const Container = styled.button<ContainerProps>`
  color: ${({ filled, color }) => (filled ? 'white' : color)};
  background-color: ${({ filled, color }) => (filled ? color : 'transparent')};
  border: 0.1rem solid ${({ color }) => color};
  font-size: 1rem;
  border-radius: 0.7rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-out;

  :hover {
    filter: brightness(1.2);
  }

  :disabled {
    cursor: default;
    :hover {
      filter: none;
    }
  }
`;
