import { useState } from "react";
import css from "./PriceDropdown.module.css";

export const PriceDropdown = ({ onSelectPrice, option, onOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedPrice, setSelectedPrice] = useState("");
  const prices = createPrices(0, 200, 10);

  const handleChange = (e) => {
    // setSelectedPrice(e.target.value);
    onSelectPrice(e.target.value);
    onOption(e.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.wrapper} onClick={toggleDropdown}>
      <span className={css.backspan}>
        <img
          src={require("../../../images/arrow-down.png")}
          alt="arrow-down"
          className={css.arrowDown}
        />
      </span>
      <select
        value={option}
        onChange={handleChange}
        className={`${css.select} ${isOpen ? css.open : ""}`}
      >
        <option value="" disabled hidden className={css.defaultOption}>
          {option}
        </option>
        {prices.map((price) => (
          <option key={price} value={price} className={css.option}>
            {price}
          </option>
        ))}
      </select>
    </div>
  );
};

function createPrices(start, end, step) {
  const array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}
