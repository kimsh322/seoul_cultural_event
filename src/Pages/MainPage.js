import styled from "styled-components";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const MainPage = () => {
  return (
    <MainDiv>
      <button>
        <Link to="/DetailItem">클릭</Link>
      </button>
    </MainDiv>
  );
};

export default MainPage;
