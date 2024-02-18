import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFavorites } from '../../redux/favorites/favoritesSlice';
import css from './FavoriteItem.module.css';

export const FavoriteItem = ({ car, index, openModal, id }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(deleteFavorites(id));

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
        Learn More
      </button>
      <button
        type="button"
        className={css.buttonLearnMore}
        onClick={handleRemove}
      >
        Delete
      </button>
    </li>
  );
};
