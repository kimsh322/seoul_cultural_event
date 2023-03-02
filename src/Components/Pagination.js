function Pagination({ total, limitDiscuss, page, setPage }) {
  const maxPages = Math.ceil(total / limitDiscuss);
  const pageButtons = Array(maxPages).fill();
  return (
    <>
      <button
        className="button prev"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        {"<-"}
      </button>
      {pageButtons.map((_, i) => {
        return (
          <button
            className={`button ${page - 1 === i ? "active" : ""}`} // 현재 페이지 활성화
            key={i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
      <button
        className="button next"
        onClick={() => setPage(page + 1)}
        disabled={page === maxPages}
      >
        {"->"}
      </button>
    </>
  );
}

export default Pagination;
