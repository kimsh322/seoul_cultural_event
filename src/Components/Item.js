import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemDiv = styled.div`
  width: 30%;
  height: 45%;
  background-color: blue;
  margin: 1%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 90%;
  }
  a {
    display: inline-block;
    width: 90%;
  }
`;

const Item = ({ itemImg }) => {
  return (
    <ItemDiv>
      <Link to="/DetailItem">{<img src={itemImg} alt="img" />}</Link>
    </ItemDiv>
  );
};

export default Item;
