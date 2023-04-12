import FilterByClass from "./FilterByClass";
import FilterByDate from "./FilterByDate";
import FilterByLocation from "./FilterByLocation";
import styled from "styled-components";
import { useSelector } from "react-redux";

const FilterBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 9%;
  background-color: beige;
  display: flex;
  border-radius: 10px 10px 0 0;
`;

const FilterBox = () => {
  const filteredItem = useSelector((state) => state.filteredItem);

  return (
    <FilterBoxContainer>
      <FilterByClass />
      <FilterByLocation />
      <FilterByDate />
      <span>총 {filteredItem.filteredItem.length}개</span>
    </FilterBoxContainer>
  );
};

export default FilterBox;
