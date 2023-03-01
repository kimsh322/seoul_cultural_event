import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Components/Nav";
import MainPage from "./Pages/MainPage";
import Mine from "./Pages/Mine";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvent } from "./itemSlices";
import DetailItem from "./Pages/DetailItem";

function App() {
  const { value: fullItem } = useSelector((state) => state.fullItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvent());
  }, []);
  // dispatch(fetchEvent()); // 이거왜 무한루프돌지?
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <div>{fullItem ? console.log(fullItem) : ""}</div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Mine" element={<Mine />} />
          <Route path="/DetailItem" element={<DetailItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
