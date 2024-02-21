import { useEffect, useRef, useState } from 'react';
import data from '../../../data/makes.json';
import css from './MakeDropdown.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Each } from 'components/ServiceComponents/Each';

export const MakeDropdown = ({ onSelectCar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredDropdown, setFilteredDropdown] = useState([]);

  const make = document.getElementById('makeInput');

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = e => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    onSelectCar(inputValue);
    const filteredCars = data.filter(
      car =>
        inputValue.length &&
        car.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredDropdown(filteredCars);
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
    <div className={css.wrapper}>
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
      <div
        ref={dropdownRef}
        className={`${css.optionWrapper} ${isOpen ? css.open : ''}`}
      >
        <div className={css.scrollWrapper}>
          {search ? (
            <Each
              of={filteredDropdown}
              render={(car, index) => (
                <button
                  key={uuidv4()}
                  className={css.option}
                  onClick={handleOptionClick}
                >
                  {car}
                </button>
              )}
            />
          ) : (
            <Each
              of={data}
              render={(car, index) => (
                <button
                  key={uuidv4()}
                  className={css.option}
                  onClick={handleOptionClick}
                >
                  {car}
                </button>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};
