import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteItem } from "../../components/FavoriteItem/FavoriteItem";
import { Modal } from "../../components/Modal/Modal";
import { clearFavoritesState } from "../../redux/favorites/favoritesSlice";
import { selectFavorites } from "../../redux/favorites/selectors";
import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const favorites = useSelector(selectFavorites);
  const openModal = (itemIndex) => {
    const selectedItem = favorites[itemIndex];
    setItem(selectedItem);
    setIsOpen(true);
    document.body.classList.add("body-scroll-lock");
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("body-scroll-lock");
  };
  const handleClearFavorite = () => {
    dispatch(clearFavoritesState());
  };

  return (
    <>
      <section className={css.container}>
        <button
          type="button"
          className={css.buttonLearnMore}
          onClick={handleClearFavorite}
        >
          Delete All Favorites
        </button>
        <ul className={css.layout}>
          {favorites.length > 0 &&
            favorites.map((item, index) => (
              <FavoriteItem
                car={item}
                index={index}
                openModal={openModal}
                key={item.id}
                id={item.id}
              />
            ))}
        </ul>
        {isOpen && <Modal onClose={closeModal} car={item} />}
      </section>
    </>
  );
};

export default FavoritePage;