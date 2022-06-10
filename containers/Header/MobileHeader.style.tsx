import styled from "styled-components";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR } from "../../constants/style";
import { HeaderContainer, NavLink, SearchBar, UserInfo } from "./Header.style";

export const MobileHeaderWrapper = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }
    background-color: #fff;
    position: fixed;
    z-index: 99;
    width: 100%;
    box-shadow: 0px 0px 10px #d2d2d2;
`;

export const MobileHeaderContainer = styled(HeaderContainer)``;

export const ToggleMenu = styled.div`
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
        color: ${PRIMARY_COLOR};
    }
`;

export const CloseMenu = styled(ToggleMenu)`
    color: #fff;
    position: absolute;
    top: 15px;
    right: 20px;
`;
export const BrandIcon = styled(CloseMenu)`
    right: 0;
    left: 45px;
    width: 30px;
    height: 30px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const MobileMenu = styled.div`
    padding-top: 60px;
    position: absolute;
    width: 300px;
    height: 100vh;
    z-index: 100;
    top: 0;
    right: 0;
    background: ${PRIMARY_BACKGROUND_COLOR};
    border-left: 1px solid ${PRIMARY_COLOR};
    color: #fff;
    transform: translateX(100%);
    transition: all 0.3s ease-in-out;

    @media (max-width: 350px) {
        width: 95%;
    }

    &.active {
        transform: translateX(0);
        box-shadow: 0px 0px 50px 10000px rgba(0, 0, 0, 0.8);
    }

    ${NavLink} {
        ul {
            flex-direction: column;
            align-items: flex-start;

            li {
                margin-bottom: 10px;
            }
        }
    }

    ${UserInfo} {
        border-left: none;
        margin-left: 30px;
    }

    ${SearchBar} {
        width: 80% !important;
        margin-left: 40px;
    }

    .Dropdown-root {
        width: 220px;
    }

    .Dropdown-control {
        background: ${PRIMARY_COLOR};
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px 10px;
    }

    .Dropdown-option {
        &:hover {
            background: ${PRIMARY_COLOR};
            color: #fff;
        }
    }
`;

export const AuthInfo = styled.div`
    border-bottom: 1px solid ${PRIMARY_COLOR};
`;
