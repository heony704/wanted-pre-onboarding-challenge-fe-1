import styled from 'styled-components';
import Button from './Button';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useNavigationFunction from '../hooks/useNavigateFunction';

type TodoListProps = {
  loginToken: string | null;
};

export default function TodoContents({ loginToken }: TodoListProps) {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (loginToken === null) return;
    fetch('http://localhost:8080/todos/' + id, {
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
        setTitle(data.data.title);
        setContent(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const goHome = useNavigationFunction('/');

  const deleteTodo = () => {
    if (loginToken === null) return;
    fetch('http://localhost:8080/todos/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: loginToken,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('네크워크 응답 오류');
        goHome();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Buttons>
        <Button color="#0288d1" filled={true}>
          EDIT
        </Button>
        <Button color="#D32F2F" filled={true} onClick={deleteTodo}>
          DELETE
        </Button>
      </Buttons>
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

  > * + * {
    margin-top: 0.5rem;
  }
`;

const Title = styled.pre`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Content = styled.pre`
  width: 100%;
  flex-grow: 1;
  height: 0;
`;

const Buttons = styled.div`
  button + button {
    margin-left: 1rem;
  }
`;
