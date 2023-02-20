import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';

const ListForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span className={styles.margin}>Title:</span>
      <TextInput
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className={styles.margin}>Description:</span>
      <TextInput
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
