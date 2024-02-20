import { useEffect, useRef, useState } from 'react';
import data from '../../../data/makes.json';
import css from './MakeDropdown.module.css';
import { v4 as uuidv4 } from 'uuid';

export const MakeDropdown = ({ onSelectCar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredDropdown, setfiltereDropdown] = useState([]);

  const make = document.getElementById('makeInput');

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = e => {
    setSearch(e.target.value);
    onSelectCar(e.target.value);
    const filteredCars = data.filter(
      car => search.length && car.toLowerCase().includes(search.toLowerCase())
    );
    setfiltereDropdown(filteredCars);
  };

  const handleClick = () => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = e => {
    const selectedCar = e.target.textContent;
    onSelectCar(selectedCar);
    make.value = e.target.textContent;
    setSearch('');
  };

  return (
    <div className={css.wrapper} ref={dropdownRef}>
      <div className={css.makeDiv}>
        <input
          id="makeInput"
          ref={inputRef}
          onChange={handleChange}
          onClick={handleClick}
          placeholder="Enter the text"
          type="text"
          className={css.makeInput}
        />
        <button type="button" onClick={handleClick} className={css.arrowDown}>
          <img
            src={require('../../../images/arrow-down.png')}
            alt="arrow-down"
          />
        </button>
      </div>
      <div className={`${css.optionWrapper} ${isOpen ? css.open : ''}`}>
        {search
          ? filteredDropdown.map(car => (
              <button
                key={uuidv4()}
                className={css.option}
                onClick={handleOptionClick}
              >
                {car}
              </button>
            ))
          : data.map(car => (
              <button
                key={uuidv4()}
                className={css.option}
                onClick={handleOptionClick}
              >
                {car}
              </button>
            ))}
      </div>
    </div>
  );
};
