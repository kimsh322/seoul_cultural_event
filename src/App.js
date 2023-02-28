import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Components/Nav";
import MainPage from "./Pages/MainPage";
import Mine from "./Pages/Mine";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvent } from "./itemSlices";

function App() {
  const item = useSelector((state) => state.item.value);
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
        <div>{item ? console.log(item) : ""}</div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Mine" element={<Mine />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
