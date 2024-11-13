import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Repository } from "../../features/repositorySlice";
import toast from "react-hot-toast";

interface CardProps {
  card: Repository;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [favoriteCards, setFavoriteCards] = useState<Repository[]>(() => {
    const savedFavorites = localStorage.getItem("favoriteCards");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addToFavorite = () => {
    const isFavorite = favoriteCards.some((fav) => fav.id === card.id);

    const updatedFavorites = isFavorite
      ? favoriteCards.filter((fav) => fav.id !== card.id)
      : [...favoriteCards, card];

    setFavoriteCards(updatedFavorites);

    localStorage.setItem("favoriteCards", JSON.stringify(updatedFavorites));

    toast.success(
      isFavorite
        ? "Repository deleted successfully"
        : "Repository added successfully"
    );
  };

  const isFavorite = favoriteCards.some((fav) => fav.id === card.id);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeader__star}>
          <FaStar size={18} fill="#FBC02D" />
          {card.stargazers_count}
        </div>
        <div className={styles.cardHeader__visibility_y}>{card.visibility}</div>
      </div>
      <div className={styles.cardBody}>
        <a href={card.html_url}>{card.name}</a>
        <button onClick={addToFavorite} className={styles.starRepoButton}>
          {isFavorite ? (
            <FaStar size={22} fill="#FBC02D" />
          ) : (
            <FaRegStar size={22} strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
