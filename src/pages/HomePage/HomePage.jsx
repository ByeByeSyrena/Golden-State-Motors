import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../../components/Filter/Filter/Filter';
import { LoadMoreButton } from '../../components/LoadMoreButton/LoadMoreButton';
import { Modal } from '../../components/Modal/Modal';
import { selectItems, selectPage } from '../../redux/pagedCatalog/selectors';
import { getCars } from '../../redux/pagedCatalog/operations';
import css from './HomePage.module.css';
import { addPage, clearState } from '../../redux/pagedCatalog/catalogSlice';
import {
  selectFilteredCars,
  selectOverallIsLoading,
} from '../../redux/catalog/selectors';
import { getAllCars } from '../../redux/catalog/operations';
import { InventoryItem } from '../../components/InventoryItem/InventoryItem';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState('');

  const [shouldRenderArray1, setArray1] = useState(true);

  const cars = useSelector(selectItems);
  const page = useSelector(selectPage);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectOverallIsLoading);

  const openModal = itemIndex => {
    const selectedItem = cars[itemIndex];
    setItem(selectedItem);
    setIsOpen(true);
    document.body.classList.add('body-scroll-lock');
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('body-scroll-lock');
  };

  const arrayToRender = shouldRenderArray1 ? cars : filteredCars;

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCars({ page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(addPage());
  };

  const handleFilter = () => {
    dispatch(getAllCars());
    setArray1(false);
  };

  const handleClearFilter = () => {
    setArray1(true);
    dispatch(clearState());
    dispatch(getCars({ page }));
  };

  return (
    <>
      <section className={css.container}>
        <Filter onClick={handleFilter} onClearClick={handleClearFilter} />
        <ul className={css.layout}>
          {arrayToRender.map((item, index) => (
            <InventoryItem
              car={item}
              index={index}
              openModal={openModal}
              key={item.id}
              id={item.id}
            />
          ))}
        </ul>

        {!isLoading && (
          <LoadMoreButton text="Load more" onClick={handleLoadMore} />
        )}
      </section>

      {isOpen && page < 3 && <Modal onClose={closeModal} car={item} />}
    </>
  );
};

export default HomePage;
