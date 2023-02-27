import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Components/Nav";
import MainPage from "./Pages/MainPage";
import Mine from "./Pages/Mine";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Mine" element={<Mine />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
