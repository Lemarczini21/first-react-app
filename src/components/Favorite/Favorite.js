import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <p className={styles.subtitle}>Lorem Ipsum</p>
    </div>
  );
};

export default Favorite;
