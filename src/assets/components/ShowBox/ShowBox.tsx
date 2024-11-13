import React, { useState } from "react";
import styles from "./ShowBox.module.css";
import { Repository } from "../../features/repositorySlice";
import Card from "../Card/Card";
import { usePaginate } from "../../helpers/utils";
import Pagination from "../Pagination/Pagination";

interface ShowBoxProps {
  repositories: Repository[];
}

const ShowBox: React.FC<ShowBoxProps> = ({ repositories }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagintedRepos, count] = usePaginate(repositories, 8, currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <React.Fragment>
      <div className={styles.cardWrapper}>
        {pagintedRepos.map((repo) => (
          <Card key={repo.id} card={repo} />
        ))}
      </div>
      <Pagination
        count={count}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

export default ShowBox;
