import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Template from './components/Template';
import TodoList from './components/TodoList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import EmptyContents from './components/EmptyContents';
import NewTodo from './components/NewTodo';
import TodoContents from './components/TodoContents';

function App() {
  const [loginToken, setLoginToken] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<TodoList loginToken={loginToken} />}>
            <Route index element={<EmptyContents />} />
            <Route path="newtodo" element={<NewTodo loginToken={loginToken} />} />
            <Route path=":id" element={<TodoContents loginToken={loginToken} />} />
          </Route>
          <Route path="auth">
            <Route path="login" element={<LoginForm setToken={setLoginToken} />} />
            <Route path="signup" element={<SignUpForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
