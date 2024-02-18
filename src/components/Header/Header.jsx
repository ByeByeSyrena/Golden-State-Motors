import css from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to="/welcome">
          <img
            src={require('../../images/icons8-car-50.png')}
            alt="logo"
            className={css.logo}
          />
        </Link>
        <nav className={css.nav}>
          <Link to="/welcome" className={css.link}>
            About us
          </Link>
          <Link to="/home" className={css.link}>
            Catalog
          </Link>
          <Link to="/favorites" className={css.link}>
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};
