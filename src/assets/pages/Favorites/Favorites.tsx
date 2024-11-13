import React, { useEffect, useState } from 'react';
import ShowBox from '../../components/ShowBox/ShowBox';
import { Repository } from '../../features/repositorySlice';
import styles from "./Favorites.module.css";

const Favorites: React.FC = () => {
  
  const [favoriteCards, setFavoriteCards] = useState<Repository[]>([]);

  // بارگذاری کارت‌های مورد علاقه از localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteCards");
    if (savedFavorites) {
      setFavoriteCards(JSON.parse(savedFavorites));
    }
  }, []);

  // نمایش "Nothing to show" اگر کارت‌ها خالی باشند
  if (favoriteCards.length === 0) {
    return (
      <div className={styles.noFavorites}>
        <h1>Nothing to show</h1>
      </div>
    );
  }

  return (
    <div className={styles.FavoritePage}>
      <h1 className={styles.favTitle}>Your Favorite Repositories</h1>
      <ShowBox repositories={favoriteCards} />
    </div>
  );
};

export default Favorites;
