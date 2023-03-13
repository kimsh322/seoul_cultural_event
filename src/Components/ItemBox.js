import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { useEffect } from "react";
import { filteringReducer } from "../itemSlices";

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
  const { fullItem } = useSelector((state) => state.fullItem);
  const currentFilter = useSelector((state) => state.currentFilter);
  const { filteredItem } = useSelector((state) => state.filteredItem);
  const { currentPage, limitItems } = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  // 처음에는 fullitem을 렌더링 배열에 담는다.
  useEffect(() => {
    dispatch(filteringReducer({ fullItem, currentFilter }));
  }, []);
  const itemArr = filteredItem;

  // 한 페이지에 6개 item 렌더링
  const currentArr = itemArr.slice(
    (currentPage - 1) * limitItems,
    currentPage * limitItems
  );
  return (
    <ItemBoxContainer>
      {currentArr.map((el, idx) => {
        return (
          <Item
            key={el.TITLE}
            itemImg={el.MAIN_IMG}
            idx={idx + (currentPage - 1) * limitItems}
          />
        );
      })}
    </ItemBoxContainer>
  );
};

export default ItemBox;
