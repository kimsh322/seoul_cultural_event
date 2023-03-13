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
  return (
    <>
      <div className="classification-container">
        <label>지역구</label>
        <select value={location} onChange={(event) => handleLocation(event)}>
          <option value="전체">전체</option>
          <option value="강남구">강남구</option>
          <option value="강동구">강동구</option>
          <option value="강북구">강북구</option>
          <option value="강서구">강서구</option>
          <option value="관악구">관악구</option>
          <option value="광진구">광진구</option>
          <option value="구로구">구로구</option>
          <option value="금천구">금천구</option>
          <option value="노원구">노원구</option>
          <option value="도봉구">도봉구</option>
          <option value="동대문구">동대문구</option>
          <option value="동작구">동작구</option>
          <option value="마포구">마포구</option>
          <option value="서대문구">서대문구</option>
          <option value="서초구">서초구</option>
          <option value="성동구">성동구</option>
          <option value="성북구">성북구</option>
          <option value="송파구">송파구</option>
          <option value="양천구">양천구</option>
          <option value="영등포구">영등포구</option>
          <option value="용산구">용산구</option>
          <option value="은평구">은평구</option>
          <option value="종로구">종로구</option>
          <option value="중구">중구</option>
          <option value="중랑구">중랑구</option>
        </select>
      </div>
    </>
  );
};

export default FilterByLocation;
