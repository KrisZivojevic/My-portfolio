import { ContactStyled } from "./Contact.styled";

const Contact = () => {
  return (
    <ContactStyled>
      <div>
        <label>Username</label>
        <input />
      </div>
      <div>
        <label>Message</label>
        <input />
      </div>
      <button type="submit">Send</button>
    </ContactStyled>
  )
}

export default Contact;