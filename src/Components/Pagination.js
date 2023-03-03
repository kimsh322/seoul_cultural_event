import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { prev, next, some } from "../itemSlices";

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
          dispatch(prev());
        }}
      >
        {"<-"}
      </button>
      {pageButtons.map((_, i) => {
        return (
          <button
            className={`button ${i === 0 ? "active" : ""}`} // 현재 페이지 활성화
            key={i + 1}
            onClick={() => {
              if (i + currentPage <= maxPages) dispatch(some(i + currentPage));
            }}
            disabled={i + currentPage > maxPages}
          >
            {i + currentPage}
          </button>
        );
      })}
      <button
        className="button next"
        disabled={currentPage === maxPages}
        onClick={() => {
          dispatch(next());
        }}
      >
        {"->"}
      </button>
    </PaginationDiv>
  );
};

export default Pagination;
