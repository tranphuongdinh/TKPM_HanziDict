import styled from "styled-components";
import { Container } from "../../components/Commons/Commons.style";
import {
    PRIMARY_COLOR,
    PRIMARY_BACKGROUND_COLOR,
    PRIMARY_COLOR_HOVER,
} from "../../constants/style";
import { ButtonSocialProps } from "../../models/models";
import { Button, SearchBar } from "../Header/Header.style";

export const FooterWrapper = styled.div`
    background-color: ${PRIMARY_BACKGROUND_COLOR};
    box-shadow: none;
    padding: 20px 0;
    h5 {
        color: #fff;
        text-align: center;
    }
    position: initial;
`;

export const FooterContainer = styled(Container)`
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    border-bottom: 2px solid ${PRIMARY_COLOR};
`;

export const EventWrapper = styled.div`
    width: 360px;
    margin: 30px 0;
    color: #fff;
    h3 {
        text-transform: uppercase;
				color: ${PRIMARY_COLOR};
    }
    p {
        text-align: justify;
				font-size: .9rem;
    }
    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const FacebookEmbed = styled(EventWrapper)`
    width: 340px;
    height: 100%;

    iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const EventInput = styled(SearchBar)`
    width: 100% !important;
    margin: 0 !important;
    justify-content: flex-start !important;

    input {
        width: 80% !important;
    }

    button {
        padding: 10px 20px;
        width: auto !important;
        color: #fff;
        &:hover {
            background: ${PRIMARY_COLOR_HOVER};
        }
    }
`;

export const ButtonSocial = styled(Button)<ButtonSocialProps>`
    border-radius: 2px;
    width: 20px;
    height: 30px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : "#000"} !important;
    &:hover {
        background: #868686 !important;
    }
`;

export const FooterEnd = styled(Container)`
    justify-content: space-between;
`;

export const AddressContainer = styled(FooterContainer)``;

export const AddressWrapper = styled.div`
    color: #fff;
    h3 {
        color: ${PRIMARY_COLOR};
        margin-bottom: 5px;
    }
    width: 100%;

    &:not(:first-child) {
        margin-top: 30px;
    }
`;

export const AddressDetail = styled.div`
    h4 {
        margin-bottom: 5px;
    }
    p {
        font-size: 0.8rem;
        color: #ccc;
    }
`;

export const AddressDetailWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 10px;

    @media (max-width: 476px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
`;
