import { HeaderInfo, HeaderStyled, HeaderWrapper } from "./Header.styled";
import profile from "../../assets/images/profile.jpg";
import Typewriting from "./Typewriting/Typewriting";
import Button from "../Button/Button";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapper className="max-content">
        <HeaderInfo>
          <span className="pt">Hi, my name is</span>
          <h1 className="pt">Kristina Živojević</h1>
          <h2 className="pt"><Typewriting /></h2>
          
          <p className="pt">
            A proactive, meticulous, devoted, and hard-working individual with
            training and experience in chemistry who is committed to seeing
            outcomes. Almost every industry has a high demand for digitalization,
            automation, and optimization, which drew my interest to learn new
            technologies, expand my skill set, explore programming, and ultimately
            make the risky decision to change my career.
          </p>
          <Button name="Contact me" isBig />
        </HeaderInfo>
        <div>
          <img src={profile} alt="profile image" />
        </div>
      </HeaderWrapper>
      
    </HeaderStyled>
  );
};

export default Header;
