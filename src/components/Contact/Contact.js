import styles from './Contact.module.css';

const Contact = () => {
  return (
    <form className={styles.form}>
      <div>
        <label>Username</label>
        <input />
      </div>
      <div>
        <label>Message</label>
        <input />
      </div>
      <button type="submit">Send</button>
    </form>
  )
}

export default Contact;