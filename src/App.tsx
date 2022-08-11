import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/Template';
import TodoList from './components/TodoList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<TodoList />}>
            <Route index />
            <Route path="new" />
            <Route path=":id" />
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
