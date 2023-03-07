import { useState } from "react";

const FilterByDate = () => {
  const [enteredDate, setEnteredDate] = useState("");
  return (
    <>
      <div className="new-expense__control">
        <label>기간 설정</label>
        <input
          type="date"
          min="2022-3-01"
          max="2023-12-31"
          value={enteredDate}
          onChange={(e) => setEnteredDate(e.target.value)}
        />
      </div>
    </>
  );
};

export default FilterByDate;
