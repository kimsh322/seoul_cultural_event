import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../filterSlices";
import { useEffect } from "react";
import { filteringReducer, somePage } from "../itemSlices";

const FilterByLocation = () => {
  const currentFilter = useSelector((state) => state.currentFilter);
  const { fullItem } = useSelector((state) => state.fullItem);
  const dispatch = useDispatch();
  const location = currentFilter.location;

  useEffect(() => {
    dispatch(filteringReducer({ fullItem, currentFilter }));
  }, [location]);

  const handleLocation = (event) => {
    dispatch(setLocation(event.target.value));
    dispatch(somePage(1)); // 필터링되면 1페이지로 이동
  };
  const guNameArr = [
    "전체",
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];
  return (
    <>
      <div className="classification-container">
        <label>지역구</label>
        <select value={location} onChange={(event) => handleLocation(event)}>
          {guNameArr.map((el) => {
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

export default FilterByLocation;
