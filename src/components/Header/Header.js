import styles from "./Header.module.css";
import profile from "../../assets/images/header_photo.png";
import Typewriting from "./Typewriting/Typewriting";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header id="home" className={styles.header__styled}>
      <div className={`${styles.header__wrapper} max-content`}>
        <div className={styles.header__info}>
          <span className="pt">Hi, my name is</span>
          <h1 className="pt">Kristina Živojević.</h1>
          <h2 className="pt">
            <Typewriting className={styles.typewriting} />
          </h2>
          <Button name="Contact me" />
        </div>
        <div>
          <img
            className={styles.header__img}
            src={profile}
            alt="profile image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
