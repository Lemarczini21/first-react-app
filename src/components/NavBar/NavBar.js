import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className='fa fa-tasks'></span>
          <div>
            <ul className={styles.navList}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/favorite'>Favorite</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
