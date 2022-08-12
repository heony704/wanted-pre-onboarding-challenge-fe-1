import styled from 'styled-components';

export default function EmptyContents() {
  return (
    <Container>
      <p>ADD 버튼을 눌러 Todo를 추가하세요.</p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #efebe9;
  border-radius: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a1887f;
  user-select: none;
  padding: 2rem;
  height: 100%;
`;
