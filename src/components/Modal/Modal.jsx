import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { ReactComponent as CloseIcon } from "../../images/cross.svg";

const modalRoot = document.getElementById("modal-root");

export function Modal({ onClose, car }) {
  useEffect(() => {
    if (!modalRoot) {
      throw new Error("Cannot find modal root element");
    }
  }, []);

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

  function joinFeatures(array1, array2) {
    if (car) {
      const accessoriesAndFunctionalities = car ? array1.concat(array2) : [];

      const newArray = accessoriesAndFunctionalities.map(
        (item) => ` ${item} |`
      );

      return newArray;
    }

    return;
  }

  const rentalConditions = () => {
    if (car) {
      const rentalConditionsArray = car ? car.rentalConditions.split("\n") : [];

      const ageSplit = rentalConditionsArray[0].split(" ");
      const age = ageSplit[ageSplit.length - 1];

      return [age, rentalConditionsArray[1], rentalConditionsArray[2]];
    }
    return;
  };

  const arrayAddress = splitAddress(car);

  const backdropRef = useRef(null);

  const handleBackdropClick = (event) => {
    if (event && event.target === backdropRef.current) {
      onClose(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleBackdropClick);
    document.body.classList.add("body-scroll-lock");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleBackdropClick);
      document.body.classList.remove("body-scroll-lock");
    };
  }, [onClose]);

  return createPortal(
    car && (
      <div
        className={css.backdrop}
        ref={backdropRef}
        onClick={handleBackdropClick}
      >
        <div className={css.modal}>
          <div className={css.crossWrapper}>
            <button type="button" onClick={onClose} className={css.cross}>
              <CloseIcon />
            </button>
          </div>
          <div className={css.contentWrapper}>
            <img src={car.img} alt={car.make} className={css.image} />
            <h1 className={css.title}>
              {car.make} <span className={css.titlePeace}>{car.model}</span>,{" "}
              {car.year}
            </h1>
            <p className={css.info}>
              {arrayAddress[0]} | {arrayAddress[1]} | Id: {car.id} | Year:{" "}
              {car.year} | Type: {car.type} | Fuel Consumption:{" "}
              {car.fuelConsumption} | Engine Size: {car.engineSize}
            </p>
            <p className={css.description}>{car.description}</p>
            <h4 className={css.accessor}>Accessories and functionalities</h4>
            <p className={css.info}>
              {joinFeatures(car.accessories, car.functionalities)}
            </p>
            <h4>Rental Conditions</h4>
            <div>
              <span>
                Minimum age: <span>{rentalConditions()[0]}</span>{" "}
              </span>
              <span>{rentalConditions()[1]}</span>
              <span>{rentalConditions()[2]}</span>
              <span>
                Mileage:{" "}
                {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <a href="tel:+380730000000">Rental Car</a>
          </div>
        </div>
      </div>
    ),
    modalRoot
  );
}
