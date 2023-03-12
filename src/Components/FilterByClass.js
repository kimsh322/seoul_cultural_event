import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredByClass } from "../itemSlices";
import { somePage } from "../itemSlices";

const FilterByClass = () => {
  const [classification, setClassification] = useState("전체");
  const { fullItem } = useSelector((state) => state.fullItem);
  const itemArr = fullItem.culturalEventInfo.row;
  const dispatch = useDispatch();
  const handleClassChange = (event) => {
    setClassification(event.target.value);
    let filteredbyClassArr = itemArr.filter(
      (el) => el.CODENAME === event.target.value
    );
    if (event.target.value === "전체")
      filteredbyClassArr = fullItem.culturalEventInfo.row;
    dispatch(filteredByClass(filteredbyClassArr));
    dispatch(somePage(1));
  };

  return (
    <>
      <div className="classification-container">
        <label>행사분류</label>
        <select
          value={classification}
          onChange={(event) => handleClassChange(event)}
        >
          <option value="전체">전체</option>
          <option value="문화교양/강좌">문화교양/강좌</option>
          <option value="전시/미술">전시/미술</option>
          <option value="교육/체험">교육/체험</option>
          <option value="뮤지컬/오페라">뮤지컬/오페라</option>
          <option value="클래식">클래식</option>
          <option value="독주/독창회">독주/독창회</option>
          <option value="연극">연극</option>
          <option value="무용">무용</option>
          <option value="영화">영화</option>
          <option value="국악">국악</option>
          <option value="콘서트">콘서트</option>
          <option value="축제-문화/예술">축제-문화/예술</option>
          <option value="축제-전통/역사">축제-전통/역사</option>
          <option value="축제-시민화합">축제-시민화합</option>
          <option value="축제-자연/경관">축제-자연/경관</option>
          <option value="축제-기타">축제-기타</option>
          <option value="기타">기타</option>
        </select>
      </div>
    </>
  );
};

export default FilterByClass;
