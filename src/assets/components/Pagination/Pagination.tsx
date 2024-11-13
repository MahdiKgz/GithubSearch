// Pagination.tsx
import React from 'react';
import styles from "./Pagination.module.css";

interface PaginationProps {
  count: number;         
  currentPage: number;   
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ count, currentPage, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= count; i++) {
    pages.push(
      <button
        key={i}
        className={`${styles.pageButton} ${i === currentPage ? styles.active : ''}`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.paginationContainer}>
      {pages}
    </div>
  );
};

export default Pagination;
