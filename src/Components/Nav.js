import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: skyblue;
  font-size: 3rem;

  & div {
    margin: 5px;
  }
  & button {
    background-color: #fff;
    width: 10%;
    height: 70%;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  return (
    <NavBar>
      <div>
        <StyledLink to="/">메인페이지</StyledLink>
      </div>
      <div>
        <span>서울에서 열리는 문화행사</span>
      </div>
      <button>
        <StyledLink to="/Mine">찜목록</StyledLink>
      </button>
    </NavBar>
  );
};

export default Nav;
