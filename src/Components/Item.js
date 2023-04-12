import { Link } from "react-router-dom";
import styled from "styled-components";
import "animate.css";

const ItemDiv = styled.div`
  width: 25%;
  height: 45%;
  background-color: skyblue;
  margin: 1%;
  display: flex;
  justify-content: center;
  animation: fadeIn 1s;
  border: 1px solid black;
  border-radius: 10px;
  img {
    width: 100%;
    height: 90%;
  }
  a {
    display: inline-block;
    width: 90%;
  }
`;

const Item = ({ itemImg, idx }) => {
  return (
    <ItemDiv>
      <Link to="/DetailItem" state={{ idx }}>
        {<img src={itemImg} alt="img" />}
      </Link>
    </ItemDiv>
  );
};

export default Item;
