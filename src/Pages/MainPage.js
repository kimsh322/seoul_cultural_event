import styled from "styled-components";
import { useSelector } from "react-redux";
import Item from "../Components/Item";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;

  #filter-container {
    width: 60%;
    height: 15%;
    background-color: beige;
  }

  #item-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 75%;
    flex-wrap: wrap;
    margin-top: 1%;
  }
`;

const MainPage = () => {
  const { value: fullItem, loading } = useSelector((state) => state.fullItem);

  if (loading === "succeeded") {
    const itemArr = fullItem.culturalEventInfo.row;
    return (
      <MainDiv>
        <div id="filter-container">분류</div>
        <div id="item-container">
          {itemArr.map((el) => {
            return <Item key={el.TITLE} itemImg={el.MAIN_IMG} />;
          })}
        </div>
      </MainDiv>
    );
  }
};

export default MainPage;
