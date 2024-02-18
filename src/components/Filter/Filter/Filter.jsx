import React, { useState } from 'react';
import css from './Filter.module.css';

import { MakeDropdown } from '../MakeDropdown/MakeDropdown';
import { useDispatch } from 'react-redux';
import { PriceDropdown } from '../PriceDropdown/PriceDropdown';
import { setFilterOption } from '../../../redux/catalog/filterSlice';
import { resetFilter } from '../../../redux/catalog/filterSlice';

export const Filter = ({ onClick, onClearClick }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [mileageRange, setMileageRange] = useState([0, 0]);

  const [placeholder, setPlaceholder] = useState('Enter the text');

  const [toDoll, setPriceOption] = useState('To $');

  const dispatch = useDispatch();

  const handleCarSelect = selectedCar => {
    setSelectedOption(selectedCar);
  };

  const handlePriceSelect = selectedPrice => {
    setPriceTo(selectedPrice);
  };

  const handleMileageChange = (index, value) => {
    setMileageRange(prevRange => {
      const newRange = [...prevRange];
      newRange[index] = Number(value);
      return newRange;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      setFilterOption({
        make: selectedOption,
        mileage: mileageRange,
        rentalPrice: priceTo,
      })
    );
  };

  const handlePlaceholder = car => {
    setPlaceholder(car);
  };

  const handlePriceOption = price => {
    setPriceOption(price);
  };

  const handleClearFilters = () => {
    dispatch(resetFilter());
    setSelectedOption('');
    setPriceTo('');
    setMileageRange([0, 0]);
    handlePlaceholder('Enter the text');
    setPriceOption('To $');

    document.getElementById('leftInput').value = '';
    document.getElementById('rightInput').value = '';

    onClearClick();
  };

  return (
    <form id="filterForm" onSubmit={handleSubmit} className={css.filterForm}>
      <button
        type="button"
        onClick={handleClearFilters}
        className={css.buttonStyle}
      >
        <span>Clear Filters</span>
      </button>
      <label className={css.label}>
        Car brand
        <MakeDropdown
          onSelectCar={handleCarSelect}
          onPlaceholder={handlePlaceholder}
          placeholder={placeholder}
        />
      </label>
      <label className={css.label}>
        Price / 1 hour
        <PriceDropdown
          onSelectPrice={handlePriceSelect}
          toDoll={toDoll}
          onOption={handlePriceOption}
        />
      </label>
      <div className={`${css.label}`}>
        <span className={`${css.test}`}>Car mileage / km</span>
        <div className={`${css.labelLayout}`}>
          <span className={css.test2}>From</span>
          <span className={css.test3}>To</span>
          <input
            id="leftInput"
            className={css.leftInput}
            min="0"
            type="number"
            onChange={e => handleMileageChange(0, e.target.value)}
          />
          <input
            id="rightInput"
            className={css.rightInput}
            min="0"
            type="number"
            onChange={e => handleMileageChange(1, e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className={css.buttonStyle} onClick={onClick}>
        Search
      </button>
    </form>
  );
};
