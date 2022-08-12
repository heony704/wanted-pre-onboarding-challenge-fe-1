import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/Template';
import TodoList from './components/TodoList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import EmptyContents from './components/EmptyContents';
import NewTodo from './components/NewTodo';
import TodoContents from './components/TodoContents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<TodoList />}>
            <Route index element={<EmptyContents />} />
            <Route path="newtodo" element={<NewTodo />} />
            <Route path=":id" element={<TodoContents />} />
          </Route>
          <Route path="auth">
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
