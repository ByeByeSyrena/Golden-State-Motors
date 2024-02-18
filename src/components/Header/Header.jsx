import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink to="/welcome" activeClassName={css.activeLink}>
          <img
            src={require('../../images/icons8-car-50.png')}
            alt="logo"
            className={css.logo}
          />
        </NavLink>
        <nav className={css.nav}>
          <NavLink
            to="/welcome"
            className={css.link}
            activeClassName={css.activeLink}
          >
            About us
          </NavLink>
          <NavLink
            to="/home"
            className={css.link}
            activeClassName={css.activeLink}
          >
            Catalog
          </NavLink>
          <NavLink
            to="/favorites"
            className={css.link}
            activeClassName={css.activeLink}
          >
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
