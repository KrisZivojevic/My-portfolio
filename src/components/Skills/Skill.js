import styles from './Skill.module.css';


const Skill = (props) => {

  return (
    <li className={styles.skill__item}>
      {props.name}
    </li>
  )
}

export default Skill;