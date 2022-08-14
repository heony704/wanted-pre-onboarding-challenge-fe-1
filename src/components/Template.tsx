import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Button from './Button';
import useNavigateFunction from '../hooks/useNavigateFunction';

export default function Template() {
  const goHome = useNavigateFunction('/');
  const goLogin = useNavigateFunction('/auth/login');
  const goSignup = useNavigateFunction('/auth/signup');

  return (
    <Container>
      <div>
        <Header>
          <Logo onClick={goHome}>
            <span>T</span>
            <span>ODO LIST</span>
            <span>:</span>
          </Logo>
          <Buttons>
            <Button color="#0288d1" filled={false} onClick={goLogin}>
              LOGIN
            </Button>
            <Button color="#0288d1" filled={true} onClick={goSignup}>
              SIGN UP
            </Button>
          </Buttons>
        </Header>
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer>
        <p>developed by seungheon lee .</p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  > div {
    width: 100%;
    flex-grow: 1;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
  }

  > div > * {
    padding: 0 3rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
`;

const Logo = styled.div`
  user-select: none;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 500;
  color: #5d4037;

  span:first-child {
    color: #f57c00;
  }
  span:last-child {
    color: #f57c00;
  }
`;

const Buttons = styled.div`
  > * + * {
    margin-left: 1rem;
  }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-top: 1rem;
`;

const Footer = styled.footer`
  user-select: none;
  display: flex;
  align-items: center;
  height: 3rem;

  p {
    color: #5d4037;
    width: 100%;
    text-align: center;
    font-weight: 300;
  }
`;
