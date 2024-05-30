import { useDispatch } from 'react-redux';
import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ 
      type: 'ADD_COLUMN', 
      payload: { title, icon } 
    });
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div className={styles.formField}>
        <label>Title:</label>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.formField}>
        <label>Icon:</label>
        <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      </div>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
