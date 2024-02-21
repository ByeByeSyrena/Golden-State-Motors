import { Each } from 'components/ServiceComponents/Each';
import { useEffect, useRef, useState } from 'react';
import css from './PriceDropdown.module.css';

export const PriceDropdown = ({ onSelectPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const prices = createPrices(0, 200, 10);

  const refPriceInput = useRef(null);
  const refDropdownInput = useRef(null);

  const price = document.getElementById('priceInput');

  const handleChange = e => {
    onSelectPrice(e.target.value);
  };

  const handleClick = e => {
    if (!isOpen) {
      refPriceInput.current?.focus();
    }
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (
      refDropdownInput.current &&
      !refDropdownInput.current.contains(event.target)
    ) {
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
    const selectedPrice = e.target.textContent;
    onSelectPrice(selectedPrice);
    price.value = e.target.textContent;
  };

  return (
    <>
      <div className={css.wrapper}>
        <input
          id="priceInput"
          ref={refPriceInput}
          onClick={handleClick}
          onChange={handleChange}
          className={`${css.backspan}`}
        />
        <button onClick={handleClick} className={css.arrowDown}></button>
        <img
          src={require('../../../images/arrow-down.png')}
          alt="arrow-down"
          className={css.arrowDown}
        />
        <span className={css.to}>To $</span>
      </div>
      <div
        className={`${css.optionWrapper} ${isOpen ? css.open : ''}`}
        ref={refDropdownInput}
      >
        <div className={css.scrollWrapper}>
          <Each
            of={prices}
            render={(price, index) => (
              <button
                type="button"
                key={price}
                className={css.option}
                onClick={handleOptionClick}
              >
                {price}
              </button>
            )}
          />
        </div>
      </div>
    </>
  );
};

function createPrices(start, end, step) {
  const array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}
