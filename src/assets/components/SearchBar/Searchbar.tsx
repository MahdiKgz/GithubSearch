import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import {
  fetchRepositories,
  RepositoryState,
} from "../../features/repositorySlice";
import ShowBox from "../ShowBox/ShowBox";
import Loader from "../Loader/Loader";

function Seachbar() {
  const [userName, setUserName] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const { repositories, loading, error }: RepositoryState = useSelector(
    (state: RootState) => state.repositories
  );

  useEffect(() => {
    if (userName) {
      dispatch(fetchRepositories(userName));
    }
  }, [dispatch]);

  const clickHandler = async () => {
    if (userName) {
      await dispatch(fetchRepositories(userName));
    }
  };

  return (
    <React.Fragment>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="Search ..."
          className={styles.searchbarInput}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className={styles.searchButton} onClick={clickHandler}>
          <SlMagnifier size={24} strokeWidth={16} />
        </button>
      </div>
      <div className={styles.cardShowSection}>
        {loading ? <Loader /> : <ShowBox repositories={repositories} />}
        {error && <h1>Error occured</h1>}
      </div>
    </React.Fragment>
  );
}
export default Seachbar;
