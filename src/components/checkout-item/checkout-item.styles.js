import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;


export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;


export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

export const ProductName = styled.div`
  width: 23%;
`;

export const ProductQuantity = styled.div`
  width: 23%;
  display: flex;
`;

export const TotalPrice = styled.div`
  width: 23%
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

