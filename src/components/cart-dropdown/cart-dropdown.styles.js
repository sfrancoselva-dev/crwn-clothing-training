import styled from "styled-components";
import Button from "../button/button";


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 270px;
    height: 380px;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    display: none;

    &.open {
      display: flex;
    }
`;



export const CartListContainer = styled.div`
      height: 90%;
      overflow: auto;
`;

export const BtnContainer = styled(Button)`
      margin-top: auto;
`;


export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;