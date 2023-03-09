import styled from "styled-components";
import Pagination from "../Components/Pagination";
import ItemBox from "../Components/ItemBox";
import FilterBox from "../Components/FilterBox";
import { useSelector } from "react-redux";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
`;

const MainPage = () => {
  const { loading } = useSelector((state) => state.fullItem);
  // 로딩 완료시에만 메인 페이지 렌더링
  if (loading === "succeeded") {
    return (
      <MainDiv>
        <FilterBox />
        <ItemBox />
        <Pagination />
      </MainDiv>
    );
  }
};

export default MainPage;
