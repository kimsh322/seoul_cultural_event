import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Components/Nav";
import MainPage from "./Pages/MainPage";
import Mine from "./Pages/Mine";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvent } from "./itemSlices";
import DetailItem from "./Pages/DetailItem";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvent());
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
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
