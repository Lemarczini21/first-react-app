import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = (props) => {
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(toggleFavorite(props.cardId));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <span onClick={handleCLick}>
        <i
          className={clsx(
            'fa fa-star-o',
            props.isFavorite ? styles.isActive : undefined
          )}
        ></i>
      </span>
    </li>
  );
};

export default Card;
