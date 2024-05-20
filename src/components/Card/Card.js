import styles from './Card.module.scss'

const Card = props => {
    return <li className={styles.Card}>{props.title}</li>
}

export default Card