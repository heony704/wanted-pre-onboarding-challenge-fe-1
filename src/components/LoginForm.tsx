import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import useNavigationFunction from '../hooks/useNavigateFunction';
import ValidCondition from './ValidCondition';

type LoginFormProps = {
  setToken: React.Dispatch<React.SetStateAction<null>>;
};

interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({ setToken }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const goHome = useNavigationFunction('/');

  const isValidEmailFormat = (email: string) => {
    const emailFormatRegex = /@{1}.*\.{1}/;
    return emailFormatRegex.test(email);
  };
  const isValidPasswordCharacter = (password: string) => {
    return password.length > 7;
  };
  const isValidForm = (email: string, password: string) => {
    return isValidEmailFormat(email) && isValidPasswordCharacter(password);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('네크워크 응답 오류');
        return res.json();
      })
      .then((data) => {
        setToken(data.token);
        goHome();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormItem>
        <label>email</label>
        <div>
          <input type="text" value={email} onChange={onChangeEmail} placeholder="example@exam.com" />
          <InputCheck>
            <ValidCondition valid={isValidEmailFormat(email)}>이메일 형식</ValidCondition>
          </InputCheck>
        </div>
      </FormItem>
      <FormItem>
        <label>password</label>
        <div>
          <input type="password" value={password} onChange={onChangePassword} />
          <InputCheck>
            <ValidCondition valid={isValidPasswordCharacter(password)}>8자 이상</ValidCondition>
          </InputCheck>
        </div>
      </FormItem>
      <Button color="#0288d1" filled={true} disabled={!isValidForm(email, password)}>
        LOGIN
      </Button>
    </Form>
  );
}

const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;

  > div + div {
    margin-top: 1rem;
  }

  button {
    margin-top: 1.5rem;
    height: 2.5rem;
  }
`;

const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: auto;

  label {
    user-select: none;
    font-size: 1.1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    min-width: 15rem;
  }

  input {
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
    background-color: white;
    border: 0.1rem solid #a1887f;
    border-radius: 0.8rem;

    ::placeholder {
      color: lightgray;
    }
  }
`;

const InputCheck = styled.div`
  margin-top: 0.3rem;
  padding-left: 0.1rem;
  display: flex;
`;
