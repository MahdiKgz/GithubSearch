import React from "react";
import Seachbar from "../../components/SearchBar/Searchbar";
import styles from "./MainPage.module.css";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";
function MainPage() {
  return (
    <React.Fragment>
      <section className={styles.MainPage}>
        <Seachbar />
        <Link to="/favorites" className={styles.favotiresLink}>
          <FaStar size={22} fill="#FBC02D" />
        </Link>
      </section>
    </React.Fragment>
  );
}

export default MainPage;
