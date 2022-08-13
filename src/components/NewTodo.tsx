import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import useNavigateFunction from '../hooks/useNavigateFunction';

type NewTodoProps = {
  loginToken: string | null;
};

export default function NewTodo({ loginToken }: NewTodoProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const goHome = useNavigateFunction('/');
  const goLogin = useNavigateFunction('/login');

  const onCreateTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (loginToken === null) goLogin();
    else {
      fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: loginToken,
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      })
        .then((response) => {
          if (!response.ok) throw new Error('네크워크 응답 오류');
          else goHome();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Form>
      <textarea name="title" value={title} onChange={onChangeTitle} placeholder="todo title" />
      <textarea name="content" value={content} onChange={onChangeContent} placeholder="todo content" />
      <div>
        <Button color="#0288d1" filled={true} onClick={onCreateTodo}>
          CONFIRM
        </Button>
        <Button color="#D32F2F" filled={true} onClick={goHome}>
          CANCEL
        </Button>
      </div>
    </Form>
  );
}

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 0.1rem solid #a1887f;
  border-radius: 1.3em;
  padding: 1rem;

  textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    resize: none;

    &::placeholder {
      color: lightgray;
    }

    &:first-child {
      height: 2.5rem;
    }
    &:nth-child(2) {
      flex-grow: 1;
    }
  }

  > * + * {
    margin-top: 1rem;
  }

  > div > button + button {
    margin-left: 1rem;
  }
`;
