import styled from "styled-components";


export const ProductListContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;

        h2 {
            text-align: center;
            text-transform: uppercase;
        }
`;

export const Preview = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
        row-gap: 40px;
`;

