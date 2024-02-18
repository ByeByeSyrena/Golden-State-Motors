import React, { useState } from 'react';
import css from './InventoryItem.module.css';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../redux/favorites/favoritesSlice';
import { ReactComponent as Star } from '../../images/star-alt-4-svgrepo-com.svg';

export const InventoryItem = ({ car, index, openModal }) => {
  const dispatch = useDispatch();

  const [isSelected, setSelected] = useState(false);

  const handleAddFavorite = () => {
    dispatch(addFavorites(car));
  };

  function splitAddress() {
    let country;
    let city;

    if (car) {
      const address = car.address.split(' ');
      country = address[address.length - 1];
      city = address[address.length - 2].replace(/,/g, '');
      return [city, country];
    }

    return [];
  }

  const arrayAddress = splitAddress(car);

  return (
    <li key={car.id} className={css.wrapper}>
      <div>
        <div className={css.starWrapper}>
          <button
            type="button"
            onClick={handleAddFavorite}
            className={css.starButton}
          >
            <Star className={css.star} />
          </button>
        </div>
        {car.img ? (
          <img
            src={car.img}
            alt={car.make}
            className={css.image}
            style={{ objectFit: 'cover' }}
          />
        ) : (
          'No image'
        )}
        <div className={css.modelPrice}>
          <p>
            {car.make} <span className={css.modelPricePart}>{car.model}</span>,{' '}
            {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </div>
        <div className={css.modelFeatures}>
          <p className={css.genInfo}>{arrayAddress[0]}</p>
          <span className={css.line}></span>
          <p className={css.genInfo}>{arrayAddress[1]}</p>
          <span className={css.line}></span>
          <p className={css.genInfo}>{car.rentalCompany}</p>
          <span className={css.line}></span>
          <p className={css.genInfo}>{car.type}</p>
          <span className={css.line}></span>
          <p className={css.genInfo}>{car.model}</p>
          <span className={css.line}></span>
          <p className={css.genInfo}>
            {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
          <span className={css.line}></span>
          <p className={css.genInfo}>
            {car.accessories[car.accessories.length - 1]}
          </p>
        </div>
      </div>
      <button
        type="button"
        className={css.buttonLearnMore}
        onClick={() => openModal(index)}
      >
        Learn more
      </button>
    </li>
  );
};
