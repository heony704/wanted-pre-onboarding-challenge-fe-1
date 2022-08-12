import styled from 'styled-components';
import Button from './Button';
import { useParams } from 'react-router-dom';

export default function TodoContents() {
  return (
    <Container>
      <pre>title</pre>
      <pre>content</pre>
      <div>
        <Button color="#0288d1" filled={true}>
          EDIT
        </Button>
        <Button color="#D32F2F" filled={true}>
          DELETE
        </Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 0.1rem solid #a1887f;
  border-radius: 1.3em;
  padding: 1rem;

  pre {
    width: 100%;

    &:first-child {
      font-size: 1.6rem;
      font-weight: 500;
    }
    &:nth-child(2) {
      flex-grow: 1;
    }
  }

  > * + * {
    margin-top: 0.5rem;
  }

  > div > button + button {
    margin-left: 1rem;
  }
`;
