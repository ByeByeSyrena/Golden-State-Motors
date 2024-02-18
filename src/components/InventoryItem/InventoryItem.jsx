import React from "react";
import css from "./InventoryItem.module.css";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../redux/favorites/favoritesSlice";
import { ReactComponent as Star } from "../../images/star-alt-4-svgrepo-com.svg";

export const InventoryItem = ({ car, index, openModal }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorites(car));
  };

  function splitAddress() {
    let country;
    let city;

    if (car) {
      const address = car.address.split(" ");
      country = address[address.length - 1];
      city = address[address.length - 2];
      return [city, country];
    }

    return [];
  }

  const arrayAddress = splitAddress(car);

  return (
    <li key={car.id} className={css.wrapper}>
      <div>
        <button
          type="button"
          onClick={handleAddFavorite}
          className={css.starButton}
        >
          <Star className={css.star} />
        </button>
        {car.img ? (
          <img
            src={car.img}
            alt={car.make}
            className={css.image}
            style={{ objectFit: "cover" }}
          />
        ) : (
          "No image"
        )}
        <div className={css.modelPrice}>
          <p>
            {car.make} <span className={css.modelPricePart}>{car.model}</span>,{" "}
            {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </div>
        <div className={css.modelFeatures}>
          <p>
            {arrayAddress[0]} | {arrayAddress[1]} | {car.rentalCompany} |{" "}
            {car.type} | {car.model} | {car.mileage} |{" "}
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
