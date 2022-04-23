import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconFrame = styled.div`
  width: 140px;
  height: 140px;
  outline: solid;
  outline-color: #f4f2ff;
  outline-width: 2px;
  border-radius: 50%;
`;

const IconImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

const Icon = () => {
  return (
    <Container>
      <IconFrame>
        <IconImage src="/icon.png" />
      </IconFrame>
    </Container>
  );
};

export default Icon;
