import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';

const Column = props => {
    return (
        <div className={styles.column}>
            <h2 className={styles.title}><i className={`fa fa-${props.icon}`}></i>{props.title}</h2>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} />
        </div>
    );
};

export default Column;
