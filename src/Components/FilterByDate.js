import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate } from "../filterSlices";
import { filteringReducer, somePage } from "../itemSlices";

const FilterByDate = () => {
  const currentFilter = useSelector((state) => state.currentFilter);
  const { fullItem } = useSelector((state) => state.fullItem);
  const dispatch = useDispatch();
  const selectedDate = currentFilter.selectedDate;
  useEffect(() => {
    dispatch(filteringReducer({ fullItem, currentFilter }));
  }, [currentFilter]);

  const handleDateChange = (event) => {
    dispatch(setSelectedDate(event.target.value));
    dispatch(somePage(1));
  };
  return (
    <>
      <div className="new-expense__control">
        <label>기간 설정</label>
        <input
          type="date"
          min="2022-3-01"
          max="2023-12-31"
          value={selectedDate}
          onChange={(e) => handleDateChange(e)}
        />
      </div>
    </>
  );
};

export default FilterByDate;
