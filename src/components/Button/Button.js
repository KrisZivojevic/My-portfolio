import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${styles.button} ${props.style}`}>{props.name}</button>
  )
}

export default Button;