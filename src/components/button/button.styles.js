import styled from "styled-components";

export const BaseBtn = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  position: relative;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.spinner {

    pointer-events: none;

    &:after {
      content: '';
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 3px solid rgba(195, 195, 195, 0.6);
      border-radius: 50%;
      border-top-color: #636767;
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      animation: spin 1s ease-in-out infinite;
      -webkit-animation: spin 1s ease-in-out infinite;
  
      @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
    }

  }


`;



export const GoogleSignInBtn = styled(BaseBtn)`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;


export const InvertedBtn = styled(BaseBtn)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;



