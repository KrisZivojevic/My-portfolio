import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styles from "../Projects/Project.module.css";
import { colors } from "../../constants";
import { useState } from "react";

const Icon = (props) => {
  const [isHover, setIsHover] = useState(false);

  let faIcon = null;
  if (props.type === "github") {
    faIcon = <FaGithub color={isHover ? colors.lemon : colors.mint} className={styles.icon} />;
  } else {
    faIcon = <FiExternalLink color={isHover ? colors.lemon : colors.mint} className={styles.icon} />;
  }
  return (
    <a
      href={props.link}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {faIcon}
    </a>
  );
};

export default Icon;
