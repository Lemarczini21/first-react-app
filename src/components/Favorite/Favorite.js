import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector((state) => getFavoriteCards(state));
  return (
    <div className={styles.wrapper}>
      <PageTitle>FAVORITE</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
              cardId={card.id}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
