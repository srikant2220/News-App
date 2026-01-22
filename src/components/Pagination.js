import React from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ page, setPage }) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <span> Page {page} </span>

      <button
        className={styles.button}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
