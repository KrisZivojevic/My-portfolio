import { NavStyled, List, NavWrapper } from "./Navigation.styled";
import Button from "../Button/Button";

const Navigation = () => {
  return (
    <NavWrapper>
      <NavStyled className="max-content">
        <div className="pl">K</div>
        <List className="pr">
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><Button name="Resume" /></li>
        </List>
      </NavStyled>
    </NavWrapper>
  )
};

export default Navigation;