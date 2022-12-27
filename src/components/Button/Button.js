import { BtnStyled } from "./Button.styled"

const Button = (props) => {
  return (
    <BtnStyled isBig={props.isBig}>{props.name}</BtnStyled>
  )
}

export default Button;