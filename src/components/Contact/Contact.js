import Button from '../Button/Button';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className='max-content'>
        <h2>Get in Touch</h2>
        <p>Hi! I am actively looking for new opportunities. If you are interested in collaboration, I would love to hear from you! Feel free to contact me by sending an email.</p>
        <a href="mailto:kristina.zivojevic@gmail.com" className={styles.contact__button}><Button name="Say hello" /></a>
      </div>
    </section>
  )
}

export default Contact;