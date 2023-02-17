import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className='fa fa-tasks'></span>
          <div>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/favorite'
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : undefined
                  }
                >
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : undefined
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
