import FilterByClass from "./FilterByClass";
import FilterByDate from "./FilterByDate";
import FilterByLocation from "./FilterByLocation";
import styled from "styled-components";

const FilterBoxContainer = styled.div`
  width: 60%;
  height: 15%;
  background-color: beige;
  display: flex;
`;

const FilterBox = () => {
  return (
    <FilterBoxContainer>
      <FilterByClass />
      <FilterByLocation />
      <FilterByDate />
    </FilterBoxContainer>
  );
};

export default FilterBox;
