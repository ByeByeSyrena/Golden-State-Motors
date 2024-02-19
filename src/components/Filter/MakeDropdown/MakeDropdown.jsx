import { useEffect, useRef, useState } from 'react';
import data from '../../../data/makes.json';
import css from './MakeDropdown.module.css';
import { v4 as uuidv4 } from 'uuid';

export const MakeDropdown = ({ onSelectCar, onPlaceholder, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = e => setSearch(e.target.value);
  const filteredCars = data.filter(
    car => search.length && car.toLowerCase().includes(search.toLowerCase())
  );

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
    setSearch('');
    onSelectCar(selectedCar);
    onPlaceholder(e.target.textContent);
  };

  return (
    <div className={css.wrapper} ref={dropdownRef}>
      <div className={css.makeDiv}>
        <input
          ref={inputRef}
          onChange={handleChange}
          onClick={handleClick}
          placeholder={placeholder}
          type="text"
          className={css.makeInput}
          readOnly
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
          ? filteredCars.map(car => (
              <button key={uuidv4()} className={css.option}>
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
