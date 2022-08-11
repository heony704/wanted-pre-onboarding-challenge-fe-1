import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/Template';
import TodoList from './components/TodoList';

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
            <Route path="login" />
            <Route path="signup" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
