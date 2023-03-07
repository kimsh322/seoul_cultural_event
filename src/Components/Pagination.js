import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { prevPage, nextPage, somePage } from "../itemSlices";

const PaginationDiv = styled.div`
  display: flex;

  .active {
    background-color: skyblue;
  }
  .button {
    width: 2rem;
  }
`;

const Pagination = () => {
  // 필터 아이템 상태 필요함
  // 페이지 10까지만 나오게하기
  const { value: currentPage } = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  const total = 100;
  const limitItems = 6;
  const maxPages = Math.ceil(total / limitItems);
  const pageButtons = Array(10).fill();
  console.log(currentPage);
  return (
    <PaginationDiv>
      <button
        className="button prev"
        disabled={currentPage === 1}
        onClick={() => {
          dispatch(prevPage());
        }}
      >
        {"<-"}
      </button>
      {pageButtons.map((_, i) => {
        i = i + 10 * Math.floor((currentPage - 1) / 10);
        return (
          <button
            className={`button ${i + 1 === currentPage ? "active" : ""}`} // 현재 페이지 활성화
            key={i + 1}
            onClick={() => {
              dispatch(somePage(i + 1));
            }}
            disabled={i >= maxPages}
          >
            {i + 1}
          </button>
        );
      })}
      <button
        className="button next"
        disabled={currentPage === maxPages}
        onClick={() => {
          dispatch(nextPage());
        }}
      >
        {"->"}
      </button>
    </PaginationDiv>
  );
};

export default Pagination;