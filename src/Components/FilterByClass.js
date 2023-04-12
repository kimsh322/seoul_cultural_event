import { useDispatch, useSelector } from "react-redux";
import { filteringReducer } from "../itemSlices";
import { somePage } from "../itemSlices";
import { setClassification } from "../filterSlices";
import { useEffect } from "react";

const FilterByClass = () => {
  const currentFilter = useSelector((state) => state.currentFilter);
  const { fullItem } = useSelector((state) => state.fullItem);
  const dispatch = useDispatch();
  const classification = currentFilter.classification;

  useEffect(() => {
    dispatch(filteringReducer({ fullItem, currentFilter }));
  }, [classification]);

  const handleClassChange = (event) => {
    dispatch(setClassification(event.target.value));
    dispatch(somePage(1)); // 필터링되면 1페이지로 이동
  };
  const classArr = [
    "전체",
    "전시/미술",
    "교육/체험",
    "뮤지컬/오페라",
    "클래식",
    "독주/독창회",
    "연극",
    "무용",
    "영화",
    "국악",
    "콘서트",
    "축제-문화/예술",
    "축제-전통/역사",
    "축제-시민화합",
    "축제-자연/경관",
    "축제-기타",
    "기타",
  ];
  return (
    <>
      <div className="classification-container">
        <label>행사분류</label>
        <select value={classification} onChange={(event) => handleClassChange(event)}>
          {classArr.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default FilterByClass;
