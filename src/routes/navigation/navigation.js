import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../context/user";

import { signOutUser } from "../../utils/firebase";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles';

import Cart from "../../components/cart/cart";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { NavBar, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";


const Navigation = () => {

   const {currentUser} = useContext(UserContext);

    return <Fragment>
      <NavBar>
        <LogoContainer to='/'>
            <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? 
            (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : 
            (
              <NavLink to="/auth">
                SIGN IN
              </NavLink>
            )
          }
           <Cart /> 
        </NavLinksContainer>
        <CartDropdown />
      </NavBar>
      <Outlet/>
    </Fragment>
};


  export default Navigation;