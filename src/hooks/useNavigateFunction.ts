import { useNavigate } from 'react-router-dom';

export default function useNavigateFunction(path: string) {
  const navigate = useNavigate();
  return () => navigate(path);
}
