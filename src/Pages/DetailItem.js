import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;

  #main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 90%;
    background-color: yellow;
  }
  #img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 40%;
    margin: 1%;
  }
  img {
    width: 60%;
    height: 80%;
  }
  #contents-container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 60%;
  }
  .contents {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

const DetailItem = () => {
  const { fullItem, loading } = useSelector((state) => state.fullItem);
  const idx = useLocation().state;
  if (loading === "succeeded") {
    const itemObj = fullItem.culturalEventInfo.row[+idx];
    return (
      <MainDiv>
        <div id="main-container">
          <div id="img-container">
            <img src={itemObj.MAIN_IMG} alt="poster" />
          </div>
          <div id="contents-container">
            <div className="contents">분류 : {itemObj.CODENAME}</div>
            <div className="contents">타이틀 : {itemObj.TITLE}</div>
            <div className="contents">행사장소 : {itemObj.PLACE}</div>
            <div className="contents">행사날짜 : {itemObj.DATE}</div>
            <div className="contents">신청일 : {itemObj.RGSTDATE}</div>
            <div className="contents">가격 : {itemObj.USE_FEE}</div>
            <div className="contents">
              <a
                href={itemObj.ORG_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                자세히보러가기
              </a>
            </div>
          </div>
        </div>
      </MainDiv>
    );
  } else {
    return <div> 로딩중입니다!</div>;
  }
};

export default DetailItem;
