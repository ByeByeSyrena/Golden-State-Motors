import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteItem } from '../../components/FavoriteItem/FavoriteItem';
import { Modal } from '../../components/Modal/Modal';
import { clearFavoritesState } from '../../redux/favorites/favoritesSlice';
import { selectFavorites } from '../../redux/favorites/selectors';
import css from './FavoritePage.module.css';
import { selectOverallIsLoading } from '../../redux/catalog/selectors';
import { Loader } from 'components/Loader/Loader';
import { Show } from 'components/ServiceComponents/Show';
import { Each } from 'components/ServiceComponents/Each';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState('');

  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectOverallIsLoading);

  const openModal = itemIndex => {
    const selectedItem = favorites[itemIndex];
    setItem(selectedItem);
    setIsOpen(true);
    document.body.classList.add('body-scroll-lock');
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('body-scroll-lock');
  };
  const handleClearFavorite = () => {
    dispatch(clearFavoritesState());
  };

  return (
    <>
      <section className={css.container}>
        <Show>
          <Show.When isTrue={favorites.length > 0}>
            <button
              type="button"
              className={css.buttonLearnMore}
              onClick={handleClearFavorite}
            >
              Delete All Favorites
            </button>
            <ul className={css.layout}>
              <Each
                of={favorites}
                render={(item, index) => (
                  <FavoriteItem
                    car={item}
                    index={index}
                    openModal={openModal}
                    key={item.id}
                    id={item.id}
                  />
                )}
              />
            </ul>
          </Show.When>
          <Show.Else>
            <div className={css.imgWrapper}>
              <img
                className={css.noItems}
                src={require('../../images/Screenshot_4.png')}
                alt="No items"
              />
            </div>
          </Show.Else>
          <Show.When isTrue={isLoading}>
            <Loader />
          </Show.When>
        </Show>
        <Show>
          <Show.When isTrue={isOpen}>
            <Show.When isTrue={isOpen}>
              <Modal onClose={closeModal} car={item} />
            </Show.When>
          </Show.When>
        </Show>
      </section>
    </>
  );
};

export default FavoritePage;
