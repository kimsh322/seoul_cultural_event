import styled from "styled-components";
import { useSelector } from "react-redux";
import Item from "./Item";
const ItemBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 75%;
  flex-wrap: wrap;
  margin-top: 1%;
`;
const ItemBox = () => {
  const { value: fullItem, loading } = useSelector((state) => state.fullItem);

  if (loading === "succeeded") {
    const itemArr = fullItem.culturalEventInfo.row;
    return (
      <ItemBoxContainer>
        {itemArr.map((el) => {
          return <Item key={el.TITLE} itemImg={el.MAIN_IMG} />;
        })}
      </ItemBoxContainer>
    );
  }
};

export default ItemBox;
