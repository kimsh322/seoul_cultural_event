import styled from "styled-components";
import Pagination from "../Components/Pagination";
import ItemBox from "../Components/ItemBox";
import FilterBox from "../Components/FilterBox";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
`;

const MainPage = () => {
  return (
    <MainDiv>
      <FilterBox />
      <ItemBox />
      <Pagination />
    </MainDiv>
  );
};

export default MainPage;
