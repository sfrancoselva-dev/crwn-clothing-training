import {BaseBtn, InvertedBtn, GoogleSignInBtn} from './button.styles';


export const BTN_TYPES = {
  base: 'base',
  googleSignIn: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (btnType = BTN_TYPES.base) => {
    return {
        [BTN_TYPES.base] : BaseBtn,
        [BTN_TYPES.googleSignIn]: GoogleSignInBtn,
        [BTN_TYPES.inverted]: InvertedBtn
    }[btnType]
}


const Button = ({children, btnType, loading, ...otherProps}) => {

  const CustomBtn = getButton(btnType);
 
   return <CustomBtn {...otherProps} className={loading? 'spinner' : null}>{children}</CustomBtn>
}

export default Button;