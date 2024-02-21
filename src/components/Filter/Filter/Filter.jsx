import React, { useState } from 'react';
import css from './Filter.module.css';

import { MakeDropdown } from '../MakeDropdown/MakeDropdown';
import { useDispatch } from 'react-redux';
import { PriceDropdown } from '../PriceDropdown/PriceDropdown';
import { setFilterOption } from '../../../redux/catalog/filterSlice';
import { resetFilter } from '../../../redux/catalog/filterSlice';
import { clearState } from 'redux/pagedCatalog/catalogSlice';

export const Filter = ({ onClick, onClearClick }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [mileageRange, setMileageRange] = useState([0, 0]);

  const dispatch = useDispatch();

  const handleCarSelect = selectedCar => {
    if (selectedCar) {
      const adjust = [...selectedCar.toLowerCase()].slice(1);
      const adjustedString = adjust.join('');
      const selectedAdjusted = selectedCar[0].toUpperCase() + adjustedString;
      setSelectedOption(selectedAdjusted);
    }
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

  const handleClearFilters = () => {
    dispatch(resetFilter());
    setSelectedOption('');
    setPriceTo('');
    setMileageRange([0, 0]);

    dispatch(clearState());

    document.getElementById('leftInput').value = '';
    document.getElementById('rightInput').value = '';
    document.getElementById('makeInput').value = '';
    document.getElementById('priceInput').value = '';

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
        <MakeDropdown onSelectCar={handleCarSelect} />
      </label>
      <label className={css.label}>
        Price / 1 hour
        <PriceDropdown onSelectPrice={handlePriceSelect} />
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
