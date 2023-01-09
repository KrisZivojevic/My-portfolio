import styles from "./Header.module.css";
import profile from "../../assets/images/profile.jpg";
import Typewriting from "./Typewriting/Typewriting";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header__styled}>
      <div className={`${styles.header__wrapper} max-content`}>
        <div className={styles.header__info}>
          <span className="pt">Hi, my name is</span>
          <h1 className="pt">Kristina Živojević</h1>
          <h2 className="pt">
            <Typewriting />
          </h2>

          <p className="pt">
            A proactive, meticulous, devoted, and hard-working individual with
            training and experience in chemistry who is committed to seeing
            outcomes. Almost every industry has a high demand for
            digitalization, automation, and optimization, which drew my interest
            to learn new technologies, expand my skill set, explore programming,
            and ultimately make the risky decision to change my career.
          </p>
          <Button name="Contact me" />
        </div>
        <div>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.header__svg}>
            <path
              d="M54.6,-39.4C70.6,-23.4,83.5,-0.7,77.5,14.4C71.5,29.5,46.5,37.1,24.2,46.2C1.9,55.4,-17.6,66.3,-32.3,61.4C-47.1,56.5,-57,35.9,-62.7,13.5C-68.4,-8.8,-70,-32.9,-58.8,-47.9C-47.7,-62.8,-23.8,-68.6,-2.3,-66.8C19.2,-65,38.5,-55.5,54.6,-39.4Z"
              transform="translate(100 100)"
            />
          </svg>
          {/* <img
            className={styles.header__img}
            src={profile}
            alt="profile image"
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
