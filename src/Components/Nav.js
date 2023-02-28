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
    margin-right: 5px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  padding: 2px 5px;
  background-color: white;
  border-radius: 50%;
`;

const Nav = () => {
  return (
    <NavBar>
      <div>
        <StyledLink to="/">
          <img src="../home_icon.png" alt="Home" />
        </StyledLink>
      </div>
      <div>
        <span>서울에서 열리는 문화행사</span>
      </div>
      <button>
        <Link to="/Mine">찜목록</Link>
      </button>
    </NavBar>
  );
};

export default Nav;
