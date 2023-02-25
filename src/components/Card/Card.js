import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(toggleFavorite(props.cardId));
  };
  const handleTrash = () => {
    dispatch(removeCard(props.cardId));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.wrapper}>
        <span onClick={handleCLick}>
          <i
            className={clsx(
              'fa fa-star-o',
              props.isFavorite ? styles.isActive : undefined
            )}
          ></i>
        </span>
        <span onClick={handleTrash}>
          <i className='fa fa-trash'></i>
        </span>
      </div>
    </li>
  );
};

export default Card;
