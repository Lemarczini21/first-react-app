import Container from '../../components/Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <span className='fa fa-tasks'></span>
          <div>
            <ul className={styles.navList}>
              <li>
                <a href="href='http://localhost:3000/">Home</a>
              </li>
              <li>
                <a href='http://localhost:3000/favorite'>Favorite</a>
              </li>
              <li>
                <a href='http://localhost:3000/about'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
