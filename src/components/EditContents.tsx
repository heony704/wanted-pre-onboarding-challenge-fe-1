import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';

type EditContentsProps = {
  offEditMode: () => void;
  id: string;
  title: string;
  content: string;
  loginToken: string;
};

export default function EditContents({ offEditMode, id, title, content, loginToken }: EditContentsProps) {
  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);

  const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(event.target.value);
  };

  const updateTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch('http://localhost:8080/todos/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: loginToken,
      },
      body: JSON.stringify({
        title: titleValue,
        content: contentValue,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('네크워크 응답 오류');
        else offEditMode();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form>
      <textarea name="title" value={titleValue} onChange={onChangeTitle} placeholder="todo title" />
      <textarea name="content" value={contentValue} onChange={onChangeContent} placeholder="todo content" />
      <div>
        <Button color="#0288d1" filled={true} onClick={updateTodo}>
          EDIT
        </Button>
        <Button color="#D32F2F" filled={true} onClick={offEditMode}>
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
