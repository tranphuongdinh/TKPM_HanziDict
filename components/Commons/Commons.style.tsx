import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 0 200px;
    background-color: transparent;

    @media (max-width: 1400px) {
        margin: 0 100px;
    }

    @media (max-width: 1200px) {
        margin: 0 75px;
    }

    @media (max-width: 768px) {
        margin: 0 50px;
    }

    @media (max-width: 576px) {
        margin: 0 20px;
        padding: 5px 0;
    }
`;

export const MainSection = styled.div`
    padding: 120px 0;
    min-height: 700px;
`;
