import React from "react";
import { useDispatch } from "react-redux";
import { deleteFavorites } from "../../redux/favorites/favoritesSlice";
import css from "./FavoriteItem.module.css";

export const FavoriteItem = ({ car, index, openModal, id }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(deleteFavorites(id));

  return (
    <li key={car.id} className={css.wrapper}>
      <div>
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
            {car.city} | {car.country} | {car.rentalCompany} | {car.type} |{" "}
            {car.model} | {car.mileage} |{" "}
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
